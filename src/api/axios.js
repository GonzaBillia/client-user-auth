import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://backend-user-auth-16xe.onrender.com/api',
    withCredentials: true
})

export default instance