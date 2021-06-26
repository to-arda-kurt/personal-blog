import React from 'react';

const Avatar = () => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';
  return (
    <>
      <img
        src={`${imgUrl}arda-kurt.jpeg`}
        alt="Arda Kurt Profile"
        className="rounded-full h-32 shadow-2xl "
      />
    </>
  );
};

export default Avatar;
