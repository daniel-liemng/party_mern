import React, { useContext } from 'react';

import GuestItem from './GuestItem';
import GuestContext from '../../context/guestContext/guestContext';

const GuestList = () => {
  const { search, guests, filterGuest } = useContext(GuestContext);

  return (
    <div className='guests'>
      {search !== null
        ? search.map((guest) => <GuestItem key={guest.id} guest={guest} />)
        : guests
            .filter((guest) => !filterGuest || guest.isConfirmed)
            .map((guest) => <GuestItem key={guest.id} guest={guest} />)}
    </div>
  );
};
export default GuestList;
