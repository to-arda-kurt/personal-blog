import React, { useContext } from 'react';

import BlogContext from '../../context/Blog/blogContext';

const BlogSummary = ({ header, items }) => {
  const blogContext = useContext(BlogContext);
  const { blogPosts } = blogContext;

  return (
    <>
      <h1 className="text-7xl">{header}</h1>
      <div></div>
    </>
  );
};

export default BlogSummary;
