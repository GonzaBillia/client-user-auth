import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {signUp, isAuth, errors: registerErr} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuth) navigate('/client-user-auth/tasks')
    },[isAuth])

    const onSubmit = handleSubmit(async(values) => {
        signUp(values)
    })

    return (
        <div className='container mx-auto w-full flex justify-center items-center h-[calc(100vh-150px)]'>

            <div className='bg-zinc-800 min-w-[500px] rounded-md py-8 px-16'>

            <h1 className='text-3xl font-bold mb-2'>Register</h1>


                {registerErr.map((err, i) => (
                    <div className='bg-red-500 p-2 my-2' key={i}>{err}</div>
                ))}

                <form onSubmit={onSubmit} className='flex flex-col justify-center items-center gap-4 py-8'>

                    <input type="text" {...register("username", { required: true })} id="username-input" placeholder='Username' className='bg-zinc-600 rounded-md w-full p-2' />
                    {errors.username && <p className='text-red-500'>This field is required</p>}

                    <input type="email" {...register("email", { required: true })} id="email-input" placeholder='Email' className='bg-zinc-600 rounded-md w-full p-2'/>
                    {errors.email && <p className='text-red-500'>This field is required</p>}

                    <input type="password" {...register("password", { required: true })} id="password-input" placeholder='Password' className='bg-zinc-600 rounded-md w-full p-2'/>
                    {errors.password && <p className='text-red-500'>This field is required</p>}

                    <button type="submit" className='bg-zinc-300 rounded-md w-[70%] text-black'>Register</button>

                </form>
                <p className='flex gap-x-2'>
                    Already have an account? <Link to={'/client-user-auth/login'} className='text-blue-500'>Login</Link>
                </p>
            </div>

        </div>
    )
}

export default RegisterPage