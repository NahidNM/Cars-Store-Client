import React from 'react';

const UseBannerCarCard = (props) => {

    const {img, carName} = props.data;

    return (
        <article className="mx-3 rounded-lg bg-white px-5 py-3 text-gray-800 shadow bg-opacity-80 rounded-tl-full">
        <img
          src={img}
          alt={img}
          className="aspect-[4/5] w-48 object-contain rounded-tl-full"
        />
        <h3 className="border-t pt-3 border-black text-blue-900">{carName}</h3>
      </article>
    );
};

export default UseBannerCarCard;