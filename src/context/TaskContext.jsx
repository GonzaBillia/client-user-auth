import { createContext, useContext, useState } from "react";
import { createTaskReq, getTasksReq, deleteTaskReq, getTaskReq, updateTaskReq } from '../api/tasks'


const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)

    if(!context) {
        throw new Error('useTask must be used within an TaskProvider')
    }

    return context
}

export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState([])

    const getTasks = async() => {
        try {
            const res = await getTasksReq()
            setTasks(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async(id) => {
        try {
            const res = await getTaskReq(id)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async(task) => {
        try {
            const res = await createTaskReq(task)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async(id) => {
        try {
            const res = await deleteTaskReq(id)
            if(res.status === 204) {
                setTasks(tasks.filter(task => task._id !== id))
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async(id, task) => {
        try {
            const res = await updateTaskReq(id, task)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            setTasks,
            createTask,
            getTasks,
            getTask,
            deleteTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}