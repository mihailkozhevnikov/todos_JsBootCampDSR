import axios from "axios";


export const userService = {
    login,
    logout,
    getAll
};

const baseUrl= 'http://localhost:3000/api/v1/';

function login(username, password) {

    return axios.post(baseUrl + 'login', {login: username, password: password})
    .then(res => {
        if(res.status == 200){
           localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;
        }              
    });
}

function getAll() {

    return axios.get(baseUrl + 'users')
    .then(res => {
        if(res.status == 200){          
                return res.data;
        }              
    });
}

function logout() {
    // remove user from local storage to log user out
    axios.post(baseUrl + 'logout')
    .then(res => {
        if(res.status == 200){
            localStorage.removeItem('user');
            return true;
        }              
    });
    
}


