import axios from 'axios';
import config from './config.json';

export default (id) => {
    const options = {
        method: 'POST',
        url: config.server + '/getpost/' + id
    }
    return axios(options);
}