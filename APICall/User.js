import axios from 'axios';
import GetURL from './GetURL';

function Register(username, password, nickname) {
    return axios.post(GetURL('/user'), { username, password, nickname });
}
async function Auth(username, password) {
    try {
        let fetch = await axios.post(GetURL('/user/auth'), {username, password});
        if (!fetch.data.success)
            return fetch.data;
        localStorage.setItem('jwt', fetch.data.accessToken);
        return {
            success: true
        };
    } catch (e) {
        return {
            success: false,
            message: e.response ?  e.response.data.message : e.message
        }
    }
}
function isLogined() {

}
export default { Register, Auth }