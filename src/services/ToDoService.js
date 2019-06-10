import axios from "axios";

export const toDosService = {
    getTodos,
};

const baseUrl= 'http://localhost:3000/api/v1/';

function getTodos() {
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


