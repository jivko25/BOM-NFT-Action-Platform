import Example from "../src/components/example/Example";
import Logo from "../src/components/logo/Logo";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Header  from "../src/components/header/Header";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import HowStep from "../src/components/how/Step";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import TopCollectors from "../src/components/collectors/TopCollectors";

export default function Index() {
  return (
    <div>
      <Header/>
      <TopCollectors collectors = {[
    {
      name: "Peter",
      nftsCount: 12312,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "John",
      nftsCount: 1111,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Steven",
      nftsCount: 52,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Peter",
      nftsCount: 12312,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "John",
      nftsCount: 1111,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Steven",
      nftsCount: 52,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
  ]}/>
      <Footer/>
    </div>
  );
}
