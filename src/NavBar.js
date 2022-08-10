import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="display">
      <li>
        <Link className="nav-linke" to="/home"> Home </Link>
      </li>
      <li>
        <Link className="nav-linke" to="About"> About </Link>
      </li>
      <li >
        <Link className="nav-linke" to="Contact"> Contact </Link>
      </li>
      <li >
        <Link className="nav-linke" to="ProfileInfo"> Profile </Link>
      </li>
      </div>
    );
}
export default NavBar;