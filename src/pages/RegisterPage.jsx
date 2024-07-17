import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {signUp, isAuth, errors: registerErr} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuth) navigate('/tasks')
    },[isAuth])

    const onSubmit = handleSubmit(async(values) => {
        signUp(values)
    })

    return (
        <div className='container mx-auto w-full flex justify-center items-center h-screen'>

            <div className='bg-zinc-800 max-w-3xl rounded-md p-16'>

                {registerErr.map((err, i) => (
                    <div className='bg-red-500 p-2 mb-2' key={i}>{err}</div>
                ))}

                <form onSubmit={onSubmit} className='flex flex-col jusstify-center items-center gap-4'>

                    <input type="text" {...register("username", { required: true })} id="username-input" placeholder='Username' className='bg-zinc-600 rounded-md w-full p-2' />
                    {errors.username && <p className='text-red-500'>This field is required</p>}

                    <input type="email" {...register("email", { required: true })} id="email-input" placeholder='Email' className='bg-zinc-600 rounded-md w-full p-2'/>
                    {errors.email && <p className='text-red-500'>This field is required</p>}

                    <input type="password" {...register("password", { required: true })} id="password-input" placeholder='Password' className='bg-zinc-600 rounded-md w-full p-2'/>
                    {errors.password && <p className='text-red-500'>This field is required</p>}

                    <button type="submit" className='bg-zinc-300 rounded-md w-[70%] text-black'>Register</button>

                </form>
            </div>

        </div>
    )
}

export default RegisterPage