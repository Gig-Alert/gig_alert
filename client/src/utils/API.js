import axios from "axios";

export default {
  // Gets all bands
  getBands: function() {
    return axios.get("/api/bands");
  }
};
