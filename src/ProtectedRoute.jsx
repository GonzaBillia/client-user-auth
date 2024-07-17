import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {

    const {loading, isAuth} = useAuth()

    if(loading) return <h1>Loading...</h1>
    if(!isAuth && !loading) return <Navigate to={'/login'} replace/>

    return (
        <Outlet />
    )
}

export default ProtectedRoute