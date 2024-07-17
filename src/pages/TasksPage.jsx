import React, { useEffect } from 'react'
import { useTask } from '../context/TaskContext'
import TaskCard from '../components/TaskCard'

const TasksPage = () => {
    const {getTasks, tasks} = useTask()

    useEffect(() => {
        getTasks()
    },[])

    return (
        <div className='container mx-auto w-full px-10'>
            
            <div className='grid grid-cols-2 lg:grid-cols-3 py-8 px-16 gap-4 h-auto'>
                {tasks.length === 0 ? 
                <div className='flex justify-center items-center col-span-2 lg:col-span-3 h-screen'><h3>loading...</h3></div> : 
                tasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default TasksPage