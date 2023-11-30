import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function notificationsAccountApi() {
    return axios.post(`${baseURL}/notifications/Account`,
        {
            "cod_cuenta": "ON001",
            "cod_cliente": "DU001",
            "usuario": "duragas",
            "codigo": "00000"
        })
}