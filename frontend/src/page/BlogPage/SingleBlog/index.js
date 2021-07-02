import React, { useContext, useEffect } from 'react';
import dotenv from 'dotenv';
import Message from '../../../components/Message';

import BlogContext from '../../../context/Blog/blogContext';

const SingleBlog = ({ match, history }) => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';

  const blogContext = useContext(BlogContext);
  const { getPost, activePost } = blogContext;
  const postHandle = match.params.handle;
  useEffect(() => {
    getPost(postHandle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePost, postHandle]);
  return (
    <>
      {activePost.handle !== '' ? (
        <>
          <div className="flex flex-row">
            <button onClick={() => history.goBack()}>
              <img
                className="h-12 fill-current text-gray-500"
                src={`${imgUrl}left-arrow.png`}
                alt="arrow"
              />{' '}
            </button>
            <h1 className="text-7xl py-16 px-8">
              <span> </span>
              {activePost.title}
            </h1>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="flex flex-col">
                <span className="text-7xl">
                  {activePost.date.getFullYear()}
                </span>
                <span className="pl-20 text-5xl">
                  {activePost.date.getDate()}/{activePost.date.getMonth()}
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-14">
                <div className="pb-16">
                  <div className="flex flex-row justify-around">
                    <div className="h-96 w-96">
                      <img
                        src={activePost.images[0]}
                        alt=""
                        className="base-image w-full object-cover object-top base-animation"
                      />
                    </div>
                    <div className="h-96 w-96">
                      <img
                        src={activePost.images[1]}
                        alt=""
                        className="base-image w-full object-cover object-top base-animation"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-16 px-12 text-justify">
                  {activePost.content}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Message>Loading...</Message>
      )}
    </>
  );
};

export default SingleBlog;
