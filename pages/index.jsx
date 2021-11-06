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

export default function Index() {
  return (
    <div>
      <Header/>
      <CollectorColumn items = {[
            {
              id: 1,
              name: "Peter",
              nftsCount: 12312,
              avatar: "/images/avatar.png",
              verified: true,
            },
            {
              id: 2,
              name: "John",
              nftsCount: 1111,
              avatar: "/images/avatar.png",
              verified: true,
            },
            {
              id: 3,
              name: "Steven",
              nftsCount: 432,
              avatar: "/images/avatar.png",
              verified: true,
            }
          ]}/>
      <Footer/>
    </div>
  );
}
