import axios from 'axios';
import { BASEURL } from './constant';

const instance = axios.create({
    baseURL: BASEURL
})

export default instance