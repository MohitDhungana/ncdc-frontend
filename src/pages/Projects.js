import React from 'react';

const Projects = ({ projects }) => {
  const complete = projects.filter((item) => item.is_complete === true);
  const incomplete = projects.filter((item) => item.is_complete === false);

  return (
    <div className="gray-background">
      <div className="container">
        <div className="section">
          <blockquote className="red-text text-darken-2">
            <h3>Current Programmes</h3>
          </blockquote>

          {incomplete.map((item) => (
            <ul className="browser-default" key={item.id}>
              <li className="browser-default">
                <span className="font-big">{item.title}</span>:{' '}
                {item.description}
              </li>
            </ul>
          ))}
        </div>

        <div className="section">
          <blockquote className="red-text text-darken-2">
            <h3>Past Projects</h3>
          </blockquote>

          {complete.map((item) => (
            <ul className="browser-default" key={item.id}>
              <li className="browser-default">
                <span className="font-big">{item.title}</span>:{' '}
                {item.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
