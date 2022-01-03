import ProfileHero from "../../../src/components/profile/ProfileHero";
import ProfileUser from "../../../src/components/profile/ProfileUser";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";

  const sortValues = [
    {value : 0, label : "By created date ASC", queryString : "order=createdAt"},
    {value : 1, label : "By created date DESC", queryString : "order=-createdAt"},
    {value : 2, label : "By name ASC", queryString : "order=name"},
    {value : 3, label : "By name DESC", queryString : "order=-name"},
    {value : 4, label : "By price ASC", queryString : "order=price"},
    {value : 5, label : "By price DESC", queryString : "order=-price"},
  ]

  const priceRangeValues = [
    {value : 0, label : "Show all", queryString : ''},
    {value : 1, label : "0-200", queryString : ',"price":{"$gte":0,"$lte":200}'},
    {value : 2, label : "201-1000", queryString : ',"price":{"$gte":201,"$lte":1000}'},
    {value : 3, label : "1000+", queryString : ',"price":{"$gte":1000}'},
  ]


export default function Index(){
    const router = useRouter()
    const id = router.query.id;
    const [profile, setProfile] = useState();
    const [profileItems, setProfileItems] = useState();
    const [profileFiltersSortValue, setProfileFiltersSortValue ] = useState(0);
    const [profileFiltersPriceValue, setProfileFiltersPriceValue ] = useState(0);
    const [profileSearchValue, setProfileSearchValue] = useState('');

    const url = `${process.env.api}/users/${id}`;
    const itemsUrl = (sort, price, search) => `${process.env.api}/classes/Nfts?where={"buyerId" : "${id}"${price}${search}}&${sort}`

    useEffect(async () => {
      const header = {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json',
      }
      const profile = await axios.get(url, {headers: header})
      .catch((e) => console.log(e));
      const items = await axios.get(itemsUrl(sortValues[profileFiltersSortValue].queryString, priceRangeValues[profileFiltersPriceValue].queryString, profileSearchValue !== '' ? `,"name":{"$regex" : "${profileSearchValue}"}` : ''), {headers: header})
      .catch((e) => console.log(e));
      if(profile?.data){
        setProfileItems(items?.data.results);
        setProfile(profile.data)
      }
    }, [id, profileFiltersSortValue, profileFiltersPriceValue, profileSearchValue])

    return(
      <div style={{position:'relative', overflow : "hidden"}}>
        <ProfileHero image={"https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc="}/>
        <ProfileUser 
        {...profile}
        avatar={profile?.url}
        name={profile?.username}
        // info={`Registered on ${new Date(profile?.createdAt).getDay()}.${new Date(profile?.createdAt).getMonth() + 1}.${new Date(profile?.createdAt).getFullYear()} `}
        />
        <ProfileCollection 
        filters = {{
            sort: sortValues,
            price: priceRangeValues
          }
        }
        user = {{avatarUrl : profile?.url, verified : profile?.verified}}
        items = {profileItems}    
        sortFilterValue = {profileFiltersSortValue}
        priceFilterValue = {profileFiltersPriceValue}
        onChangeSortFilterValue = {(e) => setProfileFiltersSortValue(e.target.value)}
        onChangePriceFilterValue = {(e) => setProfileFiltersPriceValue(e.target.value)}
        onChangeSearch = {(e) => setProfileSearchValue(e.target.value)}
        />
      </div>
      );
}