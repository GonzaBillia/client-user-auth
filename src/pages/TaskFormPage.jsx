import React from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

const TaskFormPage = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()
    const {tasks, createTask} = useTask()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        createTask(data)
        navigate('/tasks')
    })


    return (
        <div className='container mx-auto w-full flex justify-center items-center h-[calc(100vh-150px)]'>

            <div className='bg-zinc-800 min-w-[500px] rounded-md py-8 px-12'>
            <h1 className='text-3xl font-bold mb-2'>Add a Task</h1>

                <form onSubmit={onSubmit} className='flex flex-col jusstify-center items-center gap-4 py-8'>
                    <input type="text" name="title" id="title-input" placeholder='Title' autoFocus className='bg-zinc-600 rounded-md w-full p-2'
                    {...register("title", { required: true })}
                    />
                    <textarea name="description" id="description-input" placeholder='Description' rows={3} className='bg-zinc-600 rounded-md w-full p-2'
                    {...register("description", { required: true })}
                    ></textarea>

                    <button type='submit' className='bg-zinc-300 rounded-md w-[70%] text-black'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage