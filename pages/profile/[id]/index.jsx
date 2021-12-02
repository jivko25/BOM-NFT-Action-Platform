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
    const [profileFilters, setProfileFilters ] = useState([]);

    useEffect(async () => {
        await fetch(`${process.env.apiUrl}/users/${id}`)
              .then(res => res.json())
              .then(data => {
                  console.log(`${process.env.apiUrl}/users/${id}`);
                  setProfile(data.user);
                  setProfileFilters(data.filters);
              });
    }, [id])
    
    
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
    filters = {{
        sort: [
          { label: "Date (Ascending)", value: 1 },
          { label: "Date (Descending)", value: 2 },
          { label: "Name (Ascending)", value: 3 },
          { label: "Name (Descending)", value: 4 },
          { label: "Price (Ascending)", value: 5 },
          { label: "Price (Descending)", value: 6 },
        ],
        price: [
          { label: "0 - 0.01 ETH", value: 7 },
          {
            label: "0.01 - 0.04 ETH",
            value: 8,
          },
          {
            label: "0.04 - 0.07 ETH",
            value: 9,
          },
        ],
      }
    }
    user = {{avatarUrl : profile?.avatar.url, verified : profile?.verified}}
    items = {profile?.nfts}    
    />

    <Footer/>
    {/* </div>
  } */}
    </div>
    );
}