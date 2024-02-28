import axios from "axios";

const API_KEY = "AIzaSyC3GR8HFi2dcsUBNNm5KEv3-PnfSwLhZNo";

async function getPlacesNearZipCode(zip, radius) {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${API_KEY}`;

  try {
    // Get the latitude and longitude of the given zip code
    const geocodeResponse = await axios.get(geocodeUrl);
    console.log(geocodeResponse.data);
    const location = geocodeResponse.data?.results[0]?.geometry.location;

    // Search for places within the given radius of the location
    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&key=${API_KEY}`;
    const placesResponse = await axios.get(placesUrl);

    return placesResponse.data.results;
  } catch (error) {
    console.error(error);
  }
}

export default getPlacesNearZipCode;
