import { GET_BLOG_POST } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_BLOG_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
