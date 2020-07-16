import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import ncdc from './images/ncdc.jpg';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  React.useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      {/* header secton start */}
      <header>
        <div className="navbar-fixed ">
          <nav className="red darken-2">
            <div className="nav-wrapper container  ">
              <a href="#!" className="brand-logo ">
                NCDC
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">HOME</a>
                </li>
                <li>
                  <a href="badges.html">ABOUT US</a>
                </li>
                <li>
                  <a href="collapsible.html">NCDC PROJECTS</a>
                </li>
                <li>
                  <a href="mobile.html">CONTACT US</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">HOME</a>
          </li>
          <li>
            <a href="badges.html">ABOUT US</a>
          </li>
          <li>
            <a href="collapsible.html">NCDC PROJECTS</a>
          </li>
          <li>
            <a href="mobile.html">CONTACT US</a>
          </li>
        </ul>
      </header>
      {/* header section end */}

      {/* hero section start */}
      <div className="row">
        <div className="parallax-container">
          <div className="parallax">
            <img className="responsive-img hero-img" src={ncdc} />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* container start */}
      <div className="container">
        {/* center moto start */}
        <div className="row section">
          <h3 className="center-align">
            Uplifting the rural, illiterate, poor and underprivileged people of
            Nepal with a special focus on women and children
          </h3>
        </div>
        <hr />

        {/* intro section start */}
        <div className="row section">
          <div className="col s12 m6">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="responsive-img"
            />
          </div>
          <div className="col s12 m6 ">
            <blockquote className="red-text text-darken-2">
              <h4>About Us</h4>
            </blockquote>
            <p>
              Nepal Community Development Center(NCDC) is established in 1991.
              It is also registered in Social Welfare Council. It is recognized
              as a leading NGO in Jhapa district of Nepal. The main vision of
              the organization is to uplift the community members through
              conducting different community focused programs.
            </p>
            <a class="waves-effect waves-light btn deep-purple    hoverable">
              Read More
              <i class="material-icons right">send</i>
            </a>
          </div>
        </div>
        {/* intro section end */}
      </div>

      {/* cards */}
      <div class="row deep-purple lighten-1 section">
        <div class="col s12 white-text">
          <span class="card-title center-align">
            <h4>Our Objectives</h4>
          </span>
          <ul className="browser-default ">
            <li>
              To assist in uplifting the social and economic development of the
              poor and underprivileged groups of rural Nepal through its various
              programs and activities.
            </li>
            <li>
              To bring into practice the findings of research of community
              development for the benefit of the poor and underprivileged of
              Nepal.
            </li>
            <li>
              To provide training and empowerment to assist in community
              development of Nepal.
            </li>
          </ul>
        </div>
      </div>

      {/* container end */}
    </>
  );
}

export default App;
