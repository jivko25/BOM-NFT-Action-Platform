import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Header  from "../src/components/header/Header";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";

export default function Index() {
  return (
    <div>
      <Header/>
      {/* <Avatar url = '/images/avatar.png' verified = "true"/> */}
      {/* <User name = "test" info = "testInfo" avatar = '/images/avatar.png' verified = "true"/> */}
      {/* <Card name="Clock" likes={1000} mediaUrl="/images/nft.jpg" user={{avatarUrl: "/images/avatar.png", verified: true}} price= "12.2" currency="ETH"/> */}
      <Trending cards = {[
        {
          name: "Ivy",
          user: {avatarUrl: 'images/avatar.png', verified : true},
          mediaUrl: 'images/nft.jpg',
          price: '1',
          currency: 'ETH'
        },
        {
          name: "DOGE",
          user: {avatarUrl: 'images/avatar.png', verified : true},
          mediaUrl: 'images/nft.jpg',
          price: '1',
          currency: 'ETH'
        },
        {
          name: "BTC",
          user: {avatarUrl: 'images/avatar.png', verified : true},
          mediaUrl: 'images/nft.jpg',
          price: '1',
          currency: 'ETH'
        },
        {
          name: "Litecoin",
          user: {avatarUrl: 'images/avatar.png', verified : true},
          mediaUrl: 'images/nft.jpg',
          price: '1',
          currency: 'ETH'
        }
      ]}/>
    </div>
  );
}
