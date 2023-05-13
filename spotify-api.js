const axios = require("axios");
let spotify_playlist_id = "6yd5pnsXiR76dZkug2vAc0";

async function main(spotify_playlist_id) {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/playlist_tracks/",
    params: {
      id: spotify_playlist_id,
      offset: "0",
      limit: "100",
    },
    headers: {
      "X-RapidAPI-Key": "b84cf441f4mshc84121503531c65p1433dajsnd23a147b4717",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  console.log(spotify_playlist_id);

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }
}

main(spotify_playlist_id);
