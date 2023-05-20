import axios from 'axios';
const baseUrl = "https://ilearn-api.azurewebsites.net/api/"

export const APICalls = {
    RegisterUser: RegisterUser,
    Login: Login,
}

async function RegisterUser(name, phone, email, password) {
    try {
        const response = await axios.post(baseUrl + "students", { name, phone, email, password });
        console.log(response);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function Login(email, password) {
    try {
        const response = await axios.post(baseUrl + "login", { email, password });
        console.log(response);
        return response.data.accessToken;
    } catch (error) {
        console.log(error);
        throw error;
    }
}