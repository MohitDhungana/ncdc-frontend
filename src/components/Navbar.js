import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="navbar-fixed ">
        <nav className="red darken-2">
          <div className="nav-wrapper container  ">
            <Link to="/ncdc-frontend" className="brand-logo ">
              NCDC
            </Link>
            <Link to="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/ncdc-frontend">HOME</Link>
              </li>
              <li>
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li>
                <Link to="/projects">NCDC PROJECTS</Link>
              </li>
              <li>
                <Link to="/rental-service">RENTAL SERVICES</Link>
              </li>
              <li>
                <Link to="/contactus">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/ncdc-frontend">HOME</Link>
        </li>
        <li>
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li>
          <Link to="/projects">NCDC PROJECTS</Link>
        </li>
        <li>
          <Link to="/rental-service">RENTAL SERVICES</Link>
        </li>
        <li>
          <Link to="/contactus">CONTACT US</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
