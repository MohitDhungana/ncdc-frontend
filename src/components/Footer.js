import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ ROUTES }) => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Contact US</h5>
            <p className="grey-text text-lighten-4">
              Nepal Community Development Center <br />
              Bhadrapur, Jhapa, <br />
              Nepal <br />
              Phone: (+977) 9898989898
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Quick Links</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to={ROUTES.home}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to={ROUTES.aboutUs}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to={ROUTES.projects}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to={ROUTES.rentalServices}
                >
                  Rental Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center-align">
          © {new Date().getFullYear()} Nepal Community Development Center
        </div>
      </div>
    </footer>
  );
};

export default Footer;
