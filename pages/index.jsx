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
import SettingsModal from "../src/components/settings/SettingsModal.jsx"

const sortValues = [
  {value : 0, label : "By name ASC", queryString : "order=name"},
  {value : 1, label : "By name DESC", queryString : "order=-name"},
  {value : 2, label : "By price ASC", queryString : "order=price"},
  {value : 3, label : "By price DESC", queryString : "order=-price"},
  {value : 4, label : "By created date ASC", queryString : "order=createdAt"},
  {value : 5, label : "By created date DESC", queryString : "order=-createdAt"},
  {value : 6, label : "By end date ASC", queryString : 'order=updatedAt'},
  {value : 7, label : "By end date DESC", queryString : 'order=-updatedAt'}
]

const sortValuesCollectors = [
  {value : 0, label : "By items ASC", queryString : "order=-nfts,username&limit=12"},
  {value : 1, label : "By items DESC", queryString : "order=nfts,username&limit=12"},
  {value : 2, label : "By name ASC", queryString : "order=username&limit=12"},
  {value : 3, label : "By name DESC", queryString : "order=-username&limit=12"},
  {value : 4, label : "By register date ASC", queryString : "order=createdAt&limit=12"},
  {value : 5, label : "By register date DESC", queryString : "order=-createdAt&limit=12"},
]


