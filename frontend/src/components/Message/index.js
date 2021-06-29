import React from 'react';
import dotenv from 'dotenv';

const Message = (props) => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';
  if (props.type === 'noPost') {
    return (
      <div className="flex flex-row flex-wrap border-8 bg-yellow-300 border-gray-700 p-8 items-center justify-center rounded-3xl text-center">
        <img className="h-72 flex-1" src={imgUrl + `404.svg`} alt="" />
        <h1 className="hero-h2 flex-1 ">
          I've tried hard. I couldn't find posts at this time.
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-row flex-wrap border-8 bg-yellow-300 border-gray-700 p-8 items-center justify-center rounded-3xl text-center">
      <img className="h-72 flex-1" src={imgUrl + `404.svg`} alt="" />
      <h1 className="hero-h2 flex-1 ">{props.children}</h1>
    </div>
  );
};

export default Message;
