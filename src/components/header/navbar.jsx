import { NavLink } from "react-router-dom";

export const NavBar = ({ isScrolled }) => {
  const activeStyles = "underline font-light uppercase";
  const inactiveStyles = "font-light uppercase";

  return (
    <nav className="space-x-2">
      <ul className="flex">
        <li className="ml-10">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${isActive ? activeStyles : inactiveStyles} ${
                isScrolled ? "text-white" : "text-indigo-600"
              } transition-all duration-300 ease-in-out hover:text-[#9089fc] hover:rounded-xl hover:px-4 hover:py-2`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="ml-10">
          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              `${isActive ? activeStyles : inactiveStyles} ${
                isScrolled ? "text-white" : "text-indigo-600"
              } transition-all duration-300 ease-in-out hover:text-[#9089fc] hover:rounded-xl hover:px-4 hover:py-2`
            }
          >
            Cadastrar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
