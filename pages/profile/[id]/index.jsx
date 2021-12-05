import Header from "../../../src/components/header/Header";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import ProfileUser from "../../../src/components/profile/ProfileUser";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import Footer from "../../../src/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


export default function Index(){
    const router = useRouter()
    const { id } = router.query;
    const [profile, setProfile] = useState();
    const [profileFilters, setProfileFilters] = useState([]);
    const [profileFiltersSort, setProfileFiltersSort ] = useState([]);
    const [profileFiltersPrice, setProfileFiltersPrice ] = useState([]);
    const [profileFiltersSortValue, setProfileFiltersSortValue ] = useState('');
    const [profileFiltersPriceValue, setProfileFiltersPriceValue ] = useState('');

    useEffect(async () => {
      await fetch(process.env.apiUrl + '/users/' + id + '?' +
      (profileFiltersSortValue != "" ? `sort=${profileFiltersSortValue}` : '') + '&' + (profileFiltersPriceValue != "" ? `price=${profileFiltersPriceValue}` : ''))
              .then(res => res.json())
              .then(data => {
                  setProfile(data.user);
                  setProfileFilters(data.filters);
                  setProfileFiltersSort(data?.filters.sort);
                  setProfileFiltersPrice(data?.filters.price);
              })
              .catch(error => {
                console.log(error.message);
              });
    }, [profileFiltersSortValue, profileFiltersPriceValue])
    return(
      <div style={{position:'relative'}}>
    {/* {id == undefined ? <div><p>loading...</p></div> : 
    <div> */}
    <Header/>
    <ProfileHero image={profile?.avatar.backgroundUrl}/>
    <ProfileUser 
    {...profile}
    avatar={profile?.avatar.url}
    />
    <ProfileCollection 
    // sort={profileFiltersSort} price={profileFiltersPrice}
    filters = {{
        sort: profileFiltersSort,
        price: profileFiltersPrice
      }
    }
    user = {{avatarUrl : profile?.avatar.url, verified : profile?.verified}}
    items = {profile?.nfts}    
    sortFilterValue = {profileFiltersSortValue}
    priceFilterValue = {profileFiltersPriceValue}
    onChangeSortFilterValue = {(e) => setProfileFiltersSortValue(e.target.value)}
    onChangePriceFilterValue = {(e) => setProfileFiltersPriceValue(e.target.value)}
    />

    <Footer/>
    {/* </div>
  } */}
    </div>
    );
}