import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import RentalServices from './pages/RentalServices';
import * as ROUTES from './util/Routes';

import axios from 'axios';
import Spinner from './components/Spinner';

const ROOT_URL =
  'https://www.master-7rqtwti-i5k2u5rqob5is.us-3.platformsh.site';

function App() {
  const [members, setMembers] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    M.AutoInit();
    setLoading(true);
    axios
      .get(`${ROOT_URL}/members`)
      .then((response) => {
        const data = response.data;
        setMembers(data);
      })
      .catch((e) => console.log(e));
    axios
      .get(`${ROOT_URL}/projects`)
      .then((response) => {
        const data = response.data;
        setProjects(data);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="center-align">
          <Spinner />
        </div>
      ) : (
        <>
          <Navbar ROUTES={ROUTES} />
          <main>
            <Route exact path={ROUTES.home}>
              <HomeContent ROUTES={ROUTES} />
            </Route>
            <Route exact path={ROUTES.aboutUs}>
              <AboutUs members={members} />
            </Route>
            <Route exact path={ROUTES.contactUs} component={ContactUs} />
            <Route exact path={ROUTES.projects}>
              <Projects projects={projects} />
            </Route>
            <Route
              exact
              path={ROUTES.rentalServices}
              component={RentalServices}
            />
          </main>
          <Footer ROUTES={ROUTES} />
        </>
      )}
    </Router>
  );
}

export default App;
