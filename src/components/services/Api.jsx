import axios from "axios";
const authHeader=localStorage.getItem('token')

const url="http://localhost:8222"

const headers = {
    'Authorization': `Bearer ${authHeader}`,
    'Content-Type':'application/json'
}

//authentication


export const Authlogin=(data)=> axios.post(`${url}/api/v1/auth/authenticate`,data);
export const Authregister=(data)=> axios.post(`${url}/api/v1/auth/register`,data);

//Project
export const CreateProject=(data)=>axios.post(`${url}/api/v1/auth/project/save`,data,headers);
export const GetProject=()=>axios.get(`${url}/api/v1/auth/project/all`,headers);
export const GetUsers=()=>axios.get(`${url}/api/v1/auth/user/all-info`,headers);

//using path variable
export const GetProjectById=(id)=>axios.get(`${url}/api/v1/auth/project/getById/${id}`,headers);

//using requestparam
export const GetProjectByIdr=(id)=>axios.get(`${url}/api/v1/auth/project/getById/id=${id}`,headers);

export const UpdateProject=(id,data)=>axios.put(`${url}/api/v1/auth/project/update/${id}`,data,headers);

export const DeleteProject=(id)=>axios.put(`${url}/api/v1/auth/project/delete/${id}`,headers);
export const Feedback=(data)=>axios.post(`${url}/feedback/save`,data);

export const AddCategory=(data)=>axios.post(`${url}/api/v1/auth/category/save`,data,headers);
export const GetCategory=()=>axios.get(`${url}/api/v1/auth/category/all`,headers);
export const updateCategory=(id,data)=>axios.put(`${url}/api/v1/auth/category/update/${id}`,data,headers);
export const deleteCategory=(id)=>axios.delete(`${url}/api/v1/auth/category/delete/${id}`,headers);


