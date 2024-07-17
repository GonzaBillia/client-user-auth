import axios from './axios'

export const getTasksReq = () => axios.get('/tasks')
export const getTaskReq = id => axios.get(`/tasks/${id}`)
export const createTaskReq = task => axios.post('/tasks', task)
export const updateTaskReq = (task) => axios.put(`/tasks/${task._id}`, task)
export const deleteTaskReq = id => axios.delete(`/tasks/${id}`)