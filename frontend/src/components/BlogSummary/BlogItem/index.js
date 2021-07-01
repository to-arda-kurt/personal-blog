import React from 'react';

const BlogItem = ({ post }) => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';
  console.log(post.date.getFullYear());
  return (
    <>
      <div className="flex flex-row">
        <div>
          <div className="flex flex-col">
            <span className="text-7xl">{post.date.getFullYear()}</span>
            <span className="pl-20 text-5xl">
              {post.date.getDate()}/{post.date.getMonth()}
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col px-14">
            <div className="pb-16">
              <div className="flex flex-row justify-around">
                <div className="h-96 w-96">
                  <img
                    src={post.images[0]}
                    alt=""
                    className="base-image w-full object-cover object-top base-animation"
                  />
                </div>
                <div className="h-96 w-96">
                  <img
                    src={post.images[1]}
                    alt=""
                    className="base-image w-full object-cover object-top base-animation"
                  />
                </div>
              </div>
            </div>
            <div className="mb-16 px-12 text-justify">
              {post.content.substring(0, 250) + '...'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
