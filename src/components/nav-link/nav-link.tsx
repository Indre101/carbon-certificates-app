import classNames from "classnames";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

interface INavLink {
  to: string;
  children: string;
}

export const NavLink = ({ to, children }: INavLink) => {
  return (
    <ReactRouterNavLink
      to={to}
      className={({ isActive }) =>
        classNames(
          "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",
          {
            "text-white": isActive,
          }
        )
      }>
      {children}
    </ReactRouterNavLink>
  );
};
