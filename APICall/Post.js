import axios from 'axios';
import GetURL from './GetURL';

async function UploadPost(post, title, url) {
    try {
        let fetch = await axios.post(GetURL('/post'), {
            post,
            title,
            url
        }, {
                headers: {
                    'x-access-token': localStorage.getItem('jwt')
                }
            });
        return fetch.data;
    } catch (e) {
        if (e.response) {
            return { success: false, message: e.response.data.message }
        }
        return { success: false, message: e.message };
    }
}

export default { UploadPost }