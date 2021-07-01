import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true);

  const Menu = [
    { Name: 'Home', Url: '/' },
    { Name: 'About', Url: '/about' },
    { Name: 'Blog', Url: '/blog' },
    { Name: 'Resume', Url: '/resume' },
  ];
  return (
    <>
      {showMenu && (
        <nav>
          {Menu.map((menu) => (
            <Link
              className="m-4 text-lg hover:text-gray-900"
              key={menu.Name}
              to={menu.Url}
            >
              {menu.Name}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navigation;
