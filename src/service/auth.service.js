import { API_END_POINTS } from "../utils/constants";
import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/"
});

export const login = async (payload) => {
    try {
        const { data } = await axiosInstance.post(API_END_POINTS.LOGIN, payload);
        return data;
    } catch (err) {
        throw err;
    }
};

export const signup = async (payload) => {
    try {
        const { data } = await axiosInstance.post(API_END_POINTS.REGISTER, payload);
        return data;
    } catch (err) {
        throw err;
    }
};

export const generateOtp = async (payload) => {
    try {
        const { data } = await axiosInstance.get(API_END_POINTS.OTP, { headers: { Authorization: localStorage.getItem("authToken") } });
        return data;
    } catch (err) {
        throw err;
    }
};