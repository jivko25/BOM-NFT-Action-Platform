import Header from "../../../src/components/header/Header";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import ProfileUser from "../../../src/components/profile/ProfileUser";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import Footer from "../../../src/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Spacer from "../../../src/components/spacer/Spacer";
import axios from "axios";


export default function Index(){
    const router = useRouter()
    const id = router.query.id;
    const [profile, setProfile] = useState();
    const [profileItems, setProfileItems] = useState();
    const [profileFilters, setProfileFilters] = useState([]);
    const [profileFiltersSort, setProfileFiltersSort ] = useState([]);
    const [profileFiltersPrice, setProfileFiltersPrice ] = useState([]);
    const [profileFiltersSortValue, setProfileFiltersSortValue ] = useState('');
    const [profileFiltersPriceValue, setProfileFiltersPriceValue ] = useState('');


    async function getData(){
      const profile = await axios.get(`${process.env.api}/users/${id}`, {headers: {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json',
      }})
      .catch((e) => console.log(e));
      if(profile?.data){
        setProfileItems(profile.data.nfts);
        setProfile(profile.data)
      }
    }

    useEffect(async () => {
      await fetch(process.env.apiUrl + '/users/' + id + '?' +
      (profileFiltersSortValue != "" ? `sort=${profileFiltersSortValue}` : '') + '&' + (profileFiltersPriceValue != "" ? `price=${profileFiltersPriceValue}` : ''))
              .then(res => res.json())
              .then(data => {
                  // setProfile(data.user);
                  // setProfileFilters(data.filters);
                  // setProfileFiltersSort(data?.filters.sort);
                  // setProfileFiltersPrice(data?.filters.price);
                })
                .catch(error => {
                  console.log(error.message);
                });
                getData();
    }, [id, profileFiltersSortValue, profileFiltersPriceValue])

    return(
      <div style={{position:'relative', overflow : "hidden"}}>
        <ProfileHero image={"https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc="}/>
        <ProfileUser 
        {...profile}
        avatar={profile?.url}
        />
        <ProfileCollection 
        filters = {{
            sort: profileFiltersSort,
            price: profileFiltersPrice
          }
        }
        user = {{avatarUrl : profile?.url, verified : profile?.verified}}
        items = {profileItems}    
        sortFilterValue = {profileFiltersSortValue}
        priceFilterValue = {profileFiltersPriceValue}
        onChangeSortFilterValue = {(e) => setProfileFiltersSortValue(e.target.value)}
        onChangePriceFilterValue = {(e) => setProfileFiltersPriceValue(e.target.value)}
        />
      </div>
      );
}