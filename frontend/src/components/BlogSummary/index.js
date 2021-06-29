import React, { useContext } from 'react';
import BlogItem from './BlogItem';
import Message from '../Message';

import BlogContext from '../../context/Blog/blogContext';

const BlogSummary = ({ header, items }) => {
  const blogContext = useContext(BlogContext);
  const { blogPosts } = blogContext;
  const lastPosts = [];
  console.log(lastPosts);

  return (
    <>
      <h1 className="text-7xl py-16">{header}</h1>
      {lastPosts.length > 0 ? (
        lastPosts.map((post) => <BlogItem post={post} />)
      ) : (
        <Message type="noPost"></Message>
      )}
    </>
  );
};

export default BlogSummary;
