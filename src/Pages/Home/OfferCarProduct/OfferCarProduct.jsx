import React from 'react';

const OfferCarProduct = () => {
    return (
      <div className="bg-[#c3c3cd] p-8">
        <div className="items-center justify-between my-container lg:flex">
          <div className="p-5 bg-white rounded-lg">
            <div className="p-5 space-y-3 text-center border-4 border-black">
              <h4 className="font-semibold text-center uppercase">
                All Toy Collection
              </h4>
              <h4 className="text-4xl font-bold">50 % OFF!</h4>
              <button className="px-8 btn">Buy Now</button>
              <p className="text-2xl font-light">For limited Offer Only</p>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center ">
            <img
              src="https://i.ibb.co/rp1fYZF/istockphoto-1024607678-612x612-removebg-preview.png"
              alt=""
              className="w-3/4 mx-auto lg:w-2/4"
            />
            <img
              src="https://i.ibb.co/Lx4f1WC/istockphoto-950270650-612x612-removebg-preview.png"
              alt=""
              className="w-3/4 mx-auto lg:w-1/3"
            />
          </div>
        </div>
      </div>
    );
  };

export default OfferCarProduct;