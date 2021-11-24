// import dataFeatured from "../data/featured.json"
// import dataTrending from "../data/trending.json"
// import dataUsers from "../data/users.json"
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



export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [auctionsCards, setAuctionsCards] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);

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
    const dataCollectors = await fetch(process.env.apiUrl + '/top-collectors')
    .then(res => res.json())
    .then(data => {
      setCollectors(data.users.sort((a, b) => b.nftsCount - a.nftsCount));
      setCollectorFilters(data.filters.sort);
    });
  })

  // collectors.sort((a, b) => b.nftsCount - a.nftsCount);

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

  let auctions = [
    {
      name: "Something",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 12.2,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Riddles",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 10.1,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Wandering Flame",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 5.5,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Glorious Curtain",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 0.1,
      currency: "ETH",
      timeLeft: 3.6e6
    }]

  return (
    <div style={{position : 'relative'}}>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} filters={trendingFilters} />
      <TopCollectors collectors={collectors} filters={collectorFilters}/>
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions cards={auctions} />
      <Footer />
    </div>
  )
}
