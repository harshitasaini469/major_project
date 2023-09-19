import { useState ,useEffect} from "react";
import CityComponent from "./components/CityComponent";
import StateComponent from "./components/StateComponent";
import LocationPickerExample from "./components/LocationPicker";

function App() {
  const [stateCode, setStateCode] = useState('');
  useEffect(() => {
    console.log(stateCode); // Log the updated state value
  }, [stateCode]); // Only run this effect when selectedState changes

  const handleStateChange = (newState) => {
    setStateCode(newState);
  };

  return (
    <div className="App flex justify-center">
      <div>
      <StateComponent handleStateChange={handleStateChange} />
      <CityComponent stateCode={stateCode} />
      </div>
      <div>
        <LocationPickerExample/>
      </div>
     
    </div>
  );
}

export default App;
