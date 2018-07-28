import axios from 'axios'

//axios.defaults.baseURL = 'https://vjobs.herokuapp.com';
axios.defaults.baseURL = 'http://192.168.15.4:8080';

const getJobs = () => {
    return axios.get('/jobs')
    .then( res => res.data)
    .catch( err => console.log(err))
    
}

const removeJob = ( id ) => {
    return axios.delete(`/jobs/${id}`)
    .then( res => res.data)
    .catch( err => console.log(err))
}

module.exports = {
    getJobs
}
