import React, { useContext, useEffect } from 'react';
import Message from '../../components/Message';
import ResumeContext from '../../context/Resume/resumeContext';
import PageConfigContext from '../../context/PageConfig/pageConfigContext';

const ResumePage = () => {
  const resumeContext = useContext(ResumeContext);
  const pageConfigContext = useContext(PageConfigContext);
  const { pageConfig } = pageConfigContext;
  const { getUser, loading, user, getUserRepos, repos } = resumeContext;

  useEffect(() => {
    getUser();
    getUserRepos();
    //eslint-disable-next-line
  }, []);
  console.log();

  return (
    <main>
      <h1 className="text-7xl py-16">{pageConfig.resumePageHeader}</h1>
      <div className="space-y-4">
        <h2 className="text-6xl">{pageConfig.aboutPageName}</h2>
        <h3 className="text-4xl">{pageConfig.aboutPageSubtitle}</h3>
        <p className="text-2xl">
          Motivated, eager, self-taught Frontend Developer with engineering,
          photogrpahy and web design background. I am carrer changer based in
          London. I would like to go further and build a future with my desire
          Frontend job at very beginning.
        </p>
        <div>
          <div className="space-x-4 hover:text-gray-900 ">
            <a
              href="https://github.com/to-arda-kurt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl ">
                <i className="fab fa-github base-animation hover:scale-125"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/korayardakurt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl ">
                <i className="fab fa-linkedin base-animation hover:scale-125"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl py-4">Repos from Github</h2>
        <div className="space-y-4">
          {!loading ? (
            repos.map((repo) => (
              <div
                key={repo.full_name}
                className="flex flex-row w-full border-8 border-gray-700 p-8 rounded-3xl"
              >
                <h3 className="flex-1 text-2xl">{repo.full_name}</h3>
                <div className="text-2xl flex-end space-x-4">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View
                  </a>
                </div>
              </div>
            ))
          ) : (
            <Message> Loading... </Message>
          )}
        </div>
        <div className="space-y-4 pb-4">
          <h3 className="text-3xl py-4">Skills</h3>
          <p className="text-2xl">
            React.JS, Node.js, Express, Tailwind CSS, Html5, CSS3, Bootstrap,
            Postman Github, Figma, Framer, Photoshop
          </p>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
