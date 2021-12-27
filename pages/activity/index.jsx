import { useEffect, useState } from 'react';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';
import Hero from '../../src/components/hero/Hero';
import axios from 'axios';

export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [activityFilterSort, setActivityFilterSort] = useState([]);
  const [activityFilterType, setActivityFilterType] = useState([]);
  const [sortFilterValue, setSortFilterValue] = useState('');
  const [typeFilterValue, setTypeFilterValue] = useState('');

  const url = `${process.env.api}/classes/Activity`;

  async function getData(){
    const res = await axios.get(url, {headers: {
      'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
      'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
      'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
      'X-Parse-Revocable-Session' : '1',
      'Content-Type' : 'application/json',
    }})
    .catch((e) => console.log(e));
    if(res?.data){
      console.log(res);
      setActivity(res.data.results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
  }

  useEffect(() => {
        getData();
        console.log(activity);
  }, [])

    return (
      <div style={{position : 'relative', overflow : "hidden"}}>
      <Hero text="Activity"></Hero>
      {/* <ActivityFilters 
            sort={activityFilterSort}
            type={activityFilterType}
            onSortFilterChange={(e) => setSortFilterValue(e.target.value)}
            onTypeFilterChange={(e) => setTypeFilterValue(e.target.value)}
            sortValue = {sortFilterValue}
            typeValue = {typeFilterValue}
            /> */}
      <ActivityList items={activity}/>
      </div>
    );
  }