import React from 'react';
import Navigation from '../../components/Navigation';
import Avatar from '../../components/Avatar';
import SocialLinks from '../../components/SocialLinks';

const Header = () => {
  return (
    <div className="flex justify-between w-full h-44 items-center flex-wrap">
      <div className="w-1/3">
        <Avatar />
      </div>
      <div className="w-1/3 ">
        <div className="flex items-end h-44 justify-evenly">
          <Navigation />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
