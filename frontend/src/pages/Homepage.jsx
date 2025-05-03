// import React, { useEffect, useRef, useState } from 'react';
// import ProductCard from '../components/Productcard';

// const Homepage = () => {
//   const bg1 = 'https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
//   const bg2 = 'https://plus.unsplash.com/premium_photo-1675747693477-53d0082356c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
//   const portfolioBackgrounds = [
//     'https://plus.unsplash.com/premium_photo-1675662138621-f26f7bda2434?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1664391765043-57f702c4d41d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   ];
//   const section4Backgrounds = [
//     'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1593462475357-67ac85ec71a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   ];
//   const portfolioImage = 'https://images.unsplash.com/photo-1557404838-0f7b750e3a04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
//   const section4Image = 'https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//   const productImages = [
//     'https://picsum.photos/300/300?random=1',
//     'https://picsum.photos/300/300?random=2',
//     'https://picsum.photos/300/300?random=3',
//     'https://picsum.photos/300/300?random=4',
//     'https://picsum.photos/300/300?random=5',
//     'https://picsum.photos/300/300?random=6',
//   ];

//   const hasMounted = useRef(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const [currentBgIndexSection4, setCurrentBgIndexSection4] = useState(0);

//   // Handle scroll position for parallax effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Handle background image cycling for portfolio section
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % portfolioBackgrounds.length);
//       // console.log('Section 3 cycling to index:', (currentBgIndex + 1) % portfolioBackgrounds.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Handle background image cycling for section 4
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentBgIndexSection4((prevIndex) => (prevIndex + 1) % section4Backgrounds.length);
//       // console.log('Section 4 cycling to index:', (currentBgIndexSection4 + 1) % section4Backgrounds.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Intersection Observer for fade-in animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('opacity-100');
//             entry.target.classList.remove('translate-y-10');
//           } else {
//             entry.target.classList.remove('opacity-100');
//             entry.target.classList.add('translate-y-10');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
//     );

//     const sections = document.querySelectorAll('.fade-in-section');
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen overflow-x-hidden">
//       {/* Preload Images */}
//       <div className="hidden">
//         {portfolioBackgrounds.concat(section4Backgrounds).map((bg, index) => (
//           <img key={index} src={bg} alt="" />
//         ))}
//         <img src={portfolioImage} alt="" />
//         <img src={section4Image} alt="" />
//       </div>

//       {/* Hero Video Section */}
//       <div className="relative" style={{ height: 'calc(100vh - 70px)' }}>
//         <video
//           autoPlay
//           muted
//           loop
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
//           style={{
//             transform: `scale(${1 + scrollPosition * 0.0005})`,
//             opacity: `${0.5 - scrollPosition * 0.0005}`,
//           }}
//         >
//           <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
//         <div
//           className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
//           style={{
//             transform: `translateY(${scrollPosition * 0.3}px)`,
//             opacity: `${1 - scrollPosition * 0.002}`,
//           }}
//         >
//           <h1 className="text-4xl font-bold mb-4">Designer Prints</h1>
//           <p className="max-w-md">
//             We make printers bla bla with cutting-edge technology. Enjoy high-quality prints,
//             durable designs, and excellent customer support. Discover our range today!
//           </p>
//         </div>
//       </div>

//       {/* Ultra-Subtle Top Transition */}
//       <div className="h-12 bg-gradient-to-b from-slate-800/20 to-transparent relative z-10 -mt-12"></div>

//       {/* Parallax Section 1 */}
//       <div
//         className="parallax bg-cover bg-center bg-no-repeat min-h-screen relative"
//         style={{
//           backgroundImage: `url(${bg1})`,
//           backgroundPosition: `center ${50 + scrollPosition * 0.05}%`,
//         }}
//       >
//         <div className="min-h-screen bg-black/30 backdrop-blur-md flex items-center justify-center px-4 py-16">
//           <div className="w-full max-w-7xl mx-auto text-center">
//             <h2
//               className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-bold mb-12 will-change-transform-opacity"
//               style={{ transitionDelay: '0ms' }}
//             >
//               LATEST
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
//               {productImages.slice(0, 3).map((img, index) => (
//                 <div
//                   key={index}
//                   className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform-opacity"
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <ProductCard image={img} onClick={() => {}} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Parallax Section 2 */}
//       <div
//         className="parallax bg-cover bg-center bg-no-repeat min-h-screen relative z-20"
//         style={{
//           backgroundImage: `url(${bg2})`,
//           backgroundPosition: `center ${50 - scrollPosition * 0.03}%`,
//         }}
//       >
//         <div className="min-h-screen bg-black/30 backdrop-blur-md flex items-center justify-center px-4 py-16">
//           <div className="w-full max-w-7xl mx-auto text-center">
//             <h2
//               className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-bold mb-12 will-change-transform-opacity"
//               style={{ transitionDelay: '0ms' }}
//             >
//               BESTSELLER
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
//               {productImages.slice(3, 6).map((img, index) => (
//                 <div
//                   key={index}
//                   className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform-opacity"
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <ProductCard image={img} onClick={() => {}} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Ultra-Subtle Bottom Transition */}
//       <div className="h-12 bg-gradient-to-t from-slate-800/20 to-transparent relative z-10 -mt-12"></div>

