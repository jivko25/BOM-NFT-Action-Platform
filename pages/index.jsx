// import dataFeatured from "../data/featured.json"
// import dataTrending from "../data/trending.json"
// import dataUsers from "../data/users.json"
import {timeInSeconds} from '../src/helpers/timeConvertor.js';
import dataNfts from "../data/nfts.json"
import { useState, useEffect, useRef } from "react"
import Header from "../src/components/header/Header.jsx"
import Featured from "../src/components/featured/Featured.jsx"
import Trending from "../src/components/trending/Trending.jsx"
import TopCollectors from "../src/components/collectors/TopCollectors.jsx"
import How from "../src/components/how/How.jsx"
import Auctions from "../src/components/auctions/Auctions.jsx"
import Footer from "../src/components/footer/Footer.jsx"
import ProductImage from "../src/components/product/ProductImage"
import ProductInfoTitle from "../src/components/product/ProductInfoTitle"
import ProductInfoPrice from "../src/components/product/ProductInfoPrice"
import ProductInfoStatus from "../src/components/product/ProductInfoStatus"
import ProductInfoLikes from "../src/components/product/ProductInfoLikes"
import ProductInfoCreator from "../src/components/product/ProductInfoCreator"
import ProductInfoTimer from "../src/components/product/ProductInfoTimer"
import ProductInfo from "../src/components/product/ProductInfo"
import ProductTabs from "../src/components/product/ProductTabs"
import { LoremIpsum, Avatar, loremIpsum } from 'react-lorem-ipsum'
import ProductActions from "../src/components/product/ProductActions"
import ProductContainer from "../src/components/product/ProductContainer"
import { Link } from "@mui/material"
import Hero from "../src/components/hero/Hero"
import Description from "../src/components/description/Description"
import { formatDistance, parseISO } from 'date-fns';



export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);


  useEffect(() => {
    fetch(`${process.env.apiUrl}/featured`)
                        .then(res => res.json())
                        .then(data => {
                          data.nfts[0].cols = 3;
                          data.nfts[0].rows = 2;
                          setFeaturedCards(data.nfts);
                        });
  }, []);

  useEffect(async () => {
    const dataTrending = await fetch(process.env.apiUrl + '/trending')
    .then((res) => res.json());

    setTrendingItems(dataTrending?.nfts)
    setTrendingFilters(dataTrending?.filters?.sort)
  }, [])

  useEffect(async () => {
    await fetch(process.env.apiUrl + '/top-collectors')
    .then(res => res.json())
    .then(data => {
      setCollectors(data.users.sort((a, b) => b.nftsCount - a.nftsCount));
      setCollectorFilters(data.filters.sort);
    });
  }, [])

  useEffect(async () => {
    await fetch(process.env.apiUrl + '/live-auctions')
    .then(res => res.json())
    .then(data => {
      console.log(data.nfts);
      setAuctions(data.nfts);
      setAuctionFilters(data.filters.price)
      // console.log(formatDistance(
      //             Date.now(),
      //             parseISO("2021-10-22T08:29:10.359Z"),
      //             { addSuffix: true }
      //           ));
      console.log(timeInSeconds("2021-10-22T08:29:10.359Z"));
    })
  }, [])


  let how = {
    title: "How it works",
    description: `Discover, collect, and sell extraordinary NFTs
        on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.`,
    items: [
      {
        title: "Digital Currency",
        description:
          "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
      },
      {
        title: "Crypto Wallet",
        description:
          "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
      },
      {
        title: "BUM.",
        description:
          "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
      },
    ],
    link: "https://app.boom.dev/"

  }

  return (
    <div style={{position : 'relative'}}>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} filters={trendingFilters} />
      <TopCollectors collectors={collectors} filters={collectorFilters}/>
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions cards={auctions} filters={auctionFilters} />
      <Footer />
    </div>
  )
}
