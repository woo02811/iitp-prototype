import axios from "axios";

const AuthorizationAxios = axios.create({
  // baseURL:'https://jsonplaceholder.typicode.com/users'
})
AuthorizationAxios.defaults.headers.common['Authorization'] = 'TEST';

export default AuthorizationAxios;