//       {/* Portfolio Section (Section 3) */}
//       <div className="relative min-h-screen flex items-center">
//         {/* Background Images with Fade Transition */}
//         {portfolioBackgrounds.map((bg, index) => (
//           <div
//             key={index}
//             className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out pointer-events-none z-0"
//             style={{
//               backgroundImage: `url(${bg})`,
//               opacity: index === currentBgIndex ? 1 : 0,
//             }}
//           ></div>
//         ))}
//         {/* Dimming Overlay */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-5"></div>

//         {/* Main Content */}
//         <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 relative z-10">
//           {/* Left Column - Clickable Image */}
//           <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform-opacity" style={{ transitionDelay: '0ms' }}>
//             <a href="#" className="block">
//               <img 
//                 src={portfolioImage} 
//                 alt="Italian design showcase" 
//                 className="w-full h-96 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
//               />
//             </a>
//           </div>
          
//           {/* Right Column - Project Info */}
//           <div className="flex flex-col justify-center space-y-8 md:pl-10">
//             <h2 className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-serif drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] will-change-transform-opacity" style={{ transitionDelay: '200ms' }}>
//               Italian
//             </h2>
//             <p className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white/70 font-mono text-sm max-w-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-pulse will-change-transform-opacity" style={{ transitionDelay: '400ms' }}>
//               A curated collection of premium Italian-inspired designs, blending timeless elegance with modern functionality.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section 4 with Overlapping Image */}
//       <div className="relative min-h-screen flex items-center">
//         {/* Background Images with Fade Transition */}
//         {section4Backgrounds.map((bg, index) => (
//           <div
//             key={index}
//             className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out pointer-events-none z-0"
//             style={{
//               backgroundImage: `url(${bg})`,
//               opacity: index === currentBgIndexSection4 ? 1 : 0,
//             }}
//           ></div>
//         ))}
//         {/* Dimming Overlay */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-5"></div>

//         {/* Main Content */}
//         <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 relative z-10">
//           {/* Left Column - Clickable Image with Overlap */}
//           <div className="relative -mt-40 z-20">
//             <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform-opacity" style={{ transitionDelay: '0ms' }}>
//               <a href="#" className="block">
//                 <img 
//                   src={section4Image} 
//                   alt="Modern design showcase" 
//                   className="w-full h-96 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
//                 />
//               </a>
//             </div>
//           </div>
          
//           {/* Right Column - Project Info */}
//           <div className="flex flex-col justify-center space-y-8 md:pl-10">
//             <h2 className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-serif drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] will-change-transform-opacity" style={{ transitionDelay: '200ms' }}>
//               Modern
//             </h2>
//             <p className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white/70 font-mono text-sm max-w-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-pulse will-change-transform-opacity" style={{ transitionDelay: '400ms' }}>
//               A sleek selection of contemporary designs, combining minimalist aesthetics with cutting-edge innovation.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/Productcard';

