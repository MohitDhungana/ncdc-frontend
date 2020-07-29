import React from 'react';
import { Link } from 'react-router-dom';
// import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = ({ ROUTES }) => {
  return (
    <header>
      {/* sidebar start */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to={ROUTES.home}>HOME</Link>
        </li>
        <li>
          <Link
            to="#!"
            className="dropdown-trigger"
            data-target="sidebar-dropdown"
          >
            ABOUT US
            <i className="material-icons right">arrow_drop_down</i>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.rentalServices}>OUR FACILITIES</Link>
        </li>
        <li>
          <Link to={ROUTES.projects}>PROGRAMMES</Link>
        </li>
        <li>
          <Link to={ROUTES.contactUs}>CONTACT US</Link>
        </li>
      </ul>
      {/* sidebar end */}

      {/* dropdown menu navbar start*/}
      <ul id="main-nav-dropdown" className="dropdown-content drop-down-color">
        <li>
          <Link to={ROUTES.ourHistory}>Our History</Link>
        </li>
        <li>
          <Link to={ROUTES.founders}>Founders</Link>
        </li>
        <li>
          <Link to={ROUTES.boardMembers}>Current Board</Link>
        </li>
        <li>
          <Link to={ROUTES.donors}>Donors</Link>
        </li>
      </ul>
      {/* dropdown menu navbar end*/}

      {/* dropdown for sidebar */}
      <ul id="sidebar-dropdown" className="dropdown-content drop-down-color">
        <li>
          <Link to={ROUTES.ourHistory}>Our History</Link>
        </li>
        <li>
          <Link to={ROUTES.founders}>Founders</Link>
        </li>
        <li>
          <Link to={ROUTES.boardMembers}>Current Board</Link>
        </li>
        <li>
          <Link to={ROUTES.donors}>Donors</Link>
        </li>
      </ul>
      {/* dropdown for end */}

      {/* navbar main start*/}
      <div className="navbar-fixed ">
        <nav className="red darken-2">
          <div className="nav-wrapper container">
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
              <li
                className="dropdown-trigger"
                hover="true"
                data-target="main-nav-dropdown"
              >
                <Link to="#!">
                  ABOUT US
                  <i className="material-icons right">arrow_drop_down</i>
                </Link>
              </li>
              <li>
                <Link to={ROUTES.rentalServices}>OUR FACILITIES</Link>
              </li>
              <li>
                <Link to={ROUTES.projects}>PROGRAMMES</Link>
              </li>

              <li>
                <Link to={ROUTES.contactUs}>CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* navbar main end*/}
    </header>
  );
};

export default Navbar;
