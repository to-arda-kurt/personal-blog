import React, { useContext } from 'react';
import HeroBanner from '../../components/HeroBanner';
import BlogSummary from '../../components/BlogSummary';
import Contact from '../../components/Contact';

import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const HomePage = () => {
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;

  return (
    <>
      <main>
        <HeroBanner />
        <BlogSummary
          header={pageConfig.homeBlogHeader}
          items={pageConfig.showBlogPosts}
        />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
