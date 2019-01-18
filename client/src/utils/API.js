import axios from "axios"

export default {
    findConcert: function() {
        return axios.get("https://api.songkick.com/api/3.0/metro_areas/9426/calendar.json?apikey=&per_page=10")
    }
}