import React from 'react'

const HomePage = () => {
    return (
        <div className='container mx-auto w-full flex justify-center items-center h-[calc(100vh-150px)]'>
            <div className='flex flex-col justify-center items-center bg-zinc-800 rounded-md p-10'>
                <h1 className='text-4xl font-bold pb-8'>Welcome to Task Manager</h1>
                <p>Register or Login to Start</p>
            </div>
        </div>
    )
}

export default HomePage