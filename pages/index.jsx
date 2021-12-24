import { useState, useEffect, useRef } from "react"
import Header from "../src/components/header/Header.jsx"
import {Featured} from "../src/components/featured/Featured.jsx"
import {Trending} from "../src/components/trending/Trending.jsx"
import {TopCollectors} from "../src/components/collectors/TopCollectors.jsx"
import How from "../src/components/how/How.jsx"
import {Auctions} from "../src/components/auctions/Auctions.jsx"
import Footer from "../src/components/footer/Footer.jsx"
import axios from 'axios';
import PrivacyPolicy from "../src/components/policy/PrivacyPolicy.jsx"
import CookiesPolicy from "../src/components/cookies/CookiesPolicy.jsx"
import Navigation from "../src/components/navigation/Navigation.jsx"
import CreateNftModal from "../src/components/create/CreateNftModal.jsx"




export default function Home() {
  //useStates
  const [featuredCards, setFeaturedCards] = useState([]);

  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [trendingFilterValue, setTrendingFilterValue] = useState(2);

  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [collectorFilterValue, setCollectorFilterValue] = useState('asc');

  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  const [auctionFilterValue, setAuctionFilterValue] = useState(1);

  //Urls
  const featuredUrl = `${process.env.apiUrl}/featured`;

  const trendingUrl = "https://parseapi.back4app.com/classes/Nfts";

  const collectorUrl = process.env.apiUrl + '/top-collectors'
  + (collectorFilterValue != "" ? `?sort=${collectorFilterValue}` : '');

  const auctionUrl = "https://parseapi.back4app.com/classes/Nfts";

  const fetchDataForFirstTime = () => {
    const getFeatured = axios.get(featuredUrl);
    const getTrending = axios.get(trendingUrl, {headers: process.env.headers});
    const getCollectors = axios.get(collectorUrl);
    const getAuctions = axios.get(auctionUrl, {headers: process.env.headers});

    axios.all([getFeatured, getTrending, getCollectors, getAuctions]).then(
      axios.spread((...data) => {
        const dataFeatured = data[0].data.nfts;
        const dataTrending = data[1].data.results
        .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 < 0)
        .sort((a, b) => b.likes - a.likes);
        const dataCollectors = data[2].data.users;
        const dataAuctions = data[3].data.results
        .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 > 0)
        .sort((a, b) => (new Date(a.auction_end).getTime() - Date.now())/1000 - (new Date(b.auction_end).getTime() - Date.now())/1000);


        // const dataTrendingFilters = data[1].data.filters.sort;
        const dataCollectorsFilters = data[2].data.filters.sort;
        // const dataAuctionsFilters = data[3].data.filters.price;

        dataFeatured[0].cols = 3;
        dataFeatured[0].rows = 2;
        setFeaturedCards(dataFeatured);

        setTrendingItems(dataTrending);
        // setTrendingFilters(dataTrendingFilters)

        setCollectors(dataCollectors.sort((a, b) => b.nftsCount - a.nftsCount));
        setCollectorFilters(dataCollectorsFilters);

        setAuctions(dataAuctions);
        // setAuctionFilters(dataAuctionsFilters)
      })
    )
  }


  useEffect(() => fetchDataForFirstTime(), []);

  const firstUpdateFeatured = useRef(true);
  const firstUpdateTrending = useRef(true);
  const firstUpdateCollectors = useRef(true);
  const firstUpdateAuctions = useRef(true);
  //Featured

  useEffect(() => {
    if (firstUpdateFeatured.current) {
      firstUpdateFeatured.current = false;
      return;
    }
    fetch(featuredUrl)
                        .then(res => res.json())
                        .then(data => {
                          data.nfts[0].cols = 3;
                          data.nfts[0].rows = 2;
                          setFeaturedCards(data.nfts);
                        });
  }, []);

  //Trending

  useEffect(async () => {
    if (firstUpdateTrending.current) {
      firstUpdateTrending.current = false;
      return;
    }
    const dataTrending = await fetch(trendingUrl)
    .then((res) => res.json());
    setTrendingItems(dataTrending?.nfts)
    // setTrendingFilters(dataTrending?.filters?.sort)
  }, [trendingFilterValue])

  //Collectors

  useEffect(async () => {
    if (firstUpdateCollectors.current) {
      firstUpdateCollectors.current = false;
      return;
    }
    await fetch(collectorUrl)
    .then(res => res.json())
    .then(data => {
      setCollectors(data.users.sort((a, b) => b.nftsCount - a.nftsCount));
      setCollectorFilters(data.filters.sort);
    });
  }, [collectorFilterValue])

  //Auctions

  useEffect(async () => {
    if (firstUpdateAuctions.current) {
      firstUpdateAuctions.current = false;
      return;
    }
    await fetch(auctionUrl)
    .then(res => res.json())
    .then(data => {
      setAuctions(data.nfts);
      // setAuctionFilters(data.filters.price)
    })
  }, [auctionFilterValue])





  //TODO Add how data from data file
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

  console.log(auctions);
  return (
    <div style={{position : 'relative', overflow : "hidden"}}>
      <Navigation/>
      <Featured items={featuredCards} />
      <Trending cards={trendingItems} filters={trendingFilters} filterValue={trendingFilterValue} onChangeFilterValue={(e) => setTrendingFilterValue(e.target.value)}/>
      <TopCollectors collectors={collectors} filters={collectorFilters} filterValue={collectorFilterValue} onChangeFilterValue={(e) => setCollectorFilterValue(e.target.value)}/>
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions cards={auctions} filters={auctionFilters} onChangeFilterValue={(e) => setAuctionFilterValue(e.target.value)} filterValue={auctionFilterValue}/>
      <CreateNftModal/>
    </div>
  )
}
