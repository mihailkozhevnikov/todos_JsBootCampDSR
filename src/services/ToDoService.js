import axios from "axios";

export const toDosService = {
    getAll,
    add
};

const baseUrl= 'http://localhost:3000/api/v1/';

function getAll() {
    return axios.get(baseUrl + 'todos')
    .then(res => {
        if(res.status == 200){           
                return res.data;
        }  
        if(res.status == 401){           
            localStorage.removeItem('user');
    }             
    });
}

function add(title,description) {
    debugger
    return axios.post(baseUrl + 'todos', { "title": title, "description" : description })
    .then(res => {
        if(res.status == 201){           
                return res.data;
        }  
            
    });
}


