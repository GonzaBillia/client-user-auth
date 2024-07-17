import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTask } from '../context/TaskContext'
import TaskCard from '../components/TaskCard'

const TasksPage = () => {
    const {user} = useAuth()
    const {getTasks, tasks} = useTask()

    useEffect(() => {
        getTasks()
    },[])

    return (
        <div className='container mx-auto w-full px-10'>
            
            <div className='grid grid-cols-3 py-8 px-16 gap-4 h-auto'>
                {tasks.length === 0 ? 
                <h3>loading...</h3> : 
                tasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default TasksPage