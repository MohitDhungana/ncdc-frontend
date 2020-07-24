import React from 'react';
import AboutUsContent from '../components/AboutUsContent';
import BoardMembers from '../components/BoardMembers';

const AboutUs = ({ members }) => {
  return (
    <div className="container">
      <AboutUsContent />
      <BoardMembers members={members} />
    </div>
  );
};

export default AboutUs;
