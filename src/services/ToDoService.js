import axios from "axios";

export const toDosService = {
    getAll,
    add, 
    deleteByid,
    getToDoByid,
    updateToDo
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
                return res.data;       
    });
}

function updateToDo(id, title,description) {
    return axios.put(baseUrl + 'todos/'+ id, { "title": title, "description" : description })
    .then(res => {       
          return res.data;            
    });
}

function deleteByid(id) {
    return axios.delete(baseUrl + 'todos/'+ id)
    .then(res => {     
                return id;        
    });
}

function getToDoByid(id) {
    return axios.get(baseUrl + 'todos/'+ id)
    .then(res => {    
                return res.data;            
    });
}



