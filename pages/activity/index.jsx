import ActivityFilters from '../../src/components/activity/ActivityFilters';
import Footer from '../../src/components/footer/Footer';
import Header from '../../src/components/header/Header';

export default function Activity() {
    return (
      <>
      <Header/>
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
      <Footer/>
      </>
    );
  }