import React, { useContext, useEffect } from 'react';

import ResumeContext from '../../context/Resume/resumeContext';
import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const ResumePage = () => {
  const resumeContext = useContext(ResumeContext);
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;
  const { getUser, loading, user, getUserRepos } = resumeContext;

  useEffect(() => {
    getUser();
    getUserRepos();
    //eslint-disable-next-line
  }, []);
  console.log();

  return (
    <main>
      <h1 className="text-7xl py-16">{pageConfig.resumePageHeader}</h1>
      <h2 className="text-6xl">{pageConfig.aboutPageName}</h2>
      <h3 className="text-4xl">{pageConfig.aboutPageSubtitle}</h3>
      <p className="text-2xl">Eager </p>
    </main>
  );
};

export default ResumePage;
