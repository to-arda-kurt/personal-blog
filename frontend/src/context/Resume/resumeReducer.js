import { GET_GITHUB_USER, SET_LOADING, GET_GITHUB_USER_REPOS } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_GITHUB_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case GET_GITHUB_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
