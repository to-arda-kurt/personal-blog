import React, { useContext, useEffect } from 'react';

import ResumeContext from '../../context/Resume/resumeContext';
import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const ResumePage = () => {
  const resumeContext = useContext(ResumeContext);
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;
  const { getUser, loading, user } = resumeContext;

  useEffect(() => {
    getUser();
    //eslint-disable-next-line
  }, []);
  console.log();

  return (
    <main>
      <h1 className="text-7xl py-16">{pageConfig.resumePageHeader}</h1>
    </main>
  );
};

export default ResumePage;
