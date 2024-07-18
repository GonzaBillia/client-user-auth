import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const {user} = useAuth()
    return (
        <div className='container mx-auto w-full flex justify-center items-center h-[calc(100vh-150px)]'>

            <div className='bg-zinc-800 min-w-[500px] rounded-md py-8 px-16'>

                <h1 className='text-3xl font-bold mb-2'>Your Profile</h1>

                <div className='flex flex-col jusstify-center items-center gap-4 py-8'>

                    <div className='flex justify-between w-72'>
                        <h3>Username: </h3>
                        <h4>{user.username}</h4>
                    </div>
                    <div className='flex justify-between w-72 pb-8'>
                        <h3>Email: </h3>
                        <h4>{user.email}</h4>
                    </div>
                    <div className=' bg-indigo-700 rounded-md text-white px-3'>
                        <Link to="/client-user-auth/tasks">
                            <h1 className='text-xl font-bold'>Back to Tasks</h1>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProfilePage