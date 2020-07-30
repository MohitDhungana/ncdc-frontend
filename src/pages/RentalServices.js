import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const ROOT_URL =
  'https://www.master-7rqtwti-i5k2u5rqob5is.us-3.platformsh.site';

const RentalServices = ({ rentals }) => {
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const rooms = rentals.filter((item) => item.type === 'rooms');
  const conferences = rentals.filter((item) => item.type === 'conference_room');

  return (
    <div className="gray-background">
      <div className="container">
        {/* <div className="row section">
          NCDC regularly rents out its facilities to various organizations to
          conduct programs or conferences in Bhadrapur and to individuals who
          require to use our comfortable rooms to rest.
        </div>

        <div className="row section">
          <blockquote className="red-text text-darken-2">
            <h3>Rooms Available at NCDC</h3>
          </blockquote>
          {rooms.map((item) => {
            const { url } = item.image;
            return (
              <div key={item.id} className="col m3 s6 box-margin">
                <img
                  className="materialboxed"
                  width="100%"
                  src={`${ROOT_URL}${url}`}
                  alt="img"
                />
              </div>
            );
          })}
        </div>

        <div className="row section">
          <blockquote className="red-text text-darken-2">
            <h3>Conference Hall at NCDC</h3>
          </blockquote>
          {conferences.map((item) => {
            const { url } = item.image;
            return (
              <div key={item.id} className="col m3 s6 box-margin">
                <img
                  className="materialboxed"
                  width="100%"
                  src={`${ROOT_URL}${url}`}
                  alt="img"
                />
              </div>
            );
          })}
        </div> */}

        <div className="row section ">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Item Name</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row section">
          <blockquote className="red-text text-darken-2">
            <h3>Training Facility and Seminar Conferences</h3>
          </blockquote>
          {conferences.map((item) => {
            const { url } = item.image;
            return (
              <div key={item.id} className="col m3 s6 box-margin">
                <img
                  className="materialboxed"
                  width="100%"
                  src={`${ROOT_URL}${url}`}
                  alt="img"
                />
              </div>
            );
          })}
        </div>

        <div className="row section">
          <blockquote className="red-text text-darken-2">
            <h3>Lodging Facility</h3>
          </blockquote>
          {rooms.map((item) => {
            const { url } = item.image;
            return (
              <div key={item.id} className="col m3 s6 box-margin">
                <img
                  className="materialboxed"
                  width="100%"
                  src={`${ROOT_URL}${url}`}
                  alt="img"
                />
              </div>
            );
          })}
        </div>
        <div className="row section">
          <blockquote className="red-text text-darken-2">
            <h3>Social Events</h3>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default RentalServices;
