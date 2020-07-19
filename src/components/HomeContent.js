import React from 'react';
import ncdc from '../images/ncdc.jpg';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const HomeContent = () => {
  React.useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <div className="row">
        <div className="parallax-container">
          <div className="parallax">
            <img className="responsive-img hero-img" src={ncdc} alt="ncdc" />
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* container start */}
      <div className="container">
        {/* center moto start */}
        <div className="row ">
          <h3 className="center-align">
            Uplifting the rural, illiterate, poor and underprivileged people of
            Nepal with a special focus on women and children
          </h3>
        </div>
        <hr />

        {/* about us start */}
        <div className="row section">
          <div className="col s12 l6">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="about us"
              className="responsive-img"
            />
          </div>
          <div className="col s12 l6 ">
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
            <Link
              to="/aboutus"
              className="waves-effect waves-light btn deep-purple  hoverable"
            >
              Read More
              <i className="material-icons right">send</i>
            </Link>
          </div>
        </div>
        {/* about us end */}
      </div>

      {/* objectives start */}
      <div className="row deep-purple lighten-1 ">
        <div className="container container-padding">
          <div className="col s12 l6 white-text ">
            <h4 className="center-align">Our Objectives</h4>

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
              to="/projects"
              className="waves-effect waves-light btn white black-text hoverable btn-margin"
            >
              View Our Projects
              <i className="material-icons right">send</i>
            </Link>
          </div>
          <div className="col l6 hide-on-med-and-down  ">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="mission"
              className="responsive-img"
            />
          </div>
        </div>
      </div>

      {/* objective end */}

      {/* supporting organizations start */}
      <div className="row  center-align">
        <h3 className="">Supporting Organizations</h3>
        <div className="container section">
          <div className="col l3">The Asia Foundation</div>
          <div className="col l3">PACT</div>
          <div className="col l3">CECI/CIDA</div>
          <div className="col l3">UNICEF</div>
          <div className="col l3">World Education</div>
          <div className="col l3">CVICT/ DFID</div>
          <div className="col l3">NGO forum</div>
          <div className="col l3">USAID</div>
          <div className="col l3">Lutheran World Federation</div>
          <div className="col l3">CREHPA</div>
          <div className="col l3">AusAID</div>
          <div className="col l3">Plannet Enfant</div>
          <div className="col l3">NFHP Nepal Family Health Program</div>
          <div className="col l3">
            NYOF Nepalese Youth Opportunity Foundation
          </div>
          <div className="col l3">Local Government of Nepal</div>
        </div>
      </div>
      {/* supporting organizations end */}

      {/* other services start */}
      <div className="row section">
        <div className="container center-align">
          <hr />
          <div className="row">
            <h5>
              NCDC generates its operational cost by renting its facilities for
              various trainings and other public functions
            </h5>
          </div>
          <div className="row ">
            <Link
              to="/rental-services"
              className="waves-effect waves-light btn deep-purple  hoverable "
            >
              Learn More
              <i className="material-icons right">send</i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
