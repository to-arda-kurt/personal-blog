import { GET_PAGE_CONFIG } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_PAGE_CONFIG:
      return {
        ...state,
      };
    default:
      return state;
  }
};
