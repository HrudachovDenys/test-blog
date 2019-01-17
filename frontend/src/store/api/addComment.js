import axios from 'axios';
import config from './config.json';

export default (data) => {
    const options = {
        method: 'POST',
        url: config.server + '/addcomment',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify(data)
    }
    return axios(options);
}