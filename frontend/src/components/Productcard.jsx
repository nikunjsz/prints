import React from 'react';

const ProductCard = ({ image, onClick }) => {
  return (
    <div
      className="w-80 h-80 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      onClick={onClick}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-lg transition-opacity duration-300 hover:opacity-70"
      />
    </div>
  );
};

export default ProductCard;