import axios from '../https.js';
import store from '@/store';

const flagUrl = window.location.href.includes('localhost')

const baseUrl = flagUrl
  ? 'http://localhost:666/'
  : process.env.VUE_APP_BASE_API;

const GET = (url, params = {}, headers = {}) =>
  axios
    .get(`${baseUrl}${url}`, {
      params,
      headers: {
        ...headers,
        corpid: store.state.userInfo.corpid,
        userid: store.state.userInfo.userid,
      },
    })
    .then(res => res.data);

const POST = (url, params = {}, headers = {}) =>
  axios
    .post(
      `${baseUrl}${url}`,
      params,
      headers && {
        headers: {
          ...headers,
          corpid: store.state.userInfo.corpid,
          userid: store.state.userInfo.userid,
        },
      },
    )
    .then(res => res.data);

export { GET, POST };
