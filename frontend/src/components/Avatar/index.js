import React from 'react';
import { Link } from 'react-router-dom';

const Avatar = () => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';
  return (
    <>
      <Link to="/">
        <img
          src={`${imgUrl}arda-kurt.jpeg`}
          alt="Arda Kurt Profile"
          className="rounded-full h-32 shadow-2xl base-animation opacity-75 hover:opacity-100"
        />
      </Link>
    </>
  );
};

export default Avatar;
