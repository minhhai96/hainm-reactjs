import axios from 'axios';
import {getTokenFromLocalStorage} from "../helpers"

const API_URL = 'https://sandbox-api.coinmarketcap.com/';

export const callApi = (data, options) => {
    const { endpoint, token, method } = options;
    const config = {
        method: method || 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'X-CMC_PRO_API_KEY': 'e19602a3-7e3e-435f-ada1-24472522c234'
        },
        data: method === 'POST' ? JSON.stringify({
            ...data,
            token: token || getTokenFromLocalStorage(),
        }) : undefined,
        url: `${API_URL}${endpoint}`
    }
    return axios({...config})
        .then(response => {
            return response.data
        })
        .catch((e) => {
            console.log('error', e)
        })
};