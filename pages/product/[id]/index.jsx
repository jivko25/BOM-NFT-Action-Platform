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
    const [product, setProduct] = useState({});
    const [isSold, setIsSold] = useState(false);

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
        setProduct(res.data);
      }
    }

    
    async function makeBid(){
      const user = JSON.parse(sessionStorage.getItem('user')).data;
      const header = {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json'
      };
      const date = Date.now();
      let obj = product.bids.find(item => item.user.objectId == user.objectId);
      let index = product.bids.findIndex(item => item.user.objectId == user.objectId);
      obj ? product.bids.splice(index,1,{"amount" : product.bid, "user" : user, "time" : date}) :
      product.bids.splice(0, 0, {"amount" : product.bid, "user" : user, "time" : date});
      const updateData = await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"bids" : product.bids, "bid" : Math.round(product.bid*1.1 + 1, 2)}, {headers: header})
      .catch((e) => console.log(e.response));
      await axios.post(`${process.env.api}/classes/Activity`, 
      {
        "user" : user,
        "nft" : product,
        "type" : "bid"
      }, {headers: header})
      .catch((e) => console.log(e.response));
      if(updateData?.data){
        getData();
      }
    }

    async function deleteItem(){
      const res = await axios.delete(`${process.env.api}/classes/Nfts/${id}`, {headers: {
          'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
          'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
          'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
          'X-Parse-Revocable-Session' : '1',
          'Content-Type' : 'application/json',
        }})
        .catch((e) => console.log(e));
        if(res?.data){
          router.push('/');
        }
    }

    async function buyItem(){
      const user = JSON.parse(sessionStorage.getItem('user')).data;
      const header = {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json'
      };
      const updateData = await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"isBought" : true, "buyerId" : user.objectId, "auction_end" : product.createdAt}, {headers: header})
      .catch((e) => console.log(e.response));
        getData();
    }

    useEffect(() => {
            getData();
            console.log(product);
    }, [id, isSold])



    return(
        <div style={{position : 'relative', overflow : "hidden"}}>
        <ProductContainer 
          name={product.name}
          owner={product.owner}
          id={product.objectId}
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
          onBuy={buyItem}
          onBid={makeBid}
          onDelete={deleteItem}
          buyerId={product.buyerId}
          isBought={product.isBought}
      />
        </div>
    );
}