import React from 'react';

const HomeCard = ({ props }) => {
  const { imageURL, title, heading, description, extraLarge, imageRight } = props;

  const textSize = extraLarge ? 'text-md' : 'text-base';

  return (
    <div className={`max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg flex md:flex-row ${imageRight ? 'flex' : 'flex-col-reverse'}`}>
      {/* Image on the left or right based on `imageRight` and on top for mobile */}
      <img
        src={imageURL}
        alt={title}
        className={`w-full h-48 object-cover rounded-t-lg mb-4 md:mb-0 md:w-1/2 
        }`}
      />
      <div className="p-4 md:w-1/2">
        <h3 className={`font-bold ${textSize}`}>{title}</h3>
        <h4 className="text-xl font-semibold mt-2">{heading}</h4>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
