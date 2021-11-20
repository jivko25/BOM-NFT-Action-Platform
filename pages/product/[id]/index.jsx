import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useRouter } from 'next/router'
// import nfts from './nfts.json';

export default function Product(){
    const router = useRouter()
    const { id } = router.query
    // const findItem = nfts.filter(item => item.id == id);
    // const item = findItem[0];
    // console.log(item.owner.username);

    return(
        <div style={{position : 'relative'}}>
        <Header/>
        {/* <ProductContainer 
          name={item.name}
          owner={{
            name: "test",
            verified:true,
            avatar:"https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"
          }}
          price={item.price}
          currency={item.currency}
          likes={item.likes}
          auction_end={item.auction_end}
          details="asdasdads"
          isLive={item.auction_end != null}
          source={item.source}
          bids= {[
            {
              user: { avatar: "/images/avatar.png", name: "hrisi", verified: true },
              amount: 30,
              date: "2021-10-22T08:29:23.382Z",
            },
            {
              user: { avatar: "/images/avatar.png", name: "maxi", verified: true },
              amount: 1000,
              date: "2021-11-10T08:29:23.382Z",
            },
          ]}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
      /> */}
        <ProductContainer 
          name="Ergonomic Concrete Tuna"
          owner={{
            name: "Justen_King18",
            verified:true,
            avatar:"https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"
          }}
          price={20}
          currency="ETH"
          likes={25}
          auction_end="2022-09-02T20:43:19.149Z"
          details="asdasdads"
          isLive={true}
          source={{
            url: "https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"
          }}
          bids= {[
            {
              user: { avatar: "/images/avatar.png", name: "hrisi", verified: true },
              amount: 30,
              date: "2021-10-22T08:29:23.382Z",
            },
            {
              user: { avatar: "/images/avatar.png", name: "maxi", verified: true },
              amount: 1000,
              date: "2021-11-10T08:29:23.382Z",
            },
          ]}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
      />
        <Footer/>
        </div>
    );
}