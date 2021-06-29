import React from 'react';
import dotenv from 'dotenv';

const HeroBanner = () => {
  const imgUrl = process.env.PUBLIC_URL + '/assets/images/';

  return (
    <main>
      <div className="h-2/5 py-10">
        <div className="w-full relative">
          <h1 className="hero-h1 z-10 ">
            Journey of Junior <br />
            Frontend Developer
          </h1>
          <div className="absolute top-0 right-0 -z-10 ">
            <div className="relative h-105 w-100">
              <img
                src={imgUrl + `image-center-test.jpeg`}
                alt=""
                className="base-image opacity-50"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="w-7/12 py-10 text-xl text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus recusandae unde libero voluptates assumenda, sequi
            vitae fugiat cum commodi sapiente repudiandae iste quaerat ipsa
            officiis suscipit tempora in doloremque esse. Rem placeat ut dicta
            aliquid enim ab. Placeat, nisi! Consequatur totam doloribus vitae
            itaque magnam reiciendis fugiat? Veritatis, expedita aliquam? Sunt
            libero accusantium sint ipsam dolore totam exercitationem iure
            alias? Nemo possimus quisquam nobis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
