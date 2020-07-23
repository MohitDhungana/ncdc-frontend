import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ ROUTES }) => {
  return (
    <header>
      <div className="navbar-fixed ">
        <nav className="red darken-2">
          <div className="nav-wrapper container  ">
            <Link to={ROUTES.home} className="brand-logo ">
              NCDC
            </Link>
            <Link to="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to={ROUTES.home}>HOME</Link>
              </li>
              <li>
                <Link to={ROUTES.aboutUs}>ABOUT US</Link>
              </li>
              <li>
                <Link to={ROUTES.projects}>NCDC PROJECTS</Link>
              </li>
              <li>
                <Link to={ROUTES.rentalServices}>RENTAL SERVICES</Link>
              </li>
              <li>
                <Link to={ROUTES.contactUs}>CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to={ROUTES.home}>HOME</Link>
        </li>
        <li>
          <Link to={ROUTES.aboutUs}>ABOUT US</Link>
        </li>
        <li>
          <Link to={ROUTES.projects}>NCDC PROJECTS</Link>
        </li>
        <li>
          <Link to={ROUTES.rentalServices}>RENTAL SERVICES</Link>
        </li>
        <li>
          <Link to={ROUTES.contactUs}>CONTACT US</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
