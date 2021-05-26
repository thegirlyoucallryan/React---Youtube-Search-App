import axios from'axios'




const KEY = 'AIzaSyBDpkQrE4nNeuX6VJszSqfd4ubZG4P-XtI'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 8,
        key: KEY
    }

});
