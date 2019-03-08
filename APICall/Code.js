import axios from 'axios';
import GetURL from './GetURL';

function VerifyCode(code) {
    return axios.get(GetURL(`/user/auth/code/${code}`));
}
async function GenerateCode() {
    try {
        let jwt = localStorage.getItem('jwt');
        if (!jwt) return false;
        let fetch = await axios.post(GetURL('/user/auth/code'), null, {
            headers: {
                'x-access-code': jwt
            }
        });
        if (!fetch.data.success) return false;
        return fetch.data.code;
    } catch (e) {
        return false;
    }
}
export default { VerifyCode, GenerateCode };