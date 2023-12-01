import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function homeClientsApi(cod_cuenta, cod_cliente, usuario) {
    return axios.post(`${baseURL}/home/clientes`,
        {
            cod_cuenta,
            cod_cliente,
            usuario
        })
}