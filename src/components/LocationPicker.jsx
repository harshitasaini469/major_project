import React, { useState } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position for India */
const defaultPosition = {
  lat: 20.5937,
  lng: 78.9629
};

function LocationPickerExample() {
  const [location, setLocation] = useState({
    address: 'India', // Default address set to 'India'
    position: defaultPosition
  });
  const [selectedCity, setSelectedCity] = useState(''); // State to store the selected city

  const handleLocationChange = ({ position, address }) => {
    // Set new location
    setLocation({ position, address });

    // Update the selected city when a new location is chosen
    setSelectedCity(address);
  };

  return (
    <div>
      <h1>Selected City: {selectedCity}</h1>
      <div>
        <LocationPicker
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '800px', width: '800px' }} />}
          defaultPosition={defaultPosition}
          zoom={5}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
}

export default LocationPickerExample;
