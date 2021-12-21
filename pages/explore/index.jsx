import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import {useState, useEffect} from 'react';
import Link from 'next/link';
import Spacer from "../../src/components/spacer/Spacer";

export default function Explore(){
    const [nfts, setNfts] = useState([]);
    const [nftSortFilter, setNftSortFilter] = useState([]);
    const [nftPriceFilter, setNftPriceFilter] = useState([]);
    const [priceFilterValue, setPriceFilterValue] = useState('');
    const [sortFilterValue, setSortFilterValue] = useState('');

    useEffect(async () => {
      const data = await fetch(process.env.apiUrl + '/explore' + '?' +
      (sortFilterValue != "" ? `sort=${sortFilterValue}` : '') + '&' + (priceFilterValue != "" ? `price=${priceFilterValue}` : ''))
      .then((res) => res.json());
        console.log(process.env.apiUrl + '/explore' + '?' +
        (sortFilterValue != "" ? `sort=${sortFilterValue}` : '') + '&' + (priceFilterValue != "" ? `price=${priceFilterValue}` : ''));
      setNfts(data?.nfts)
      setNftSortFilter(data?.filters.sort);
      setNftPriceFilter(data?.filters.price);
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
                            nfts.map((item, index) => {  
                                return <Link href={`/product/${item.id}`}>
                                            <Grid item xs={3} key={index} xs={11} md={6} xl={3}>
                                            <Card name = {item.name} 
                                            likes = {item.likes}  
                                            mediaUrl = {item.source.url}  
                                            user={
                                                {
                                                    avatarUrl : item.owner.avatar.url, 
                                                    verified : item.owner.verified
                                                }
                                            }  
                                            price = {item.price}  
                                            currency = {item.currency} 
                                            timeLeft={(new Date(item.auction_end).getTime() - Date.now())/1000}
                                            ownerId = {item.owner.id}
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