import axios from "axios";

export default {
  // Gets all bands
  getBands: function(value) {
    //console.log("County in API UTIL: ", value);
    return axios.get("/api/bands/", { params: { county: value } });
    //return axios.get("/api/bands/");
  },
  findConcert: function(city) {
    return axios.get(
      `https://api.songkick.com/api/3.0/metro_areas/${city}/calendar.json?apikey=OdSVJTsDNJy28Ekv&per_page=20`
    );
  }
  // getGoogle: function(value) {
  //   //console.log("County in API UTIL: ", value);
  //   return axios.get("/api/google");
  //   //return axios.get("/api/bands/");
  // }
};
