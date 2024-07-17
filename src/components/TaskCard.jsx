import React from 'react'
import { useTask } from '../context/TaskContext'
import { Link } from 'react-router-dom'

function TaskCard({ task }) {
    const {deleteTask} = useTask()
    return (
        <div className='bg-zinc-700 rounded-md p-4 max-w-full'>
            <div className='flex justify-between items-center pb-4'> 
                <h3 className='text-2xl font-bold '>{task.title}</h3>

                <div className='flex gap-x-4 items-center'>
                    <Link to={`/task/${task._id}`} className='bg-blue-500 rounded-md px-2'>Edit</Link>
                    <button className='bg-red-500 rounded-md px-2' onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
            </div>
            <p className='text-xl py-2 px-2'>{task.description}</p>
            <p className='text-sm text-zinc-400 pt-4'>Created at: {new Date(task.createdAt).toLocaleString()}</p>
        </div>
    )
}

export default TaskCard