import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllClientsToAccountApi(cod_cuenta) {
    return axios.post(`${baseURL}/listAccounts`,
        {
            cod_cuenta,
        })
}