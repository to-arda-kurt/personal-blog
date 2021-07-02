import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BlogItem from '../../components/BlogSummary/BlogItem';
import Message from '../../components/Message';

import BlogContext from '../../context/Blog/blogContext';
import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const BlogPage = () => {
  const blogContext = useContext(BlogContext);
  const { blogPosts } = blogContext;
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;

  return (
    <div>
      <h1 className="text-7xl py-16">{pageConfig.homeBlogHeader}</h1>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <Link key={post._id} to={`/blog/${post.handle}`}>
            <BlogItem post={post} />{' '}
          </Link>
        ))
      ) : (
        <Message type="noPost"></Message>
      )}
    </div>
  );
};

export default BlogPage;
