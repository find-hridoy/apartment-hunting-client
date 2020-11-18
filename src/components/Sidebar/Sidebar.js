import React from "react";
import Logo from "../../images/logos/Logo.png";
import {
  faShoppingBag,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="navbar-brand logo">
        <img className="logo" src={Logo} alt={Logo} />
      </NavLink>
      <nav className="flex-column">
        <NavLink
          className="nav-link nav_link"
          activeClassName="active_nav"
          exact
          to="bookingList"
        >
          <FontAwesomeIcon className="nav_icon" icon={faShoppingBag} />
          Booking List
        </NavLink>
        <NavLink
          className="nav-link nav_link"
          activeClassName="active_nav"
          exact
          to="addRentHouse"
        >
          <FontAwesomeIcon className="nav_icon" icon={faPlus} />
          Add Rent House
        </NavLink>
        <NavLink
          className="nav-link nav_link"
          activeClassName="active_nav"
          exact
          to="/myRent"
        >
          <FontAwesomeIcon className="nav_icon" icon={faHome} />
          My Rent
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
