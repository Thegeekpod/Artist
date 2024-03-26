import React, { useRef, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const MapContainer = ({ google, lat, lng }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!google || !mapRef.current || lat === undefined || lng === undefined) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: parseFloat(lat), lng: parseFloat(lng) },
      zoom: 14
    });

    new google.maps.Marker({
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
      map: map
    });
  }, [google, lat, lng]);

  return (
    <div style={{ width: '100%', height: '430px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAE6dk-Oc544R2gZpwVqPQDhN0VGAjkxhw'
})(MapContainer);
