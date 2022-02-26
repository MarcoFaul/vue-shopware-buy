import axios from 'axios';

//@TODO: create variable
//@TODO: save token to session
const API_ACCESS_KEY = 'SWSCA7OYXREKDYHBT_F7OBE1VG';

const axiosConfig = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/store-api/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'sw-access-key': API_ACCESS_KEY
    }
});

export default axiosConfig;
