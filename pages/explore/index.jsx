import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Spacer from "../../src/components/spacer/Spacer";
import axios from "axios";

export default function Explore(){
    const [nfts, setNfts] = useState([]);
    const [nftSortFilter, setNftSortFilter] = useState([]);
    const [nftPriceFilter, setNftPriceFilter] = useState([]);
    const [priceFilterValue, setPriceFilterValue] = useState('');
    const [sortFilterValue, setSortFilterValue] = useState('');

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
      const data = await fetch(process.env.apiUrl + '/explore' + '?' +
      (sortFilterValue != "" ? `sort=${sortFilterValue}` : '') + '&' + (priceFilterValue != "" ? `price=${priceFilterValue}` : ''))
      .then((res) => res.json());
    //   setNfts(data?.nfts)
      setNftSortFilter(data?.filters.sort);
      setNftPriceFilter(data?.filters.price);
      getData();
    }, [priceFilterValue, sortFilterValue])
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
                        sort={nftSortFilter}
                        price={nftPriceFilter}
                        onPriceFilterChange={((e) => {
                            setPriceFilterValue(e.target.value)
                            console.log(priceFilterValue);
                        })}
                        onSortFilterChange={(e) => setSortFilterValue(e.target.value)}
                        onPriceFilterChange={(e) => setPriceFilterValue(e.target.value)}
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
                                return <Link href={`/product/${card.objectId}`}>
                                            <Grid item xs={3} key={index} xs={11} md={6} xl={3}>
                                            <Card
                                            {...card}
                                            ownerId={card.owner.objectId}
                                            mediaUrl={card.image}
                                            user={card.owner}
                                            timeLeft={(new Date(card.auction_end).getTime() - Date.now())/1000}
                                            />
                                        </Grid>
                                      </Link>
                            })
                        }
                    </Grid>
            </Grid>
            :
            <Spacer/>
            }
        </Grid>
        </Container>
        </div>
    );
}