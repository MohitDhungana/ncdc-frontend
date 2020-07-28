import React from 'react';

const Maps = () => {
  return (
    <iframe
      title="NCDC"
      src="https://maps.google.com/maps?q=26.560272, 88.080483&z=15&output=embed"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{ border: '1px solid #f1f1f1' }}
    ></iframe>
  );
};

export default Maps;
