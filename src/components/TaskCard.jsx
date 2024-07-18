import React from 'react'
import { useTask } from '../context/TaskContext'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

function TaskCard({ task }) {
    const {deleteTask} = useTask()
    return (
        <div className='bg-zinc-700 rounded-md p-4 max-w-full'>
            <div className='flex flex-col md:flex-row justify-between items-center pb-4'> 
                <h3 className='text-2xl font-bold '>{task.title}</h3>

                <div className='flex gap-x-4 items-center'>
                    <Link to={`/client-user-auth/task/${task._id}`} className='bg-blue-500 rounded-md px-2'>Edit</Link>
                    <button className='bg-red-500 rounded-md px-2' onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
            </div>
            <p className='text-md py-2 px-2'>{task.description}</p>
            <div className='pt-4 flex flex-col md:flex-row md:justify-between'>
                <p className='text-sm text-zinc-400 '>Date to Do: {dayjs.utc(task.date).format("DD-MM-YYYY")}</p>
                <p className='text-sm text-zinc-400 '>Status: {task.done ? 'Done' : 'Pending'}</p>
            </div>
            
        </div>
    )
}

export default TaskCard