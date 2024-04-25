import axios from "axios";
export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=3ede6930&app_key=7c7bac9f7c5b746230a56dcea8c12cff`;

  const response = await axios.get(url);

  const data = await response.data;
  console.log(data);

  return data[0];
}
