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

function App() {
  React.useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <>
        <Navbar ROUTES={ROUTES} />
        <main>
          <Route exact path={ROUTES.home}>
            <HomeContent ROUTES={ROUTES} />
          </Route>
          <Route exact path={ROUTES.aboutUs} component={AboutUs} />
          <Route exact path={ROUTES.contactUs} component={ContactUs} />
          <Route exact path={ROUTES.projects} component={Projects} />
          <Route
            exact
            path={ROUTES.rentalServices}
            component={RentalServices}
          />
        </main>
        <Footer ROUTES={ROUTES} />
      </>
    </Router>
  );
}

export default App;
