import React from 'react';

const Footer = () => {
  // Define the custom color palette
  const colors = {
    gold: '#D6B849',
    cream: '#FFF8E1',
  };

  return (
    <footer style={{ backgroundColor: colors.cream }} className="text-black py-16">
      {/* Top section with form */}
      <div className="container mx-auto px-8 mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0 pr-4">
            <h2 className="text-2xl font-bold mb-4">Ready To Personalize Your Space?</h2>
            <p className="mb-4">
              Our service is for people who believe in owning a safe, clean,
              and organized space. We promise that engaging with what
              we make will help you declutter your life.
            </p>
          </div>
          <div className="md:w-1/2">
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none"
                  style={{ borderBottomWidth: '1px' }}
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none"
                  style={{ borderBottomWidth: '1px' }}
                />
              </div>
              <div className="mb-4">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none"
                  style={{ borderBottomWidth: '1px' }}
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Anything we should know?" 
                  className="w-full border-b border-gray-500 bg-transparent py-2 focus:outline-none"
                  style={{ borderBottomWidth: '1px' }}
                />
              </div>
              <div className="text-right">
                <button 
                  type="submit" 
                  style={{ backgroundColor: colors.gold }} 
                  className="text-black px-6 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Gold section with inset styling */}
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        <div 
          style={{ backgroundColor: colors.gold }} 
          className="py-16 px-8"
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            {/* Logo section */}
            <div className="mb-8 md:mb-0">
              <div className="grid grid-cols-3 gap-2 w-36">
                <div className="w-8 h-8"></div>
                <div className="w-8 h-8 rotate-45 bg-black"></div>
                <div className="w-8 h-8"></div>
                <div className="w-8 h-8 rotate-45 bg-black"></div>
                <div className="w-8 h-8 rotate-45 bg-black"></div>
                <div className="w-8 h-8 rotate-45 bg-black"></div>
                <div className="w-8 h-8 bg-black"></div>
                <div className="w-8 h-8 rotate-45 bg-black"></div>
                <div className="w-8 h-8 bg-black"></div>
              </div>
            </div>

            {/* Links section */}
            <div className="flex flex-col">
              <h3 className="text-xl font-medium mb-2">ClosetNow</h3>
              <div className="flex space-x-16">
                <div>
                  <h4 className="font-medium mb-2">About Us</h4>
                  <ul className="space-y-1">
                    <li>Mission</li>
                    <li>Team</li>
                    <li>Newsletter</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Support</h4>
                  <ul className="space-y-1">
                    <li>Contact</li>
                    <li>Refund Policy</li>
                    <li>FAQ's</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Social</h4>
                  <ul className="space-y-1">
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="container mx-auto mt-16 flex justify-between items-center border-t border-gray-600 pt-4">
            <div>
              <span>Copyright © ClosetNow</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">Terms of Service</a>
              <div className="flex items-center">
                <a href="#top" className="hover:underline">Back to top</a>
                <span className="ml-1 border border-black rounded-full w-6 h-6 inline-flex items-center justify-center">↑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;