import axios from "axios";

export const API = "https://motion-food.herokuapp.com/"

export const publicApi = axios.create({
    baseURL: API
})