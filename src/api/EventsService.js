import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllEventsApi(cod_cuenta, cod_cliente) {
    return axios.post(`${baseURL}/allEvents`,
        {
            cod_cuenta,
            cod_cliente
        })
}
