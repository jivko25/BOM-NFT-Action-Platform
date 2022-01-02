import { useEffect, useState } from 'react';
import ActivityFilters from '../../src/components/activity/ActivityFilters';
import ActivityList from '../../src/components/activity/ActivityList';
import Hero from '../../src/components/hero/Hero';
import axios from 'axios';
import Pagenator from '../../src/components/pagenator/Pagenator';

const sortValues = [
  {value : 0, label : "By created date DESC", queryString : 'order=-updatedAt'},
  {value : 1, label : "By created date ASC", queryString : 'order=updatedAt'}
]

const typeValues = [
  {value : 0, label : "Bid", queryString : 'where={"type":"bid"}'},
  {value : 1, label : "Buy", queryString : 'where={"type":"buy"}'},
  {value : 2, label : "Like", queryString : 'where={"type":"like"}'}
]


export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [activityFilterSort, setActivityFilterSort] = useState([]);
  const [activityFilterType, setActivityFilterType] = useState([]);
  const [sortFilterValue, setSortFilterValue] = useState(0);
  const [typeFilterValue, setTypeFilterValue] = useState(1);
  const [page, setPage] = useState(0);

  const url = (sort = 'order=-updatedAt', type = '') => `${process.env.api}/classes/Activity?${sort}&limit=10&skip=${page*10}&&${type}`;

  async function getData(){
    const res = await axios.get(url('order=-updatedAt',typeValues[2].queryString), {headers: {
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

  useEffect(async () => {
    const res = await axios.get(url(sortValues[sortFilterValue].queryString,typeValues[typeFilterValue].queryString), {headers: {
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
  }, [page, sortFilterValue, typeFilterValue])

    return (
      <div style={{position : 'relative', overflow : "hidden"}}>
      <Hero text="Activity"></Hero>
      <ActivityFilters 
            sort={sortValues}
            type={typeValues}
            onSortFilterChange={(e) => setSortFilterValue(e.target.value)}
            onTypeFilterChange={(e) => setTypeFilterValue(e.target.value)}
            sortValue = {sortFilterValue}
            typeValue = {typeFilterValue}
            />
      <ActivityList items={activity}/>
      <Pagenator onPrevious={() => {setPage(page-1); scroll(0, 0)}} onNext={() => {setPage(page+1); scroll(0, 0)}} isFirst={page == 0} isLast={activity.length < 10}/>
      </div>
    );
  }