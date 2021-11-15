import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import nfts from "../../data/nfts.json";

export default function Explore(){
    const data = [
        {
          id: 401,
          name: "Tasty Granite Pizza",
          price: 0.107,
          owner: 401,
          likes: 4459,
          token_id: "0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187.jpg",
          currency: "ETH",
          featured: false,
          auction_end: "2022-08-15T04:27:46.687Z",
          published_at: "2021-10-22T08:29:07.092Z",
          created_at: "2021-10-22T08:29:10.530Z",
          updated_at: "2021-10-22T08:29:19.936Z",
          source: {
            id: 758,
            name: "0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187.jpg",
            alternativeText: null,
            caption: null,
            width: 400,
            height: 279,
            formats: {
              thumbnail: {
                name: "thumbnail_0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187.jpg",
                hash: "thumbnail_0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a",
                ext: ".jpg",
                mime: "image/jpeg",
                width: 224,
                height: 156,
                size: 7.92,
                path: null,
                url: "https://nft-auction.herokuapp.com/uploads/thumbnail_0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a.jpg",
              },
            },
            hash: "0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 18.78,
            url: "https://nft-auction.herokuapp.com/uploads/0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            created_at: "2021-10-22T08:29:05.108Z",
            updated_at: "2021-10-22T08:29:05.108Z",
          },
        },
        {
          id: 427,
          name: "Rustic Soft Shoes",
          price: 1.508,
          owner: 401,
          likes: 1512,
          token_id: "0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e.jpg",
          currency: "ETH",
          featured: false,
          auction_end: null,
          published_at: "2021-10-22T08:29:07.092Z",
          created_at: "2021-10-22T08:29:12.539Z",
          updated_at: "2021-10-22T08:29:19.936Z",
          source: {
            id: 721,
            name: "0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e.jpg",
            alternativeText: null,
            caption: null,
            width: 400,
            height: 225,
            formats: {
              thumbnail: {
                name: "thumbnail_0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e.jpg",
                hash: "thumbnail_0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca",
                ext: ".jpg",
                mime: "image/jpeg",
                width: 245,
                height: 138,
                size: 6.5,
                path: null,
                url: "https://nft-auction.herokuapp.com/uploads/thumbnail_0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca.jpg",
              },
            },
            hash: "0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 12.77,
            url: "https://nft-auction.herokuapp.com/uploads/0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            created_at: "2021-10-22T08:29:03.959Z",
            updated_at: "2021-10-22T08:29:03.959Z",
          },
        },
      ]; 

      const user = {
        id: 401,
        username: "Brannon.Doyle29",
        email: "Gerard31@hotmail.com",
        info: "Default role given to authenticated user.",
        provider: null,
        verified: true,
        blocked: null,
        role: {
          id: 1,
          name: "Authenticated",
          description: "Default role given to authenticated user.",
          type: "authenticated",
        },
        created_at: "2021-10-22T08:29:19.930Z",
        updated_at: "2021-10-22T08:29:19.941Z",
        avatarUrl: "https://nft-auction.herokuapp.com/uploads/0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec.jpg",
        avatar: {
          id: 782,
          name: "0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3.jpg",
          alternativeText: null,
          caption: null,
          width: 200,
          height: 134,
          formats: null,
          hash: "0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 4.87,
          url: "https://nft-auction.herokuapp.com/uploads/0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec.jpg",
          backgroundUrl:
            "https://nft-auction.herokuapp.com/uploads/0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          created_at: "2021-10-22T08:29:18.412Z",
          updated_at: "2021-10-22T08:29:18.412Z",
        },
        nftsCount: 5,
      } ;
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
                        <ExploreFilters filters={{
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
                        }
                        }/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                    <Grid container>
                        {
                            data.map(item => {
                                    return <Grid item xs={3}>
                                            <Card name = {item.name} likes = {item.likes}  mediaUrl = {item.source.formats.thumbnail.url}  user={user}  price = {item.price}  currency = {item.currency} timeLeft={50}/>
                                        </Grid>
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