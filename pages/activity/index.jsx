import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityListItem from '../../src/components/activity/ActivityListItem';
import Footer from '../../src/components/footer/Footer';
import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';

export default function Activity() {
    return (
      <>
      <Header/>
      <Hero text="activity"></Hero>
      <ActivityFilters filters={
          {
            sort: [
              { label: "Name (Ascending)", value: 1 },
              { label: "Name (Descending)", value: 2 },
              { label: "Price (Ascending)", value: 4 },
              { label: "Price (Descending)", value: 5 },
            ],
            type: [
              { label: "Liked", value: 6 },
              {
                label: "Bought",
                value: 7,
              },
            ],
          }      
      }/>
      <ActivityListItem
      user={
        {
            avatar: {
              url: "/images/avatar.png",
            },
            confirmed: false,
            name: "Antonio Banderas",
          }      
      }
      nft={
        {
            name: "BTC",
            owner: {
              username: "John Travolta",
              avatar: {
                url: "/images/avatar.png",
              },
              confirmed: true,     
            }
        }
        }
        type="buy"
        created_at="2021-10-22T08:29:23.382Z"
      />
      <Footer/>
      </>
    );
  }