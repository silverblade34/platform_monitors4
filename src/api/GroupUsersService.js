import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllGroupsUsersApi(cod_cuenta, cod_cliente) {
    return axios.post(`${baseURL}/allGroupsUsers`,
        {
            cod_cuenta,
            cod_cliente
        })
}

export function createEventsApi(data) {
    return axios.post(`${baseURL}/createEvents`,data)
}

export function deleteEventsApi(data) {
    return axios.post(`${baseURL}/deleteEvents`,data)
}

export function updateEventsApi(data) {
    return axios.put(`${baseURL}/editEvents`,data)
}