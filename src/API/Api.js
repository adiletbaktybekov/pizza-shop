import axios from "axios";

const API = axios.create({
    baseURL: 'https://motion.herokuapp.com/'
})

export default API;