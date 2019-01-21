import axios from "axios"

export default {
    findConcert: function(city) {
        return axios.get(`https://api.songkick.com/api/3.0/metro_areas/${city}/calendar.json?apikey=OdSVJTsDNJy28Ekv&per_page=20`)
    }
}
