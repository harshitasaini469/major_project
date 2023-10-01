import { City } from "country-state-city";

const CityComponent = ({ countryCode = "IN", stateCode, handleCityChange }) => {
  const data = City.getCitiesOfState(countryCode, stateCode).map((city) => ({
    value: city.name,
    displayValue: city.name,
  }));
  const handleChange = (event) => {
    const setCityValue = event.target.value;
    handleCityChange(setCityValue);
  };
  return (
    <div className={`flex flex-col gap-2 `}>
      <p>Select City : </p>
      <div>
        <select
          onChange={handleChange}
          className={`w-96 px-2 border ${
            !stateCode ? "disabled cursor-not-allowed" : ""
          }`}
          disabled={!stateCode}
        >    <option value="">Select a State</option>

          {data.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CityComponent;
