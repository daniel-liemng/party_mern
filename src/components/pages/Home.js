import React from 'react';

import GuestForm from '../guests/GuestForm';
import GuestCounter from '../guests/GuestCounter';
import GuestFilter from '../guests/GuestFilter';
import GuestSearch from '../guests/GuestSearch';
import GuestList from '../guests/GuestList';

const Home = () => {
  return (
    <div className='app-container'>
      <div className='main'>
        <div className='filter'>
          <GuestFilter />
          <GuestSearch />
        </div>
        <GuestForm />
        <GuestCounter />
      </div>
      <GuestList />
    </div>
  );
};

export default Home;
