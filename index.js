const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "ed697893",
      s: searchTerm
    }
  });
  console.log(response.data);
};

let timeoutId;

const onInput = event => {
  setTimeout(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    fetchData(event.target.value);
  }, 1000);
};

const input = document.querySelector("input");
input.addEventListener("input", onInput);
