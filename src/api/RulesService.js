import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllRulesApi(cod_cuenta, cod_cliente) {
    return axios.post(`${baseURL}/allRoules`,
        {
            cod_cuenta,
            cod_cliente
        })
}

export function createRulesApi(data) {
    return axios.post(`${baseURL}/createRoules`, data)
}

export function updateAnswersApi(data) {
    return axios.put(`${baseURL}/editResponse`, data)
}

export function deleteAnswersApi(data) {
    return axios.post(`${baseURL}/deleteResponse`, data)
}