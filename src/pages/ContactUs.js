import React from 'react';
import Maps from '../components/Maps';
import Contacts from '../components/Contacts';

const ContactUs = () => {
  return (
    <div className="gray-background ">
      <div className="container">
        <div className="row section" style={{ marginTop: '2em' }}>
          <blockquote className="red-text text-darken-2 home-title">
            <h3 className="home-title">Connect With Us</h3>
          </blockquote>
          <div className="col s12 m4">
            <Contacts />
          </div>
          <div className="col s12 m8">
            <div className="map-container">
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
