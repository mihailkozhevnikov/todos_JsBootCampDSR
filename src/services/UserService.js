import axios from "axios";


export const userService = {
    login,
    logout,
    getAll,
    me
};

const baseUrl= 'http://localhost:3000/api/v1/';

function login(username, password) {

    return axios.post(baseUrl + 'login', {login: username, password: password})
    .then(res => {
           localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;     
    });
}

function getAll() {

    return axios.get(baseUrl + 'users')
    .then(res => {       
                return res.data;        
    });
}

function logout() {
    return axios.post(baseUrl + 'logout')
    .then(res => {
            return res.data;          
    });
}
    function me() {
        return axios.get(baseUrl + 'me')
        .then(res => {
                return res.data;          
        });
    }