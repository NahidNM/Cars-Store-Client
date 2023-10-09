import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/pzLgnym/car-banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content ">
    <div className=" md:flex items-center justify-between">
      <div>
      <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className='w-full text-white lg:-mt-36 lg:max-w-[45%]'>
      <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Banner;<h1>banner</h1>