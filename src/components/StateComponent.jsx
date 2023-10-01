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
    <div className='flex flex-col gap-2'>
      <p>Select State : </p>
      <div>
      <select onChange={handleChange}className='w-96 px-2 border'>
      <option value="">Select a State</option>
      {data.map((option, index) => (
        <option key={index} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
      </div>
      
    </div>
   
  );
};

export default StateComponent;

