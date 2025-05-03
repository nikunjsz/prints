import React, { useState } from 'react';

const ProductCard = ({ image, onClick, alt }) => {
  return (
    <div
      className="w-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover rounded-xl transition-opacity duration-300 hover:opacity-90"
      />
    </div>
  );
};

const Viewpage = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [activeFilter, setActiveFilter] = useState({
    colors: [],
    categories: [],
  });

  // Updated with better dummy images from Unsplash
  const products = [
    { id: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", category: "category1", alt: "Watch" },
    { id: 2, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", category: "category2", alt: "Headphones" },
    { id: 3, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", category: "category1", alt: "Sneakers" },
    { id: 4, image: "https://images.unsplash.com/photo-1516321310768-61f59f12a207", category: "category3", alt: "Camera" },
    { id: 5, image: "https://images.unsplash.com/photo-1503602642458-232111445657", category: "category2", alt: "Bag" },
    { id: 6, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2", category: "category3", alt: "Sunglasses" },
    { id: 7, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77", category: "category1", alt: "Shoes" },
    { id: 8, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12", category: "category2", alt: "Smartwatch" },
    { id: 9, image: "https://images.unsplash.com/photo-1526170375885-2d8f3bc9d595", category: "category3", alt: "Backpack" },
  ];

  const colorOptions = [
    { name: "pink", hex: "#F7A8D8" },
    { name: "red", hex: "#E84A5F" },
    { name: "orange", hex: "#FF8A5B" },
    { name: "yellow", hex: "#FFD166" },
    { name: "green", hex: "#7AC74F" },
    { name: "teal", hex: "#48D1CC" },
    { name: "blue", hex: "#4A89DC" },
    { name: "purple", hex: "#9B59B6" },
    { name: "brown", hex: "#8D6E63" },
    { name: "black", hex: "#000000" },
    { name: "gray", hex: "#D8D8D8" },
    { name: "white", hex: "#FFFFFF" },
  ];

  const categoryOptions = [
    "Electronics",
    "Fashion",
    "Accessories",
    "Footwear",
    "Gadgets",
  ];

  const toggleFilter = (type, value) => {
    setActiveFilter((prev) => {
      const newFilters = { ...prev };
      if (type === 'colors') {
        newFilters.colors = prev.colors.includes(value)
          ? prev.colors.filter((item) => item !== value)
          : [...prev.colors, value];
      } else if (type === 'categories') {
        newFilters.categories = prev.categories.includes(value)
          ? prev.categories.filter((item) => item !== value)
          : [...prev.categories, value];
      }
      return newFilters;
    });
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prev) => !prev);
  };

  // Filter products based on active filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter.categories.length === 0 ||
      activeFilter.categories.includes(product.category);
    // Note: Color filtering would need product color data to be implemented
    return matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white shadow-lg sticky top-0 z-10">
        <button
          onClick={toggleFiltersVisibility}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          {filtersVisible ? "Hide Filters" : "Show Filters"}
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">Sort by</span>
          <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
            <option>Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Filter sidebar */}
        <div
          className={`w-80 bg-white shadow-lg p-6 transition-all duration-300 ${
            filtersVisible ? 'translate-x-0' : '-translate-x-full'
          } fixed h-full z-20 md:static md:translate-x-0`}
        >
          {/* Colors Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">Colors</h3>
            <div className="grid grid-cols-4 gap-3">
              {colorOptions.map((color) => (
                <div
                  key={color.name}
                  className={`w-10 h-10 rounded-full cursor-pointer border-2 transition-all duration-200 ${
                    activeFilter.colors.includes(color.name)
                      ? 'border-blue-500 scale-110'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => toggleFilter('colors', color.name)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Categories Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">Categories</h3>
            {categoryOptions.map((category) => (
              <div key={category} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={activeFilter.categories.includes(category)}
                  onChange={() => toggleFilter('categories', category)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 transition-colors"
                />
                <label
                  htmlFor={`category-${category}`}
                  className="ml-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Main content area with products */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="aspect-square">
                <ProductCard
                  image={product.image}
                  alt={product.alt}
                  onClick={() => console.log(`Product ${product.id} clicked`)}
                />
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
    
export default Viewpage;