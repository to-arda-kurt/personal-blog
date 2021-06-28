import { useReducer } from 'react';
import blogReducer from './blogReducer';
import BlogContext from './blogContext';
import { BLOG } from '../../contants/content';

const BlogState = (props) => {
  const initalState = {
    blogPosts: BLOG,
  };

  const [state, dispatch] = useReducer(blogReducer, initalState);

  return (
    <BlogContext.Provider
      value={{
        blogPosts: state.blogPosts,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
