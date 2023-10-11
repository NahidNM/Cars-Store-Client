import React from 'react';

const Gellary = () =>  {
    return (
      <div className="my-container">
        <h4 className="my-5 text-2xl font-semibold leading-snug text-center section-header md:text-4xl">
          Discover a Miniature World
          <br />
          Explore Our Toy Car Image Gallery
        </h4>
        <div className="flex flex-wrap ">
          <div className="flex flex-wrap md:w-1/2">
            <div
              className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/wQksrmT/photo-1589677677517-5784e74efbaa.jpg"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/W2nWtSZ/photo-1536454891705-7f5a5c762d3a.jpg"
              />
            </div>
            <div
              className="w-full p-1 md:p-2 gallery-img-wrapper"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/HNG7Gmz/istockphoto-959599720-612x612.jpg"
              />
            </div>
          </div>
  
          <div className="flex flex-wrap md:w-1/2">
            <div
              className="w-full p-1 md:p-2 gallery-img-wrapper"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/25cBdkj/photo-1503739171234-327ce271626f.jpg"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/BCp2ZS4/istockphoto-108313742-612x612.jpg"
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://i.ibb.co/L6r94KP/photo-1549827441-6adb9f843a35.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Gellary;