import axios from "axios";

const MAPBOX_API_KEY = 'pk.eyJ1IjoiaGFyc2hpdGExOTAxIiwiYSI6ImNsbXo1bDV4azBrM3Yyam56bmgxY3Jjc2oifQ.fq-XEQEfLYVOsnhPC0Ye5w'; // Replace with your Mapbox API key
async function convertCityToCoordinates(city) {
    try {
        const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json`, // Encode the city name
            {
                params: {
                    access_token: MAPBOX_API_KEY,
                    types: 'place',
                },
            }
        );

        if (response.data && response.data.features && response.data.features.length > 0) {
            // Extract the coordinates from the response
            const coordinates = response.data.features[0].geometry.coordinates;

            return ([
                coordinates[1], // Latitude
                coordinates[0], // Longitude
            ]);
        } else {
            // City not found or no coordinates available
            return null;
        }
    } catch (error) {
        console.error('Error converting city to coordinates:', error);
        return null;
    }
}

export default convertCityToCoordinates;