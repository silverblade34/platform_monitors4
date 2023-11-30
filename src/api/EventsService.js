import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function notificationsAccountApi() {
    return axios.post(`${baseURL}/notifications/Account`,
        {
            "cod_cuenta": "SY001",
            "cod_cliente": "SI001",
            "usuario": "signia",
            "codigo": "00000"
        })
}