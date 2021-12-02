import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
// import nfts from "../../data/nfts.json";
import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Explore(){
    const [nfts, setNfts] = useState([]);
    const [nftSortFilter, setNftSortFilter] = useState([]);
    const [nftPriceFilter, setNftPriceFilter] = useState([]);

    useEffect(async () => {
      const data = await fetch(process.env.apiUrl + '/explore')
      .then((res) => res.json());
  
      setNfts(data?.nfts)
      setNftSortFilter(data?.filters.sort);
      setNftPriceFilter(data?.filters.price);
    }, [])
    return(
        <div style={{position:'relative'}}>
        <Header/>
        <Grid container direction="column" spacing={3} style={{"margin-top": "30px", "margin":"auto", "max-width":"100%"} }>
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={4}>
                    <ExploreTitle text = "Explore"/>
                    </Grid>
                    <Grid item xs={8}>
                        <ExploreFilters 
                        sort={nftSortFilter}
                        price={nftPriceFilter}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                    <Grid container >
                        {
                            nfts.map((item, index) => {  
                                   return <Link href={`/product/${item.id}`}>
                                            <Grid item xs={3} key={index}>
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
                                            />
                                        </Grid>
                                      </Link>
                            })
                        }
                    </Grid>
            </Grid>
        </Grid>
        <Footer/>
        </div>
    );
}