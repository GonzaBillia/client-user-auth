import React from 'react'
import { useForm } from 'react-hook-form'
import { registerReq } from '../api/auth'

const RegisterPage = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async(values) => {
        const res = await registerReq(values)
        console.log(res);
    })

    return (
        <div className='container mx-auto w-full flex justify-center items-center h-screen'>

            <div className='bg-zinc-800 max-w-3xl rounded-md p-16'>
                <form onSubmit={onSubmit} className='flex flex-col jusstify-center items-center gap-4'>

                    <input type="text" {...register("username", { required: true })} id="username-input" placeholder='Username' className='bg-zinc-600 rounded-md w-full p-2' />
                    <input type="email" {...register("email", { required: true })} id="email-input" placeholder='Email' className='bg-zinc-600 rounded-md w-full p-2'/>
                    <input type="password" {...register("password", { required: true })} id="password-input" placeholder='Password' className='bg-zinc-600 rounded-md w-full p-2'/>

                    <button type="submit" className='bg-zinc-300 rounded-md w-[70%] text-black'>Register</button>

                </form>
            </div>

        </div>
    )
}

export default RegisterPage