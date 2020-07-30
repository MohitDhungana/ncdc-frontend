import React from 'react';
import ncdc from '../images/ncdc-front.jpg';
import ncdcSection from '../images/ncdc.jpg';
import conference from '../images/conference.jpg';
import objective from '../images/objective.jpg';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const HomeContent = ({ ROUTES }) => {
  React.useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <div className="row" style={{ zIndex: '2' }}>
        <div className="parallax-container">
          <div className="parallax">
            <img className=" hero-img" src={ncdc} alt="ncdc" />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* container start */}
      <div className="container ">
        {/* center motto start */}
        <div className="row ">
          <h3 className="center-align">
            Uplifting the rural, illiterate, poor and underprivileged people of
            Nepal with a special focus on women and children
          </h3>
        </div>

        <hr />

        {/* about us start */}
        <div className="row section  ">
          <div className="col s12 l6">
            <img
              src={ncdcSection}
              // src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="about us"
              className="responsive-img"
            />
          </div>

          <div className="col s12 l6  ">
            <blockquote className="red-text text-darken-2 home-title">
              <h3 className="home-title">About Us</h3>
            </blockquote>

            <p>
              Nepal Community Development Center(NCDC) is established in 1991 by
              late Ram Prasad Dhungana with the purpose of uplifting the life of
              rural community members through education and other support
              services. Due to dedicated work of founding Chairman Ram Prasad
              Dhungana, NCDC expanded it's services throughout the district and
              developed its institutional base.
            </p>
            <p>
              With the generous support from Bhadrapur Municipality, NCDC
              received land and constructed its facility. Presently NCDC owns
              over Rs. 30 million worth of property in Bhadrapur with full
              service training facility and community event service facilities.
              Details of our facilities are listed under 'Our Services' section.
            </p>
            <p>
              NCDC is registered under Social Welfare Council with registration
              no. 123456
            </p>
            {/* <Link
              to={ROUTES.aboutUs}
              className="waves-effect waves-light btn red lighten-1  hoverable"
            >
              Read More
              <i className="material-icons right">send</i>
            </Link> */}
          </div>
        </div>
        {/* about us end */}

        {/* objectives start */}
        <div className="row section">
          <div className="col s12 l6">
            <blockquote className="red-text text-darken-2 home-title">
              <h3 className="home-title">Our Objectives</h3>
            </blockquote>

            <ul className="">
              <li className="section">
                To assist in uplifting the social and economic development of
                the poor and underprivileged groups of rural Nepal through its
                various programs and activities.
              </li>
              <li className="section">
                To bring into practice the findings of research of community
                development for the benefit of the poor and underprivileged of
                Nepal.
              </li>
              <li className="section">
                To provide training and empowerment to assist in community
                development of Nepal.
              </li>
            </ul>
            <Link
              to={ROUTES.projects}
              className="waves-effect waves-light btn red lighten-1  hoverable"
            >
              View Our Projects
              <i className="material-icons right">send</i>
            </Link>
          </div>

          <div className="col l6 hide-on-med-and-down  ">
            <img
              src={objective}
              // src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="mission"
              className="responsive-img"
            />
          </div>
        </div>

        {/* objective end */}

        {/* other services start */}

        <div className="row section">
          <div className="col s12 l6">
            <img
              src={conference}
              alt="otherServices"
              className="responsive-img home-section-img"
            />
          </div>

          <div className="col s12 l6">
            <blockquote className="red-text text-darken-2 home-title">
              <h3 className="home-title">Other Services</h3>
            </blockquote>

            <p>
              NCDC generates its operational cost by renting its facilities for
              various trainings and other public functions
            </p>

            <Link
              to={ROUTES.rentalServices}
              className="waves-effect waves-light btn red lighten-1  hoverable "
            >
              Learn More
              <i className="material-icons right">send</i>
            </Link>
          </div>
        </div>

        {/* other services end */}

        {/* supporting organizations end */}
      </div>

      {/* container end */}
    </>
  );
};

export default HomeContent;
