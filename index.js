const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "ed697893",
      s: "avengers"
    }
  });
  console.log(response.data);
};

fetchData();
