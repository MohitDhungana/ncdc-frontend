import React from 'react';
import './boardmembers.css';

import mani from '../images/mani.jpg';

const BoardMembers = () => {
  return (
    <div className="row section">
      <blockquote className="red-text text-darken-2">
        <h3>Board Members</h3>
      </blockquote>

      <div class="row">
        <div class="col s6 m4 l3">
          <div class="card">
            <div class="card-image">
              <img src={mani} alt="profile-pic" />
            </div>
            <div class="card-content center-align">
              <p>
                Mani Dhungana <br />
                President
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
