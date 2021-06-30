import { useReducer } from 'react';
import PageConfigContext from './pageConfigContext';
import PageConfigReducer from './pageConfigReducer';
import { GET_PAGE_CONFIG } from '../types';

const PageConfigState = (props) => {
  const initialState = {
    pageConfig: {
      homeBlogHeader: 'Blog.',
      showBlogPosts: 2,
      aboutPageHeader: 'About.',
      aboutPageName: 'Arda Kurt',
      aboutPageSubtitle: 'Junior Frontend Developer',
      aboutPageText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit
      magni neque ea incidunt accusamus deserunt? Ducimus expedita ullam
      repellendus atque necessitatibus reprehenderit doloremque veritatis ea
      fugiat? Deleniti, minima animi! Expedita quibusdam quod odit at
      voluptate, repellat consectetur atque, ex fugiat quos temporibus aliquam
      perspiciatis, earum sunt placeat maiores quasi ab laborum ducimus esse
      unde voluptatum sint. Mollitia, suscipit saepe. Sit recusandae minima
      veritatis, quibusdam optio odio suscipit doloribus rerum officiis est
      nostrum culpa sunt amet laudantium voluptates? Illo iusto aliquam illum.
      Nemo dolorem eius repellat quod error dolorum excepturi.`,
      aboutPageText2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit
      magni neque ea incidunt accusamus deserunt? Ducimus expedita ullam
      repellendus atque necessitatibus reprehenderit doloremque veritatis ea
      fugiat? Deleniti, minima animi!`,
      aboutPageImgUrl:
        'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
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
