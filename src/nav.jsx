import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShowNavbar(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full top-0 pt-6 left-0 flex justify-center text-white h-16 items-center transform transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="flex justify-evenly bg-gray-900   w-[80%]  rounded-lg  p-4 font-sans text-lg font-medium shadow-md" onClick={()=>{setShowNavbar(true)}}>
        <div 
          className="hover:text-gray-700 transition-colors text-white duration-200 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Home
        </div>
        <div 
          className="hover:text-gray-700 transition-colors text-white duration-200 cursor-pointer"
          onClick={() => scrollToSection('events')}
        >
          Events
        </div>
        <div 
          className="hover:text-gray-700 transition-colors text-white duration-200 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
