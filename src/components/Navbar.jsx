import { FaOpencart } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={`/`}>Homepage</NavLink>
            </li>
            <li>
              <NavLink to={`/addKeyboard`}>Add Keyboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          SakuraBoards
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="btn">
          <FaOpencart className="w-5 h-5" />
        </Link>
        <Link className="btn">
          <GiNinjaHeroicStance className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
