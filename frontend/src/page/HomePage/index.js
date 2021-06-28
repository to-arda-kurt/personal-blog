import React, { useContext } from 'react';
import HeroBanner from '../../components/HeroBanner';
import BlogSummary from '../../components/BlogSummary';

import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const HomePage = () => {
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;

  return (
    <>
      <HeroBanner />
      <BlogSummary
        header={pageConfig.homeBlogHeader}
        items={pageConfig.showBlogPosts}
      />
    </>
  );
};

export default HomePage;
