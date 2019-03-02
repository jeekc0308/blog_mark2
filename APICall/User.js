import axios from 'axios';
import GetURL from './GetURL';

function Register(username, password, nickname) {
    return axios.post(GetURL('/user'), { username, password, nickname });
}

export default { Register }