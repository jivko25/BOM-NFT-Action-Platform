import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { timeInSeconds } from "../../../src/helpers/timeConvertor";
import {parseISO, isAfter} from 'date-fns';
import { ColorLensTwoTone } from "@mui/icons-material";
// import nfts from './nfts.json';

export default function Product(){
    const router = useRouter()
    const { id } = router.query
    const [product, setProduct] = useState([]);
    console.log(id)

    useEffect(async () => {
      await fetch(`${process.env.apiUrl}/nfts/${id}`)
          .then(res => res.json())
          .then(data => {
            // console.log(new Date(data.auction_end).getTime() - Date.now())
            data.endTime = (new Date(data.auction_end).getTime() - Date.now())/1000;
            setProduct(data)
          });
    }, [id])

    // const owner = {
    //   name: product.owner["username"],
    //   verified: product.owner['verified'],
    //   avatar: product.owner.avatar['url']
    // }

    return(
        <div style={{position : 'relative'}}>
        <Header/>
        {/* <ProductContainer {...product} owner={product?.owner}/> */}
        <ProductContainer 
          name={product.name}
          // owner={{
          //   username: "Justen_King18",
          //   verified:true,
          //   avatar:"https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"
          // }}
          owner={product.owner}

          price={product.price}
          currency={product.currency}
          likes={product.likes}
          auction_end={product.auction_end}
          details={product.details}
          timeEnd={Number((new Date(product.auction_end).getTime() - Date.now())/1000)}
          isLive={isAfter(parseISO(product.auction_end), Date.now())}
          source={product.source}
          bids= {product.bids}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
      />
        <Footer/>
        </div>
    );
}