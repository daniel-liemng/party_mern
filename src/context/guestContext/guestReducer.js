import { TOOGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOOGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest,
      };

    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, 'gi');
      return {
        ...state,
        search: state.guests.filter((guest) => guest.name.match(reg)),
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };

    default:
      return state;
  }
};
