import { useEffect, useState } from 'react';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';
import Footer from '../../src/components/footer/Footer';
import Header from '../../src/components/header/Header';
import Hero from '../../src/components/hero/Hero';

export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [activityFilterSort, setActivityFilterSort] = useState([]);
  const [activityFilterType, setActivityFilterType] = useState([]);


  useEffect(async () => {
      await fetch(`${process.env.apiUrl}/activities`)
        .then(res => res.json())
        .then(data => {
          setActivity(data.activities);
          setActivityFilterSort(data.filters.sort);
          setActivityFilterType(data.filters.type);
        })
  }, [])

    return (
      <div style={{position : 'relative'}}>
      <Header/>
      <Hero text="Activity"></Hero>
      <ActivityFilters 
            sort={activityFilterSort}
            type={activityFilterType}
            />
      <ActivityList items={activity}/>
      <Footer/>
      </div>
    );
  }