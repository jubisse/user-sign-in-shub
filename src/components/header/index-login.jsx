import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full border-b-indigo-600 border-b-4 transition-colors ease-in duration-300 z-50 ${
        isScrolled
          ? "bg-indigo-600 text-white"
          : "bg-transparent text-indigo-600"
      }`}
    >
      <div className="w-[1400px] flex justify-center m-auto items-center p-2 font-poppins">
        <NavLink
          to="/"
          className={`font-light text-2xl ${
            isScrolled ? "text-white" : "text-indigo-600"
          } transition-colors ease-in duration-300`}
        >
          students/HUB
        </NavLink>
      </div>
    </header>
  );
};