const Homepage = () => {
  const bg1 = 'https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const bg2 = 'https://plus.unsplash.com/premium_photo-1675747693477-53d0082356c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const portfolioBackgrounds = [
    'https://plus.unsplash.com/premium_photo-1675662138621-f26f7bda2434?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664391765043-57f702c4d41d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  const section4Backgrounds = [
    'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1593462475357-67ac85ec71a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  const portfolioImage = 'https://images.unsplash.com/photo-1557404838-0f7b750e3a04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const section4Image = 'https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const productImages = [
    'https://picsum.photos/300/300?random=1',
    'https://picsum.photos/300/300?random=2',
    'https://picsum.photos/300/300?random=3',
    'https://picsum.photos/300/300?random=4',
    'https://picsum.photos/300/300?random=5',
    'https://picsum.photos/300/300?random=6',
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentBgIndexSection4, setCurrentBgIndexSection4] = useState(0);
  const [currentImage, setCurrentImage] = useState(portfolioImage);
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle background image cycling for portfolio section
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % portfolioBackgrounds.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle background image cycling for section 4
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndexSection4((prevIndex) => (prevIndex + 1) % section4Backgrounds.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Intersection Observer for fade-in animations, image switching, and visibility control
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let section3Visible = false;
        let section4Visible = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10');

            if (entry.target.id === 'section-3') {
              section3Visible = true;
              setCurrentImage(portfolioImage);
            } else if (entry.target.id === 'section-4') {
              section4Visible = true;
              setCurrentImage(section4Image);
            }
          } else {
            entry.target.classList.remove('opacity-100');
            entry.target.classList.add('translate-y-10');
          }
        });

        // Show the image only when Section 3 or Section 4 is in view
        setIsImageVisible(section3Visible || section4Visible);
      },
      { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Preload Images */}
      <div className="hidden">
        {portfolioBackgrounds.concat(section4Backgrounds).map((bg, index) => (
          <img key={index} src={bg} alt="" />
        ))}
        <img src={portfolioImage} alt="" />
        <img src={section4Image} alt="" />
      </div>

      {/* Hero Video Section */}
      <div className="relative" style={{ height: 'calc(100vh - 70px)' }}>
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          style={{
            transform: `scale(${1 + scrollPosition * 0.0005})`,
            opacity: `${0.5 - scrollPosition * 0.0005}`,
          }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
          style={{
            transform: `translateY(${scrollPosition * 0.3}px)`,
            opacity: `${1 - scrollPosition * 0.002}`,
          }}
        >
          <h1 className="text-4xl font-bold mb-4">Designer Prints</h1>
          <p className="max-w-md">
            We make printers bla bla with cutting-edge technology. Enjoy high-quality prints,
            durable designs, and excellent customer support. Discover our range today!
          </p>
        </div>
      </div>

      {/* Ultra-Subtle Top Transition */}
      <div className="h-12 bg-gradient-to-b from-slate-800/20 to-transparent relative z-10 -mt-12"></div>

      {/* Parallax Section 1 */}
      <div
        className="parallax bg-cover bg-center bg-no-repeat min-h-screen relative"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: `center ${50 + scrollPosition * 0.05}%`,
        }}
      >
        <div className="min-h-screen bg-black/30 backdrop-blur-md flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2
              className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-bold mb-12 will-change-transform-opacity"
              style={{ transitionDelay: '0ms' }}
            >
              LATEST
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {productImages.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform-opacity"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProductCard image={img} onClick={() => {}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Section 2 */}
      <div
        className="parallax bg-cover bg-center bg-no-repeat min-h-screen relative z-20"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: `center ${50 - scrollPosition * 0.03}%`,
        }}
      >
        <div className="min-h-screen bg-black/30 backdrop-blur-md flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2
              className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-bold mb-12 will-change-transform-opacity"
              style={{ transitionDelay: '0ms' }}
            >
              BESTSELLER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {productImages.slice(3, 6).map((img, index) => (
                <div
                  key={index}
                  className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out will-change-transform-opacity"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ProductCard image={img} onClick={() => {}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-Subtle Bottom Transition */}
      <div className="h-12 bg-gradient-to-t from-slate-800/20 to-transparent relative z-10 -mt-12"></div>

      {/* Portfolio Section (Section 3) */}
      <div id="section-3" className="relative min-h-screen flex items-center fade-in-section">
        {/* Background Images with Fade Transition */}
        {portfolioBackgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out pointer-events-none z-0"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: index === currentBgIndex ? 1 : 0,
            }}
          ></div>
        ))}
        {/* Dimming Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-5"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 relative z-10">
          {/* Left Column - Fixed Image */}
          <div className="relative h-96 md:block hidden">
            {isImageVisible && (
              <div className="sticky top-1/2 transform -translate-y-1/2">
                <a href="#" className="block">
                  <img
                    src={currentImage}
                    alt="Design showcase"
                    className="w-full h-96 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
                  />
                </a>
              </div>
            )}
          </div>
          
          {/* Right Column - Project Info */}
          <div className="flex flex-col justify-center space-y-8 md:pl-10">
            <h2 className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-serif drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] will-change-transform-opacity" style={{ transitionDelay: '200ms' }}>
              Italian
            </h2>
            <p className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white/70 font-mono text-sm max-w-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-pulse will-change-transform-opacity" style={{ transitionDelay: '400ms' }}>
              A curated collection of premium Italian-inspired designs, blending timeless elegance with modern functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div id="section-4" className="relative min-h-screen flex items-center fade-in-section">
        {/* Background Images with Fade Transition */}
        {section4Backgrounds.map((bg, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out pointer-events-none z-0"
            style={{
              backgroundImage: `url(${bg})`,
              opacity: index === currentBgIndexSection4 ? 1 : 0,
            }}
          ></div>
        ))}
        {/* Dimming Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-5"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 relative z-10">
          {/* Left Column - Fixed Image */}
          <div className="relative h-96 md:block hidden">
            {isImageVisible && (
              <div className="sticky top-1/2 transform -translate-y-1/2">
                <a href="#" className="block">
                  <img
                    src={currentImage}
                    alt="Design showcase"
                    className="w-full h-96 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
                  />
                </a>
              </div>
            )}
          </div>
          
          {/* Right Column - Project Info */}
          <div className="flex flex-col justify-center space-y-8 md:pl-10">
            <h2 className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl font-serif drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] will-change-transform-opacity" style={{ transitionDelay: '200ms' }}>
              Modern
            </h2>
            <p className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white/70 font-mono text-sm max-w-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-pulse will-change-transform-opacity" style={{ transitionDelay: '400ms' }}>
              A sleek selection of contemporary designs, combining minimalist aesthetics with cutting-edge innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;