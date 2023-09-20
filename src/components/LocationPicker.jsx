import React, { useState } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position for India */
const defaultPosition = {
  lat: 20.5937,
  lng: 78.9629
};

function LocationPickerExample() {
  const [location, setLocation] = useState({
    address: '', // Default address set to 'India'
    position: defaultPosition
  });

  const handleLocationChange = ({ position, address }) => {
    // Set new location
    setLocation({ position, address });
  };

  return (
    <div>
      <div>
        <LocationPicker
          containerElement={<div className='h-[100%]' />}
          mapElement={<div className='w-[800px] h-[700px]' />}
          defaultPosition={defaultPosition}
          zoom={5}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
}

export default LocationPickerExample;
