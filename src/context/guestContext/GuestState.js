import React, { useReducer } from 'react';

import GuestContext from './guestContext';
import guestReducer from './guestReducer';

import { TOOGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH } from '../types';

const GuestState = ({ children }) => {
  const initialState = {
    filterGuest: false,
    search: null,
    guests: [
      {
        id: 1,
        name: 'Jake Smith',
        phone: '111 222 3333',
        dietary: 'Vegan',
        isConfirmed: false,
      },
      {
        id: 2,
        name: 'Merry Williams',
        phone: '111 222 3333',
        dietary: 'Non-Veg',
        isConfirmed: false,
      },
      {
        id: 3,
        name: 'Azhaan Idrees',
        phone: '111 222 3333',
        dietary: 'Pescatarian',
        isConfirmed: true,
      },
    ],
  };

  const [state, dispatch] = useReducer(guestReducer, initialState);

  // fitler
  const toggleFilter = () => {
    dispatch({
      type: TOOGLE_FILTER,
    });
  };

  const searchGuest = (guest) => {
    dispatch({
      type: SEARCH_GUEST,
      payload: guest,
    });
  };

  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search: state.search,
        toggleFilter,
        searchGuest,
        clearSearch,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export default GuestState;
