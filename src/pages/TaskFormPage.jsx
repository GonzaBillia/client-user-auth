import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../context/TaskContext'
import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const TaskFormPage = () => {
    const {register, handleSubmit, formState: { errors }, setValue } = useForm()
    const {createTask, getTask, updateTask} = useTask()
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit((data) => {
        if(data.date == "") {
            data.date = new Date()
        }
        if(params.id) {
            updateTask(params.id, {
                ...data,
                date: dayjs.utc(data.date).format()
            })
        } else {
            
            createTask({
                ...data,
                date: dayjs.utc(data.date).format()
            })
        }
        navigate('/client-user-auth/tasks')
    })

    useEffect(() => {
        async function loadTask() {
            if(params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
                setValue('date', dayjs.utc(task.date).format("YYYY-MM-DD"))
            }
        }
        loadTask()
    }, [])

    return (
        <div className='container mx-auto w-full flex justify-center items-center h-[calc(100vh-150px)]'>

            <div className='bg-zinc-800 min-w-[500px] rounded-md py-8 px-12'>
            {params.id ? <h1 className='text-3xl font-bold mb-2'>Update Task</h1> : <h1 className='text-3xl font-bold mb-2'>Create Task</h1>}

                <form onSubmit={onSubmit} className='flex flex-col justify-center items-center gap-4 py-8'>

                    <div className='flex flex-col justify-center items-start gap-1 w-full'>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title-input" placeholder='Title' autoFocus className='bg-zinc-600 rounded-md w-full p-2 mb-6'
                        {...register("title", { required: true })}
                        />

                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description-input" placeholder='Description' rows={3} className='bg-zinc-600 rounded-md w-full p-2 mb-6'
                        {...register("description", { required: true })}
                        ></textarea>

                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date-input" {...register("date")} className='bg-zinc-600 rounded-md w-full p-2 mb-6' />

                        <label htmlFor="done">Status</label>
                        <select name="status" id="status-input" {...register("done")} className='bg-zinc-600 rounded-md w-full p-2 mb-6'>
                            <option value={false}>Pending</option>
                            <option value={true}>Done</option>
                        </select>
                    </div>

                    <button type='submit' className='bg-zinc-300 p-2 rounded-md w-[50%] text-black'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage