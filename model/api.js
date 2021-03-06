const axios = require('axios')

const server = 'https://desappunq.herokuapp.com'
//const server = 'http://localhost:5003/api'

const API ={
    get: path => axios.get(`${server}${path}`).then(response => response),
    post: (path, body) => axios.post(`${server}${path}`, body).then(res => res),
    put: (path, body) => axios.put(`${server}${path}`, body).then(console.log(body))
}
module.exports = API;
