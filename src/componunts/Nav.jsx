import { useState } from "react";
import logo from "../2_BR[1].png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full sticky top-0 bg-white shadow-md border-b h-16 px-6 z-50">
      <div>
        <img src={logo} alt="Logo" className="h-14" />
      </div>

      <div className="relative">
        <button
          onClick={toggleMenu}
          className="px-4 py-2  text-black rounded-md  text-2xl"
        >
          =
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-md w-40">
            {["Home", "About", "Team"].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
