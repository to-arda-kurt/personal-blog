import React from 'react';

const SocialLinks = () => {
  return (
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
        href="https://www.instagram.com/ardakurt.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-2xl ">
          <i className="fab fa-instagram base-animation hover:scale-125"></i>
        </span>
      </a>
      <a
        href="https://open.spotify.com/user/korayardakurt"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="text-2xl ">
          <i className="fab fa-spotify base-animation hover:scale-125"></i>
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
