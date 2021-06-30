import React, { useContext } from 'react';

import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const AboutPage = () => {
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;
  return (
    <main>
      <h1 className="text-7xl py-16">{pageConfig.aboutPageHeader}</h1>
      <h2 className="text-6xl">{pageConfig.aboutPageName}</h2>
      <h3 className="text-4xl">{pageConfig.aboutPageSubtitle}</h3>
      <p className="py-10 text-xl text-justify">{pageConfig.aboutPageText}</p>
      <img className="base-image" src={pageConfig.aboutPageImgUrl} alt="" />
      <p className="py-10 text-xl text-justify">{pageConfig.aboutPageText2}</p>
    </main>
  );
};

export default AboutPage;
