import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://wk-zzx.anonymous.mobile.exp.direct:3335',
})

export default api;