import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-type": "application/json",
        "Authorization": `${localStorage.getItem('token') || ''} `
    }
});

export default instance;