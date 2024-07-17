import { createContext, useContext, useState } from "react";
import { createTaskReq, getTasksReq, deleteTaskReq } from '../api/tasks'


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

    const createTask = async(task) => {
        const res = await createTaskReq(task)
        console.log(res.data);
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

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}