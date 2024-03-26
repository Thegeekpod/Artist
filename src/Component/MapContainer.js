import React, { useRef, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const MapContainer = ({ google, latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!google || !mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { latitude: latitude , longitude: longitude },
      zoom: 14
    });

    new google.maps.Marker({
      position: { latitude: latitude , longitude: longitude },
      map: map
    });
  }, [google, latitude, longitude]);

  return (
    <div style={{ width: '100%', height: '430px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAE6dk-Oc544R2gZpwVqPQDhN0VGAjkxhw'
})(MapContainer);
