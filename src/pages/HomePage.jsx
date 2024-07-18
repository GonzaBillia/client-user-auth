import React from 'react'

const HomePage = () => {
    return (
        <div className='container mx-auto w-full flex flex-col justify-center items-center h-[calc(100vh-150px)]'>
            <div className='bg-red-500 w-[500px] rounded-md p-10'>
                <h2 className='font-bold pb-8'>Delete the Cookie when Logout to Register or Login with a Diferent Account</h2>
                <p>Web Browsers may block cookies from third-party websites.</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-zinc-800 rounded-md p-10'>
                <h1 className='text-4xl font-bold pb-8'>Welcome to Task Manager</h1>
                <p>Register or Login to Start</p>
            </div>
        </div>
    )
}

export default HomePage