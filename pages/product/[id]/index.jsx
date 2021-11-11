import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";

export default function Product(){
    // const router = useRouter()
    // const { id } = router.query

    return(
        <>
        <Header/>
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
        </>
    );
}