export default function Home() {
  //useStates
  const [bids, setBids] = useState([]);
  const [likes, setLikes] = useState([]);

  const [featuredCards, setFeaturedCards] = useState([]);

  const [trending, setTrending] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilterValue, setTrendingFilterValue] = useState(0);
  const [trendingPage, setTrendingPage] = useState(0);

  const [collectors, setCollectors] = useState([]);
  const [collectorFilterValue, setCollectorFilterValue] = useState(0);

  const [auctions, setAuctions] = useState([]);
  const [auctionItems, setAuctionItems] = useState([]);
  const [auctionFilterValue, setAuctionFilterValue] = useState(6);
  const [auctionPage, setAuctionPage] = useState(0);

  //move create state in navigation component
  const [openCreate, setOpenCreate] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  //Urls
  const featuredUrl = `${process.env.apiUrl}/featured`;

  function trendingUrl(sort){
    return `https://parseapi.back4app.com/classes/Nfts?${sort}`
  }

  // const trendingUrl = (sort) => `https://parseapi.back4app.com/classes/Nfts?${sort}`;

  function collectorUrl(sort) {
    return `https://parseapi.back4app.com/users?${sort}`;
  }
  
  // const collectorUrl = (sort) => `https://parseapi.back4app.com/users?${sort}`;
  
  const auctionUrl = (sort) => `https://parseapi.back4app.com/classes/Nfts?${sort}`;

  const fetchDataForFirstTime = () => {
    const getFeatured = axios.get(featuredUrl);
    const getTrending = axios.get(trendingUrl, {headers: process.env.headers});
    const getCollectors = axios.get('https://parseapi.back4app.com/users', {headers: process.env.headers});
    const getAuctions = axios.get(auctionUrl, {headers: process.env.headers});

    axios.all([getFeatured, getTrending, getCollectors, getAuctions]).then(
      axios.spread((...data) => {
        const dataFeatured = data[0].data.nfts;
        const dataTrending = data[1].data.results
        .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 < 0)
        .slice(trendingPage, trendingPage+4);
        const dataCollectors = data[2].data.results.sort((a, b) => b.nfts.length - a.nfts.length);
        const dataAuctions = data[3].data.results
        .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 > 0)
        .sort((a, b) => (new Date(a.auction_end).getTime() - Date.now())/1000 - (new Date(b.auction_end).getTime() - Date.now())/1000)
        .slice(auctionPage, auctionPage+4);


        // const dataTrendingFilters = data[1].data.filters.sort;
        // const dataCollectorsFilters = data[2].data.filters.sort;
        // const dataAuctionsFilters = data[3].data.filters.price;

        dataFeatured[0].cols = 3;
        dataFeatured[0].rows = 2;
        setFeaturedCards(dataFeatured);

        setTrending(data[1].data.results.filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 < 0));
        setTrendingItems(dataTrending);
        // setTrendingFilters(dataTrendingFilters)

        console.log(dataCollectors);
        setCollectors(dataCollectors);
        // setCollectorFilters(dataCollectorsFilters);

        setAuctions(data[3].data.results.filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 > 0));
        setAuctionItems(dataAuctions);
        // setAuctionFilters(dataAuctionsFilters)
      })
    ).catch((error) => {console.log(error.response)})
  }


  // useEffect(() => fetchDataForFirstTime(), []);

  const firstUpdateFeatured = useRef(true);
  const firstUpdateTrending = useRef(true);
  const firstUpdateCollectors = useRef(true);
  const firstUpdateAuctions = useRef(true);

  useEffect(() => {fetchDataForFirstTime()}, [openCreate]);

  //Featured

  useEffect(() => {
    // if (firstUpdateFeatured.current) {
    //   firstUpdateFeatured.current = false;
    //   return;
    // }
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
    const data = await axios.get(trendingUrl(sortValues[trendingFilterValue].queryString), {headers: process.env.headers});
    const newData = data.data.results
    .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 < 0);
    setTrending(newData);
    setTrendingItems(newData.slice(trendingPage, trendingPage+4));
    setTrendingPage(0);
    const user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user'))?.data.objectId : null;
    let newLikes = [];
    data.data.results.forEach(item => {
      console.log(item);
      if(item.likes.includes(user)){
        newLikes.splice(0, 0, item);
      }
    })
    setLikes(newLikes)
  }, [trendingFilterValue])

  useEffect(() => {
    const newData = trending
    .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 < 0)
    .slice(trendingPage, trendingPage+4);
    setTrendingItems(newData)
  }, [trendingPage])

  //Collectors

  useEffect(async () => {
    const data = await axios.get(`https://parseapi.back4app.com/users?${sortValuesCollectors[collectorFilterValue].queryString}`, {headers: process.env.headers});
    if(collectorFilterValue == 0){
          const sortedData = data.data.results.sort((a, b) => b.nfts.length - a.nfts.length)
          setCollectors( data.data.results );
    }
    else if(collectorFilterValue == 1){
      const sortedData = data.data.results.sort((a, b) => a.nfts.length - b.nfts.length)
      setCollectors( data.data.results );
    }
    else{
      setCollectors( data.data.results );
    }
  }, [collectorFilterValue])

  //Auctions

  useEffect(async () => {
    const data = await axios.get(auctionUrl(sortValues[auctionFilterValue].queryString), {headers: process.env.headers});
    if(auctionFilterValue != 6 & auctionFilterValue != 7){
    const newData = data.data.results
    .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 > 0);
    setAuctions(newData);
    setAuctionItems(newData.slice(auctionPage, auctionPage+4));
    setAuctionPage(0);
    const user = JSON.parse(sessionStorage.getItem('user')).data.objectId;
    const bids = data.data.results.filter(item => item.bids.filter(bid => bid.user.objectId == user));
    console.log(bids);
    }
    else{
      const newData = data.data.results
    .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 > 0)
    .sort((a, b) => auctionFilterValue == 6 ? (new Date(a.auction_end).getTime() - Date.now())/1000 - (new Date(b.auction_end).getTime() - Date.now())/1000
    : (new Date(b.auction_end).getTime() - Date.now())/1000 - (new Date(a.auction_end).getTime() - Date.now())/1000)
    setAuctions(newData);
    setAuctionItems(newData.slice(auctionPage, auctionPage+4));
    setAuctionPage(0);
    const user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user'))?.data.objectId : null;
    console.log(data.data.results[0].bids[0].user.objectId);
    let newBids = [];
    data.data.results.forEach(item => {
      if(item.isBought == false){
      item.bids.forEach(bid => {
        if(bid.user.objectId == user){
          newBids.splice(0, 0, item);
        }
      })
      }
    })
    setBids(newBids);
    console.log(bids);
    }
  }, [auctionFilterValue])

  useEffect(() => {
    const newData = auctions
    .filter(item => (new Date(item.auction_end).getTime() - Date.now())/1000 > 0)
    .slice(auctionPage, auctionPage+4);
    setAuctionItems(newData)
  }, [auctionPage])

  





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

  return (
    <div style={{position : 'relative', overflow : "hidden"}}>
      <Navigation onOpenCreate={() => setOpenCreate(true)} onOpenSettings={() => setOpenSettings(true)} bids={bids.length} likes={likes.length}/>
      <Featured items={featuredCards} />
      <Trending 
      cards={trendingItems} 
      filters={sortValues} 
      filterValue={trendingFilterValue} 
      onChangeFilterValue={(e) => setTrendingFilterValue(e.target.value)}
      onPrevious={() => setTrendingPage(trendingPage-1)}
      onNext={() => setTrendingPage(trendingPage+1)}
      isFirst={trendingPage == 0}
      isLast={trending.length <= trendingPage + 4}
      />
      <TopCollectors collectors={collectors} filters={sortValuesCollectors} filterValue={collectorFilterValue} onChangeFilterValue={(e) => setCollectorFilterValue(e.target.value)}/>
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions 
      cards={auctionItems} 
      filters={sortValues} 
      onChangeFilterValue={(e) => setAuctionFilterValue(e.target.value)} 
      filterValue={auctionFilterValue}
      onPrevious={() => setAuctionPage(auctionPage-1)}
      onNext={() => setAuctionPage(auctionPage+1)}
      isFirst={auctionPage == 0}
      isLast={auctions.length <= auctionPage + 4}
      />
      <CreateNftModal open={openCreate} handleClose={() => setOpenCreate(false)}/>
      <SettingsModal open={openSettings} handleClose={() => setOpenSettings(false)}/>
    </div>
  )
}
