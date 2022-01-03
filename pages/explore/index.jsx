import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Spacer from "../../src/components/spacer/Spacer";
import axios from "axios";
import Pagenator from '../../src/components/pagenator/Pagenator';

  const sortValues = [
    {value : 0, label : "By created date ASC", queryString : "order=createdAt"},
    {value : 1, label : "By created date DESC", queryString : "order=-createdAt"},
    {value : 2, label : "By name ASC", queryString : "order=name"},
    {value : 3, label : "By name DESC", queryString : "order=-name"},
    {value : 4, label : "By price ASC", queryString : "order=price"},
    {value : 5, label : "By price DESC", queryString : "order=-price"},
  ]
  
  const priceRangeValues = [
    {value : 0, label : "Show all", queryString : ''},
    {value : 1, label : "0-200", queryString : 'where={"price":{"$gte":0,"$lte":200}}'},
    {value : 2, label : "201-1000", queryString : 'where={"price":{"$gte":201,"$lte":1000}}'},
    {value : 3, label : "1000+", queryString : 'where={"price":{"$gte":1000}}'},
  ]

export default function Explore(){
    const [nfts, setNfts] = useState([]);
    const [priceFilterValue, setPriceFilterValue] = useState(0);
    const [sortFilterValue, setSortFilterValue] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(0);

    async function getData(){
        const url = `${process.env.api}/classes/Nfts`;
        const items = await axios.get(url, {headers: {
          'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
          'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
          'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
          'X-Parse-Revocable-Session' : '1',
          'Content-Type' : 'application/json',
        }})
        .catch((e) => console.log(e));
        if(items?.data){
          setNfts(items.data.results);
        }
      }

    useEffect(async () => {
        const url = (sort, price) => `${process.env.api}/classes/Nfts?${searchValue == '' ? `limit=8&skip=${page*8}` : ''}&${sort}&${price}`;
        const items = await axios.get(url(sortValues[sortFilterValue].queryString, priceRangeValues[priceFilterValue].queryString), {headers: {
          'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
          'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
          'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
          'X-Parse-Revocable-Session' : '1',
          'Content-Type' : 'application/json',
        }})
        .catch((e) => console.log(e));
        if(items?.data){
          console.log(items);
          setNfts(items?.data.results.filter(item => item?.name.includes(searchValue)));
        }
    }, [priceFilterValue, sortFilterValue,searchValue, page])
    return(
        <div style={{position:'relative', overflow : "hidden"}}>
        <Container>
        <Grid container direction="column" spacing={1} style={{"margin-top": "30px", "margin":"auto", "max-width":"100%"} } justifyContent={'center'}>
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                    <ExploreTitle text = "Explore"/>
                    </Grid>
                    <Grid item xs={12}>
                        <ExploreFilters 
                        sort={sortValues}
                        price={priceRangeValues}
                        onSortFilterChange={(e) => {setSortFilterValue(e.target.value);setPage(0);}}
                        onPriceFilterChange={(e) => {setPriceFilterValue(e.target.value);setPage(0);}}
                        onSearchValueChange = {(e) => {setSearchValue(e.target.value);setPage(0);}}
                        sortValue={sortFilterValue}
                        priceValue = {priceFilterValue}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {nfts.length > 0 ?
            <Grid item>
                    <Grid container spacing={1} justifyContent="center">
                        {
                            nfts.map((card, index) => {  
                                return <Grid item xs={11} md={6} xl={3} key={card.objectId}>
                                          <Card
                                          {...card}
                                          likes={card.likes}
                                          ownerId={card.owner.objectId}
                                          mediaUrl={card.image}
                                          user={card.owner}
                                          timeLeft={(new Date(card.auction_end).getTime() - Date.now())/1000}
                                          id={card.objectId}
                                          />
                                      </Grid>
                            })
                        }
                    </Grid>
            </Grid>
            :
            <Spacer/>
            }
        </Grid>
        <Pagenator onPrevious={() => {setPage(page-1); scroll(0, 0)}} onNext={() => {setPage(page+1); scroll(0, 0)}} isFirst={page == 0} isLast={nfts.length < 8}/>
        </Container>
        </div>
    );
}