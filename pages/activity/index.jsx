import { useEffect, useState } from 'react';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';
import ActivityListItem from '../../src/components/activity/ActivityListItem';
import Footer from '../../src/components/footer/Footer';
import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';
// import activityData from '../../data/activity.js';

export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState([]);

  useEffect(async () => {
      await fetch(`${process.env.apiUrl}/activities`)
        .then(res => res.json())
        .then(data => {
          setActivity(data.activities);
          setActivityFilters(data.filters);
        })
  }, [])

    return (
      <div style={{position : 'relative'}}>
      <Header/>
      <Hero text="Activity"></Hero>
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
      <ActivityList items={activity}/>
      <Footer/>
      </div>
    );
  }