import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTask } from '../context/TaskContext'
import { Link } from 'react-router-dom'

const TasksPage = () => {
    const {user} = useAuth()
    const {getTasks, tasks} = useTask()

    useEffect(() => {
        getTasks()
    },[])

    return (
        <div className='container mx-auto w-full'>
            
            <div className='flex flex-col py-8 px-16 gap-4'>
                {tasks.length === 0 ? 
                <h3>loading...</h3> : 
                tasks.map((task) => (
                    <div key={task._id} className='bg-zinc-700 rounded-md p-4 max-w-96'>
                        <h3 className='text-2xl font-bold pb-4'>{task.title}</h3>
                        <p className='text-lg'>{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TasksPage