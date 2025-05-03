import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Laser Printers",
    "Inkjet Printers",
    "3D Printers",
    "All-in-One",
    "Photo Printers"
  ];

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={`w-full flex justify-center py-4 px-4 fixed top-0 left-0 z-50 ${className}`}
      style={{ background: 'transparent' }}
    >
      <nav className="w-full max-w-7xl rounded-full bg-white/50 backdrop-blur-md shadow-lg px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between border border-gray-200/30">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}
          className="text-lg sm:text-xl font-bold"
          style={{ color: '#003057' }}
        >
          <span className="font-bold">Printer</span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-[#003057]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-baseline flex-grow justify-between">
          {/* Explore Button */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavigation('/explore'); }}
            className="mx-4 font-medium py-2 transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
            style={{ color: '#003057' }}
          >
            Explore
          </a>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-md mx-6">
            <input
              type="text"
              placeholder="Search for printers..."
              className="w-full rounded-full py-2 px-4 pl-10 focus:outline-none transition-all border text-sm"
              style={{
                backgroundColor: 'rgba(255,248,225,0.7)',
                borderColor: '#D7CFBE',
              }}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4" style={{ color: '#9E0E40' }} />
          </div>

          {/* Categories */}
          <div
            className="relative mx-4"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="px-4 py-2 font-medium transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
              style={{ color: '#003057' }}
            >
              Categories
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 w-48 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-2 border border-gray-200/50">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`);
                    }}
                    className="block px-4 py-2 hover:bg-[#D7CFBE]/30 transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
                    style={{ color: '#003057' }}
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavigation('/cart'); }}
            className="mx-4 relative transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
            style={{ color: '#003057' }}
          >
            <ShoppingCart className="h-5 w-5" />
            <span
              className="absolute -top-2 -right-2 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
              style={{ backgroundColor: '#9E0E40' }}
            >
              0
            </span>
          </a>

          {/* Sign In Button */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavigation('/signin'); }}
            className="ml-2 px-5 py-2 rounded-full text-white font-medium hover:shadow-md transition-all hover:text-shadow-glow"
            style={{
              background: 'linear-gradient(135deg, #D4B650 0%, #9E0E40 100%)',
            }}
          >
            Sign In
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-4 sm:hidden border border-gray-200/50">
            {/* Explore Button */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavigation('/explore'); }}
              className="block px-4 py-2 font-medium hover:bg-[#D7CFBE]/30 transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
              style={{ color: '#003057' }}
            >
              Explore
            </a>

            {/* Search Bar */}
            <div className="relative mx-4 my-2">
              <input
                type="text"
                placeholder="Search for printers..."
                className="w-full rounded-full py-2 px-4 pl-10 focus:outline-none transition-all border text-sm"
                style={{
                  backgroundColor: 'rgba(255,248,225,0.7)',
                  borderColor: '#D7CFBE',
                }}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4" style={{ color: '#9E0E40' }} />
            </div>

            {/* Categories */}
            <div className="px-4 py-2">
              <button
                className="flex items-center font-medium transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ color: '#003057' }}
              >
                Categories
              </button>
              {isDropdownOpen && (
                <div className="mt-2">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`);
                      }}
                      className="block px-4 py-2 hover:bg-[#D7CFBE]/30 transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
                      style={{ color: '#003057' }}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavigation('/cart'); }}
              className="flex items-center px-4 py-2 hover:bg-[#D7CFBE]/30 transition-colors hover:text-[#9E0E40] hover:text-shadow-glow"
              style={{ color: '#003057' }}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              <span
                className="ml-2 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
                style={{ backgroundColor: '#9E0E40' }}
              >
                0
              </span>
            </a>

            {/* Sign In */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavigation('/signin'); }}
              className="block px-4 py-2 mt-2 mx-4 rounded-full text-white font-medium hover:shadow-md transition-all hover:text-shadow-glow"
              style={{
                background: 'linear-gradient(135deg, #D4B650 0%, #9E0E40 100%)',
              }}
            >
              Sign In
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;