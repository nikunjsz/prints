import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import ProductPage from "./pages/Productpage";
import Cartpage from "./pages/Cartpage";
import Registerpage from "./pages/Registerpage";
import Signinpage from "./pages/Signinpage";
import Viewpage from "./pages/Viewpage";
import Checkpage from "./pages/Checkpage";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Determine if we should show Navbar, Header, and Footer
  const showLayoutComponents = !['/register', '/signin'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY <= 50;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY || isAtTop) {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);

      if (isAtTop && timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsNavbarVisible(true);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (e.clientY >= 50 && window.scrollY > 50) {
        timeoutRef.current = setTimeout(() => {
          if (!document.querySelector('.navbar')?.matches(':hover')) {
            setIsNavbarVisible(false);
          }
        }, 5000);
      }
    };

    const handleNavbarHover = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        if (!document.querySelector('.navbar')?.matches(':hover') && window.scrollY > 50) {
          setIsNavbarVisible(false);
        }
      }, 5000);
    };

    if (showLayoutComponents) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleMouseMove);
      const navbarElement = document.querySelector('.navbar');
      if (navbarElement) {
        navbarElement.addEventListener('mouseover', handleNavbarHover);
        navbarElement.addEventListener('mouseout', handleNavbarHover);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
        if (navbarElement) {
          navbarElement.removeEventListener('mouseover', handleNavbarHover);
          navbarElement.removeEventListener('mouseout', handleNavbarHover);
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [lastScrollY, isNavbarVisible, showLayoutComponents]);

  return (
    <div className="flex flex-col min-h-screen w-screen">
      {showLayoutComponents && (
        <Navbar
          className={`top-4 transition-transform duration-300 navbar ${
            isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        />
      )}
      {showLayoutComponents && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/viewpage" element={<Viewpage />} />
          <Route path="/check" element={<Checkpage />} />
        </Routes>
      </main>
      {showLayoutComponents && <Footer />}
    </div>
  );
}

export default App;
