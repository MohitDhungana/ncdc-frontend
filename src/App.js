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

function App() {
  React.useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <>
        <Navbar />
        <main>
          <Route exact path="/" component={HomeContent} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/rental-service" component={RentalServices} />
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
