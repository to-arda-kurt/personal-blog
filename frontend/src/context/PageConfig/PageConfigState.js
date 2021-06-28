import { useReducer } from 'react';
import PageConfigContext from './pageConfigContext';
import PageConfigReducer from './pageConfigReducer';
import { GET_PAGE_CONFIG } from '../types';

const PageConfigState = (props) => {
  const initialState = {
    pageConfig: {
      homeBlogHeader: 'Blog.',
      showBlogPosts: 2,
    },
  };

  const [state, dispatch] = useReducer(PageConfigReducer, initialState);

  const getPageConfig = () => {
    console.log(state.PageConfig);

    dispatch({
      type: GET_PAGE_CONFIG,
      payload: state.PageConfig,
    });
  };

  return (
    <PageConfigContext.Provider
      value={{
        pageConfig: state.pageConfig,
      }}
    >
      {props.children}
    </PageConfigContext.Provider>
  );
};

export default PageConfigState;
