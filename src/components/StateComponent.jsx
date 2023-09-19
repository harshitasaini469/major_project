import { State } from 'country-state-city';

const StateComponent = ({ countryCode = 'IN', handleStateChange }) => {
  const data = State.getStatesOfCountry(countryCode).map((state) => ({
    value: state.isoCode,
    displayValue: `${state.name} - ${state.isoCode}`,
  }));

  const handleChange = (event) => {
    const selectedStateValue = event.target.value;
    handleStateChange(selectedStateValue);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a State</option>
      {data.map((option, index) => (
        <option key={index} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
};

export default StateComponent;
