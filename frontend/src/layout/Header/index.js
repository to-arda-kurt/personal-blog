import React from 'react';
import Navigation from '../../components/Navigation';
import Avatar from '../../components/Avatar';
import SocialLinks from '../../components/SocialLinks';

const Header = () => {
  return (
    <header className="flex justify-between w-full py-4 items-center flex-wrap">
      <div>
        <Avatar />
      </div>
      <div className="self-end p-2">
        <Navigation />
      </div>
      <div className="self-end p-2">
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
