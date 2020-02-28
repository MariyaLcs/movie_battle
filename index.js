const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "ed697893",
      s: searchTerm
    }
  });
  console.log(response.data);
};
const input = document.querySelector("input");

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener("input", debounce(onInput), 1000);
