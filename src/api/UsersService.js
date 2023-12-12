import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllClientsToAccountApi(cod_cuenta) {
    return axios.post(`${baseURL}/listAccounts`,
        {
            cod_cuenta,
        })
}

export function findAllClientsApi(cod_cuenta, empresa) {
    return axios.post(`${baseURL}/listClients`,
        {
            cod_cuenta,
            empresa
        })
}