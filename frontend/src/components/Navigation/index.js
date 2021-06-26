import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const Menu = [
    { Name: 'Home', Url: '/' },
    { Name: 'About', Url: '/about' },
    { Name: 'Blog', Url: '/blog' },
    { Name: 'Resume', Url: '/resume' },
    { Name: 'Contact', Url: '/contact' },
  ];
  return (
    <>
      <nav>
        {Menu.map((menu) => (
          <Link className="m-4 text-lg" key={menu.Name} to={menu.Url}>
            {menu.Name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
