import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 26.560272,
  lng: 88.080483,
};

const mapContainerStyle = {
  width: '70vw',
  height: '70vh',
};

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return 'error loading maps';
  if (!isLoaded) return 'loading maps';

  return (
    <div className="row section container">
      <div className="center-align">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
        ></GoogleMap>
      </div>
    </div>
  );
};

export default React.memo(GoogleMaps);
