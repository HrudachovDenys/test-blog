import axios from 'axios';
import config from './config.json';

export default () => {
    const options = {
        method: 'POST',
        url: config.server + '/getposts'
    }
    return axios(options);
}