import React from 'react';

const Contact = () => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';

  return (
    <div className="flex flex-row flex-wrap py-8 ">
      <h1 className="hero-h2 flex-1 ">
        Let's Chat <br />
        <span className="ml-16 text-5xl">
          <a href={'mailto:' + 'gmail@ardakurt.dev'}>gmail@ardakurt.dev</a>
        </span>
      </h1>
      <img className="" src={imgUrl + `contact.png`} alt="" />
    </div>
  );
};

export default Contact;
