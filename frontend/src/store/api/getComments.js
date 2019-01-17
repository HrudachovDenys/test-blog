import axios from 'axios';
import config from './config.json';

export default (post_id) => {
    const options = {
        method: 'POST',
        url: config.server + '/getcomments/' + post_id
    }
    return axios(options);
}