import React from 'react';
import './boardmembers.css';

import mani from '../images/executives_members/mani.jpg';
import kala_basnet from '../images/executives_members/kala_basnet.jpg';
import nirmal_pyakurel from '../images/executives_members/nirmal_pyakurel.jpg';
import mahendra_karki from '../images/executives_members/mahendra_karki.jpg';
import narayani_kumari_shrestha from '../images/executives_members/narayani_kumari_shrestha.jpg';
import navin_chandra_shrestha from '../images/executives_members/navin_chandra_shrestha.jpg';
import netra_prasad_pokhrel from '../images/executives_members/netra_prasad_pokhrel.jpg';
import pran_krishna from '../images/executives_members/pran_krishna.jpg';
import pushpa_prasad_guragain from '../images/executives_members/pushpa_prasad_guragain.jpg';
import sushma_dahal from '../images/executives_members/sushma_dahal.jpg';
import tej_maya from '../images/executives_members/tej_maya.jpg';

const BoardMembers = () => {
  return (
    <div className="row section">
      <blockquote className="red-text text-darken-2">
        <h3>Board Members</h3>
      </blockquote>

      <div className="flex-container">
        <div className="box-container">
          <div className="box-content">
            <img src={mani} alt="" className="box-img" />
            <p>
              Mani Dhungana <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={kala_basnet} alt="" className="box-img" />
            <p>
              Kala Basnet <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={nirmal_pyakurel} alt="" className="box-img" />
            <p>
              Nirmal Pyakurel <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={mahendra_karki} alt="" className="box-img" />
            <p>
              Mahendra Karki <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={narayani_kumari_shrestha} alt="" className="box-img" />
            <p>
              Narayani Kumari Shrestha <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={navin_chandra_shrestha} alt="" className="box-img" />
            <p>
              Navin Chandra Shrestha
              <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={netra_prasad_pokhrel} alt="" className="box-img" />
            <p>
              Netra Prasad Pokhrel <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={pran_krishna} alt="" className="box-img" />
            <p>
              Pran Krishna Ghos <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={pushpa_prasad_guragain} alt="" className="box-img" />
            <p>
              Pushpa Prasad Guragain
              <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={sushma_dahal} alt="" className="box-img" />
            <p>
              Sushma Dahal <br />
              President
            </p>
          </div>
        </div>

        <div className="box-container">
          <div className="box-content">
            <img src={tej_maya} alt="" className="box-img" />
            <p>
              Tej Maya Gurung <br />
              President
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
