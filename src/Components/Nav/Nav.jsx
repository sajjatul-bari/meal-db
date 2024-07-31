import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div className="p-5 bg-green-900 text-center font-bold text-white">
      <ul className="p-5 space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/meals">Meal</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
};

export default Nav;
