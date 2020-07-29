import React from 'react';
import './board-members.css';

const ROOT_URL =
  'https://www.master-7rqtwti-i5k2u5rqob5is.us-3.platformsh.site';

const BoardMembers = ({ members }) => {
  return (
    <div className="container">
      <div className="row section">
        <blockquote className="red-text text-darken-2">
          <h3>Board Members</h3>
        </blockquote>

        <div className="flex-container">
          {members.map((member) => {
            const { name, designation, id } = member;
            const { url } = member.image.formats.thumbnail;

            return (
              <div className="box-container" key={id}>
                <div className="box-content center-align">
                  <img src={`${ROOT_URL}${url}`} alt="" className="box-img" />
                  <div className="flex">
                    <div className="flex-item">
                      <span className="font-big">{name}</span>
                    </div>
                    <div className="flex-item">
                      <span className="">{designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
