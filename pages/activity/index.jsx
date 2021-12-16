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
  const [sortFilterValue, setSortFilterValue] = useState('');
  const [typeFilterValue, setTypeFilterValue] = useState('');

  useEffect(async () => {
        await fetch(process.env.apiUrl + '/activities' + '?' +
        (sortFilterValue != "" ? `sort=${sortFilterValue}` : '') + '&' + (typeFilterValue != "" ? `type=${typeFilterValue}` : ''))
        .then(res => res.json())
        .then(data => {
          setActivity(data.activities);
          setActivityFilterSort(data.filters.sort);
          setActivityFilterType(data.filters.type);
        })
  }, [sortFilterValue, typeFilterValue])

    return (
      <div style={{position : 'relative', overflow : "hidden"}}>
      <Header/>
      <Hero text="Activity"></Hero>
      <ActivityFilters 
            sort={activityFilterSort}
            type={activityFilterType}
            onSortFilterChange={(e) => setSortFilterValue(e.target.value)}
            onTypeFilterChange={(e) => setTypeFilterValue(e.target.value)}
            sortValue = {sortFilterValue}
            typeValue = {typeFilterValue}
            />
      <ActivityList items={activity}/>
      <Footer/>
      </div>
    );
  }