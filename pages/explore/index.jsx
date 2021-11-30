import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import nfts from "../../data/nfts.json";
import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Explore(){
    const [nfts, setNfts] = useState([]);
    const [nftFilters, setNftFilters] = useState([]);

    useEffect(async () => {
      const data = await fetch(process.env.apiUrl + '/trending')
      .then((res) => res.json());
  
      setNfts(data?.nfts)
      setNftFilters(data?.filters)
    }, [])
    return(
        <div style={{position:'relative'}}>
        <Header/>
        <Grid container direction="column" spacing={3} style={{"margin-top": "30px"}}>
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={4}>
                    <ExploreTitle text = "Explore"/>
                    </Grid>
                    <Grid item xs={8}>
                        <ExploreFilters 
                        // filters = {nftFilters}
                        filters={{
                        sort: [
                        { label: "Date (Ascending)", value: 1 },
                        { label: "Date (Descending)", value: 2 },
                        { label: "Name (Ascending)", value: 3 },
                        { label: "Name (Descending)", value: 4 },
                        { label: "Price (Ascending)", value: 5 },
                        { label: "Price (Descending)", value: 6 },
                        ],
                        price: [
                        { label: "0 - 0.01 ETH", value: 7 },
                        {
                            label: "0.01 - 0.04 ETH",
                            value: 8,
                        },
                        {
                            label: "0.04 - 0.07 ETH",
                            value: 9,
                        },
                        ],
                        }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                    <Grid container>
                        {
                            nfts.map((item, index) => {
                                    // return  
                                    // <Link href={`/product/${item.id}`}>
                                      return  <Grid item xs={3} key={index}>
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
                                      // </Link>
                            })
                        }
                    </Grid>
            </Grid>
        </Grid>
        <Container maxWidth={"xl"}>
                    
                </Container>
        <Footer/>
        </div>
    );
}