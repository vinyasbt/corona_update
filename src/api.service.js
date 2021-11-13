import axios from 'axios';
export function getData() {
    return axios.get(`https://corona-api.com/countries`)
}
export function getDataByCode(code) {
    return axios.get(`https://corona-api.com/countries/${code}`)
}