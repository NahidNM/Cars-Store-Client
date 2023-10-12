import React from 'react';

const UseBannerCarCard = (props) => {

    const {img, carName} = props.data;

    return (
        <article className="px-5 mx-3 text-gray-800 bg-gray-500 rounded-lg rounded-lg shadow  bg-opacity-80">
        <img
          src={img}
          alt={img}
          className="aspect-[4/5] w-48 object-contain rounded-lg"
        />
        <h3 className="pt-3 text-blue-900 border-t border-black">{carName}</h3>
      </article>
    );
};

export default UseBannerCarCard;