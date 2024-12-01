import { FaUsers } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiNinjaHeroicStance } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            <FaBarsStaggered />
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
        {/* <Link className="btn">
          <FaOpencart className="w-5 h-5" />
        </Link> */}
        <Link to={`/users`} className="btn" title="Users">
          <FaUsers className="w-5 h-5" />
        </Link>
        <Link to={`/register`} className="btn" title="Login">
          <GiNinjaHeroicStance className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
