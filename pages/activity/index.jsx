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
  {value : 0, label : "Show all", queryString : ''},
  {value : 1, label : "Bid", queryString : 'where={"type":"bid"}'},
  {value : 2, label : "Buy", queryString : 'where={"type":"buy"}'},
  {value : 3, label : "Like", queryString : 'where={"type":"like"}'}
]


export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [sortFilterValue, setSortFilterValue] = useState(0);
  const [typeFilterValue, setTypeFilterValue] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);

  const url = (sort = 'order=-updatedAt', type = '', limit) => `${process.env.api}/classes/Activity?${sort}${limit == true && `&limit=10&skip=${page*10}`}&${type}`;

  useEffect(async () => {
    const limit = searchValue == '';
    console.log(limit);
    const res = await axios.get(url(sortValues[sortFilterValue].queryString,typeValues[typeFilterValue].queryString, limit), {headers: {
      'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
      'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
      'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
      'X-Parse-Revocable-Session' : '1',
      'Content-Type' : 'application/json',
    }})
    .catch((e) => console.log(e));
    if(res?.data){
      setActivity(res.data.results.filter(item => item.user.username.includes(searchValue) || item.nft.name.includes(searchValue) || item.nft.owner.username.includes(searchValue)).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
  }, [page, sortFilterValue, typeFilterValue, searchValue])

    return (
      <div style={{position : 'relative', overflow : "hidden"}}>
      <Hero text="Activity"></Hero>
      <ActivityFilters 
            sort={sortValues}
            type={typeValues}
            search={searchValue}
            onSortFilterChange={(e) => setSortFilterValue(e.target.value)}
            onTypeFilterChange={(e) => setTypeFilterValue(e.target.value)}
            onSearchChange={(e) => setSearchValue(e.target.value)}
            sortValue = {sortFilterValue}
            typeValue = {typeFilterValue}
            />
      <ActivityList items={activity}/>
      <Pagenator onPrevious={() => {setPage(page-1); scroll(0, 0)}} onNext={() => {setPage(page+1); scroll(0, 0)}} isFirst={page == 0} isLast={activity.length < 10}/>
      </div>
    );
  }