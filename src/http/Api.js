import axios from "axios";
import {API} from "./publicApi";

const $api = axios.create({
    baseURL: API
})