import React from 'react';

const Projects = ({ projects }) => {
  const complete = projects.filter((item) => item.is_complete === true);
  const incomplete = projects.filter((item) => item.is_complete === false);

  console.log(complete);
  console.log(incomplete);
  return (
    <div className="container">
      <div className="section">
        <blockquote className="red-text text-darken-2">
          <h3>Ongoing Projects</h3>
        </blockquote>
        <table className="highlight">
          <tbody>
            {incomplete.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.project_name}</td>
              </tr>
            ))}
          </tbody>
        </table>{' '}
      </div>

      <div className="section">
        <blockquote className="red-text text-darken-2">
          <h3>Completed Projects</h3>
        </blockquote>
        <table className="highlight">
          <tbody>
            {complete.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.project_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
