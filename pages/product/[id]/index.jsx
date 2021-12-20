import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import {parseISO, isAfter} from 'date-fns';

export default function Product(){
    const router = useRouter()
    const { id } = router.query
    const [product, setProduct] = useState([]);
    console.log(id)

    useEffect(async () => {
      await fetch(`${process.env.apiUrl}/nfts/${id}`)
          .then(res => res.json())
          .then(data => {
            data.endTime = (new Date(data.auction_end).getTime() - Date.now())/1000;
            setProduct(data)
          });
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
          source={product.source}
          bids= {product.bids}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
      />
        </div>
    );
}