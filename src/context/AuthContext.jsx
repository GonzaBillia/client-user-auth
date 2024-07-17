import { createContext, useState, useContext, useEffect } from "react"
import { loginReq, registerReq, verifyTokenReq } from '../api/auth'
import Cookies from "js-cookie"
import { useTask } from "./TaskContext"

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signUp = async (user) => {
        try {
            const res = await registerReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const logout = () => {
        Cookies.remove('token')
        setIsAuth(false)
        setUser(null)
    }

    const signIn = async (user) => {
        try {
            const res = await loginReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()
            if (!cookies.token) {
                setIsAuth(false)
                setLoading(false)
                return setUser(null)
            }
            try {
                const res = await verifyTokenReq(cookies.token)
                if (!res.data) {
                    setIsAuth(false)
                    setLoading(false)
                    setUser(null)
                    return
                }
                setUser(res.data)
                setLoading(false)
                setIsAuth(true)
            } catch (error) {
                setIsAuth(false)
                setLoading(false)
                setUser(null)
            }
        }

        checkLogin()
    }, [])

    return (
        <AuthContext.Provider value={
            {
                signUp,
                signIn,
                logout,
                loading,
                user,
                isAuth,
                errors
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider