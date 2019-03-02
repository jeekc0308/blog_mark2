import { apiServer } from '../config.json';

export default (uri) => {
    return apiServer.replace(/\/$/, '') + '/' + uri.replace(/^\//, '');
}