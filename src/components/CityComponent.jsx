import { City } from 'country-state-city';


const CityComponent = ({ countryCode = 'IN', stateCode }) => {
    const data = City.getCitiesOfState(countryCode, stateCode).map(city => ({
        value: city.name,
        displayValue: city.name
    }))
    return(
        <select>
		{
			data.map((option, index) => {
				return <option key={index} value={option.value}>{option.displayValue}</option>
			})
		}
	</select>
    )
}

export default CityComponent;