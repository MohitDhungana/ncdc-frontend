import React from 'react';
import './boardmembers.css';
import axios from 'axios';

// import mani from '../images/executives_members/mani.jpg';
// import kala_basnet from '../images/executives_members/kala_basnet.jpg';
// import nirmal_pyakurel from '../images/executives_members/nirmal_pyakurel.jpg';
// import mahendra_karki from '../images/executives_members/mahendra_karki.jpg';
// import narayani_kumari_shrestha from '../images/executives_members/narayani_kumari_shrestha.jpg';
// import navin_chandra_shrestha from '../images/executives_members/navin_chandra_shrestha.jpg';
// import netra_prasad_pokhrel from '../images/executives_members/netra_prasad_pokhrel.jpg';
// import pran_krishna from '../images/executives_members/pran_krishna.jpg';
// import pushpa_prasad_guragain from '../images/executives_members/pushpa_prasad_guragain.jpg';
// import sushma_dahal from '../images/executives_members/sushma_dahal.jpg';
// import tej_maya from '../images/executives_members/tej_maya.jpg';

import Spinner from './Spinner';

const ROOT_URL =
  'https://www.master-7rqtwti-i5k2u5rqob5is.us-3.platformsh.site';

const BoardMembers = () => {
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${ROOT_URL}/members`)
      .then((response) => {
        const data = response.data;
        setMembers(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="row section">
      <blockquote className="red-text text-darken-2">
        <h3>Board Members</h3>
      </blockquote>

      <div className="flex-container">
        {loading ? (
          <Spinner />
        ) : (
          members.map((member) => {
            const { name, designation } = member;
            const { url } = member.image.formats.thumbnail;
            // console.log(url);
            return (
              <div className="box-container">
                <div className="box-content">
                  <img src={`${ROOT_URL}${url}`} alt="" className="box-img" />
                  <p>
                    {name} <br />
                    {designation}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BoardMembers;
