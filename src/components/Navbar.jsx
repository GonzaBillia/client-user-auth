import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTask } from '../context/TaskContext'

function Navbar() {
    const {isAuth, logout, user} = useAuth()
    const {setTasks} = useTask()
    return (
        <nav className='flex justify-between items-center bg-zinc-700 py-5 px-32 mx-auto'>
            {isAuth ? (
                <Link to="/client-user-auth/tasks">
                    <h1 className='text-2xl font-bold'>Task Manager</h1>
                </Link>
            ) : (
                <Link to="/client-user-auth/">
                    <h1 className='text-2xl font-bold'>Task Manager</h1>
                </Link>
            )}
            <ul className='flex gap-x-4'>
                {isAuth ? (
                    <>
                        <li>Welcome, <span className='font-bold text-green-500'>{user.username}</span></li>
                        <li className='bg-indigo-700 rounded-md text-white px-3'><Link to="/client-user-auth/add-task">Add Task</Link></li>
                        <li><Link to={`/client-user-auth/profile/${user.id}`}>Profile</Link></li>
                        <li><Link to="/client-user-auth/" onClick={() =>{setTasks([]), logout()}}>Logout</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/client-user-auth/login">Login</Link></li>
                        <li><Link to="/client-user-auth/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar