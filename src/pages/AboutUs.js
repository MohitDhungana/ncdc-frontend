import React from 'react';
import AboutUsContent from '../components/AboutUsContent';
import BoardMembers from '../components/BoardMembers';

const AboutUs = ({ members }) => {
  return (
    <div className="gray-background">
      <div className="container">
        <AboutUsContent />
        <BoardMembers members={members} />
      </div>
    </div>
  );
};

export default AboutUs;
