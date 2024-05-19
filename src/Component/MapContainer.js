import React, { useRef, useEffect, useState } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google, lat, lng }) => {
  const mapRef = useRef(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (!google || !mapRef.current || lat === undefined || lng === undefined) return;

    const parsedLat = parseFloat(lat);
    const parsedLng = parseFloat(lng);

    if (isNaN(parsedLat) || isNaN(parsedLng)) {
      console.error("Invalid latitude or longitude");
      return;
    }

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: parsedLat, lng: parsedLng },
      zoom: 16 // Adjusted zoom level for closer view
    });

    const marker = new google.maps.Marker({
      position: { lat: parsedLat, lng: parsedLng },
      map: map,
      title: 'Location' // Title for the marker
    });

    const infoWindow = new google.maps.InfoWindow({
      content: 'Location' // Content for the info window
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    const geocoder = new google.maps.Geocoder();
    const latLng = { lat: parsedLat, lng: parsedLng };

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setAddress(results[0].formatted_address);
          // Update marker and info window content with the address
          marker.setTitle(results[0].formatted_address);
          infoWindow.setContent(results[0].formatted_address);
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }, [google, lat, lng]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', margin: '5px auto' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      {address && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          padding: '5px 10px',
          backgroundColor: 'white',
          borderRadius: '3px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
          zIndex: 1
        }}>
          <p>Location: {address}</p>
        </div>
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAE6dk-Oc544R2gZpwVqPQDhN0VGAjkxhw'
})(MapContainer);
