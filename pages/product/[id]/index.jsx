import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react";
import {parseISO, isAfter} from 'date-fns';
import axios from 'axios';

export default function Product(){
    const router = useRouter()
    const { id } = router.query
    const [product, setProduct] = useState([]);

    async function getData(){
      const res = await axios.get(`${process.env.api}/classes/Nfts/${id}`, {headers: {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json',
      }})
      .catch((e) => console.log(e));
      if(res?.data){
        console.log(res.data);
        setProduct(res.data)
      }
    }

    async function makeBid(){
      const user = JSON.parse(sessionStorage.getItem('user')).data;
      console.log(`${process.env.api}/classes/Nfts/${id}`);
      const date = Date.now();
      product.bids.splice(0, 0, {"amount" : product.bid, "user" : user, "time" : date});
      await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"bids" : product.bids}, {headers: {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json'
      }})
      .catch((e) => console.log(e.response));
      const minBidUpdatedProduct = await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"bid" : product.bid + 1}, {headers: {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json',
      }})
      .catch((e) => console.log(e));
      console.log(minBidUpdatedProduct);
      if(minBidUpdatedProduct?.data){
        getData();
      }
    }

    useEffect(() => {
            getData();
            console.log(product);
    }, [id])



    return(
        <div style={{position : 'relative', overflow : "hidden"}}>
        <ProductContainer 
          name={product.name}
          owner={product.owner}

          price={product.price}
          currency={product.currency}
          likes={product.likes}
          auction_end={product.auction_end}
          details={product.details}
          timeEnd={Number((new Date(product.auction_end).getTime() - Date.now())/1000)}
          isLive={isAfter(parseISO(product.auction_end), Date.now())}
          url={product?.image}
          bids= {product.bids}
          bidAmount={product.bid}
          onBuy={() => {}}
          onBid={makeBid}
      />
        </div>
    );
}