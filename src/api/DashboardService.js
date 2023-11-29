import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function homeClientsApi() {
    return axios.post(`${baseURL}/home/clientes`,
        {
            "cod_cuenta": "ON001",
            "cod_cliente": "DU001",
            "usuario": "duragas"
        })
}