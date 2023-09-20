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
    <div className="App flex flex-col  items-center justify-center  h-[100%] font-serif">
      <p className="text-2xl p-5">OptiMillet</p>
      <div className="flex justify-between  w-full border p-2">
      <div className="flex flex-col justify-center gap-4 items-center w-[45%]  text-lg">
      <StateComponent handleStateChange={handleStateChange} />
      <CityComponent stateCode={stateCode} handleCityChange={handleCityChange} />
      </div>
      <div className="flex justify-center  ">
        <LocationPickerExample city={city}/>
      </div>
      </div>
    
     
    </div>
  );
}

export default App;
