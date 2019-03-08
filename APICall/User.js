import axios from 'axios';
import GetURL from './GetURL';
import Router from 'next/router';

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
async function isLogined() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return false;
    try {
        await axios.get(GetURL('/user/auth/validate'), {
            headers: {
                "x-access-token": jwt
            }
        });
        return true;
    } catch (e) {
        return false;
    }
}
async function RedirectIfNotLogined(redirectTo="/") {
    if (!await isLogined()) {
        Router.push(redirectTo);
        return false;
    }
    return true;
}
async function RedirectIfLogined(redirectTo="/") {
    if (await isLogined()) {
        Router.push(redirectTo);
        return false;
    }
    return true;
}
export default { Register, Auth, isLogined, RedirectIfNotLogined, RedirectIfLogined }