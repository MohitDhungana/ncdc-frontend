import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ ROUTES }) => {
  return (
    <footer className="page-footer red darken-2">
      <div className="container">
        <div className="row">
          {/* CONTACT US */}
          <div className="col m6 s12">
            <h4 className="white-text">Contact Us</h4>
            <ul className="grey-text text-lighten-4">
              <li className="icon" style={{ display: 'flex' }}>
                <i className="valign-wrapper  material-icons">pin_drop</i>
                <span>Bhadrapur, Jhapa, Nepal</span>
              </li>
              <li className="icon" style={{ display: 'flex' }}>
                <i className="valign-wrapper material-icons">phone</i>
                <span>9898898898</span>
              </li>
              <li className="icon" style={{ display: 'flex' }}>
                <i className="valign-wrapper material-icons">mail</i>
                <span>test@test.com</span>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="col m4 offset-m2  s12">
            <h4 className="white-text">Quick Links</h4>
            <ul>
              <li className="icon">
                <Link className="grey-text text-lighten-3" to={ROUTES.home}>
                  Home
                </Link>
              </li>
              <li className="icon">
                <Link className="grey-text text-lighten-3" to={ROUTES.aboutUs}>
                  About Us
                </Link>
              </li>
              <li className="icon">
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
