import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="w-screen"
      style={{
        height: '70px',
        background: 'linear-gradient(-45deg, #fef5dc, #d8b75b, #e4c468)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 4s ease infinite', // Changed from 8s to 4s
      }}
    />
  );
};

export default Header;