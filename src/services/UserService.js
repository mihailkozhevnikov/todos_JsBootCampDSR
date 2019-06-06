import axios from "axios";

export const userService = {
    login,
    logout   
};

const baseUrl= 'http://localhost:3000/api/v1/';

function login(username, password) {

    return axios.post(baseUrl + 'login', {login: username, password: password})
    .then(res => {
        debugger
        if(res.status == 200){
           localStorage.setItem('user', JSON.stringify(res.data));
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


