import React, { useContext } from 'react';

import GuestContext from '../../context/guestContext/guestContext';

const GuestFilter = () => {
  const { toggleFilter } = useContext(GuestContext);

  // const filter = guests.filter((guest) => guest.isConfirmed === true);

  return (
    <div className='toggle'>
      <label className='switch'>
        <input type='checkbox' onChange={() => toggleFilter()} />
        <span className='slider round'></span>
      </label>
      <p className='lead'>Show attending only!</p>
    </div>
  );
};

export default GuestFilter;
