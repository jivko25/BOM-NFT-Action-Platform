import { Container, Grid } from "@mui/material";
import { useContext, useState } from "react"
import Card from "../../src/components/card/Card";
import { UserContext } from "../../src/components/contexts/UserProvider"
import Hero from "../../src/components/hero/Hero";


export default function Index(){
    const context = useContext(UserContext);
    return(
        <div>
            <Hero text={'My Bids'}/>
            <Container>
            <Grid container spacing={1}>
            {
                context[2].map(card => {
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
            </Container>
        </div>
    )
}