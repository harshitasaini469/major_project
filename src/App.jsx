import { useState ,useEffect} from "react";
import CityComponent from "./components/CityComponent";
import StateComponent from "./components/StateComponent";
import LocationPickerExample from "./components/LocationPicker";

function App() {
  const [stateCode, setStateCode] = useState('');
  const [city,setCity]=useState('')
  useEffect(() => {
    console.log(stateCode); // Log the updated state value
  }, [stateCode]); // Only run this effect when selectedState changes

  const handleStateChange = (newState) => {
    setStateCode(newState);
    console.log(stateCode)
  };
  const handleCityChange=(newCity)=>{
    setCity(newCity)
    console.log(city)
  }

  return (
    <div className="App ">
      <div className="flex justify-between font-serif w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center gap-4 items-center w-[35%] text-lg">
      <StateComponent handleStateChange={handleStateChange} />
      <CityComponent stateCode={stateCode} handleCityChange={handleCityChange} />
      </div>
      <div className="flex justify-center  border">
        <LocationPickerExample city={city}/>
      </div>
      </div>
    
     
    </div>
  );
}

export default App;
