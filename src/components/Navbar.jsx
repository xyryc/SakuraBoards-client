import { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { IoExitOutline } from "react-icons/io5";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            <FaBarsStaggered />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={`/`}>Homepage</NavLink>
            </li>
            <li>
              <NavLink to={`/addKeyboard`}>Add Keyboard</NavLink>
            </li>
            <li>
              <NavLink to={`/myKeyboards`}>My Keyboards</NavLink>
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
        {user ? (
          <div>
            <button onClick={() => logOut()} className="btn" title="Logout">
              <IoExitOutline className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div>
            <Link to={`/register`} className="btn" title="Register">
              <GiNinjaHeroicStance className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
