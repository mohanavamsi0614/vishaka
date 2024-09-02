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

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full top-0 pt-6 left-0 flex justify-center text-white h-16  items-center  transform transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
    <div className=" flex justify-evenly  w-[80%] bg-white rounded-lg text-black p-4" onClick={()=>{setShowNavbar(true)}}><div>Home🏠</div><div>Events</div><div>About</div></div>
    </div>
  )
};

export default Navbar;
