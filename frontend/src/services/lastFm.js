const apiKey = "35bb8e8e706ac32ff3a2cf67acd2349e";
const apiSecret = "9e2c3cba1f56d6efdcb5dee87c884c95";
const apiUrl = "http://ws.audioscrobbler.com/2.0";

fetch(
  "http://ws.audioscrobbler.com/2.0?method=artist.getinfo&artist=curtis+mayfield&api_key=`${apiKey}'&format=json"
)
  .then((response) => {
    if (response.ok) {
      //console.log(response.json());
      return response.json();
    }
  })
  .then((data) => console.log(data))
  .catch(console.log("Error!!!!!"));
