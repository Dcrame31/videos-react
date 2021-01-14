import axios from 'axios';

const KEY = 'AIzaSyAgwdWssyknW9u3pV4O7SEt916RhK7AG_o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});