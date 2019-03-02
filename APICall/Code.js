import axios from 'axios';
import GetURL from './GetURL';

function VerifyCode(code) {
    return axios.get(GetURL(`/user/auth/code/${code}`));
}
export default { VerifyCode };