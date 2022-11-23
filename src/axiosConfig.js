import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.8.109:8000/'
axios.defaults.headers.common = {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`}

export default axios