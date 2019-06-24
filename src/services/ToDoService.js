import axios from "axios";

export const toDosService = {
    getAll,
    add, 
    deleteByid
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
    return axios.post(baseUrl + 'todos', { "title": title, "description" : description })
    .then(res => {
        if(res.status == 201){ 
            debugger          
                return res.data;
        }  
            
    });
}

function deleteByid(id) {
    return axios.delete(baseUrl + 'todos/'+ id)
    .then(res => {
        if(res.status == 204){         
                return id;
        }  
            
    });
}



