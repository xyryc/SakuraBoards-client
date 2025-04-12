import { useContext } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
              <NavLink to={`/keyboards`}>Keyboards</NavLink>
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
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/users" className="justify-between">
                    Users
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">coming soon</span>
                  </a>
                </li>
                <li>
                  <a>
                    Settings
                    <span className="badge">coming soon</span>
                  </a>
                </li>
                <li>
                  <a onClick={logOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link to={`/login`} className="btn" title="Login">
              <GiNinjaHeroicStance className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
