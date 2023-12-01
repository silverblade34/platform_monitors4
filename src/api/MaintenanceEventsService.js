import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function listEventsApi(cod_cuenta, cod_cliente) {
    return axios.get(`${baseURL}/allEvents`,
        {
            cod_cuenta,
            cod_cliente
        })
}