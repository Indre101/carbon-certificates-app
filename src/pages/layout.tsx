import { Outlet } from "react-router-dom";
import { NavLink } from "../components";

export const Layout = () => {
  return (
    <>
      <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-teal-500 h-[100px] px-6">
        <ul className="flex">
          <li className="mr-6">
            <NavLink to="/">Certificates</NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/favourites">Favourites</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
