import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

const ProductPage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const product = {
    title: "Wallpaper1",
    subtitle: "Italian",
    price: "₹ 4,695.00",
    description:
      "Made for all-day comfort, our PerfectStretch fabric has four-way stretch and a polished look. This button-down top puts it to good use, adding a zippered chest pocket and sweat-wicking support to get you through your daily schedule.",
  };

  const photos = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507521628349-dee6b693c3b0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519125323398-675f398f6978?q=80&w=800&auto=format&fit=crop"
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background with dimming overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for dimming background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-8 relative z-10">
        <div className="flex flex-col gap-8">
          {/* Photo Gallery Centered */}
          <div className="flex flex-col items-center">
            {/* Main Photo Display with Zoom */}
            <div className="relative flex-grow max-w-2xl overflow-hidden group w-[500px] h-[500px] rounded-xl shadow-lg">
              <img
                src={photos[currentPhotoIndex]}
                alt="Product"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                <button
                  onClick={prevPhoto}
                  className="bg-white hover:bg-amber-100 transition rounded-full p-2 shadow-md text-xl text-black"
                >
                  ←
                </button>
                <button
                  onClick={nextPhoto}
                  className="bg-white hover:bg-amber-100 transition rounded-full p-2 shadow-md text-xl text-black"
                >
                  →
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation Below */}
            <div className="flex gap-2 mt-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 cursor-pointer border-2 relative ${
                    currentPhotoIndex === index
                      ? 'border-amber-500'
                      : 'border-transparent'
                  }`}
                  onClick={() => setCurrentPhotoIndex(index)}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-30">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Below with reduced opacity */}
          <div className="max-w-2xl mx-auto bg-white bg-opacity-70 p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mb-2">{product.subtitle}</p>

            <p className="text-xl font-semibold mt-4 text-gray-800">{product.price}</p>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            <p className="text-sm text-gray-500 mb-6">(Also includes all applicable duties)</p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-black text-white py-3 px-4 rounded-full">
                Add to Bag
              </button>
              <button className="w-full bg-white border border-gray-300 py-3 px-4 rounded-full flex items-center justify-center gap-2">
                <span className="text-black">Favorite</span>
                <FaRegHeart size={18} className="text-black" />
              </button>
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;