import { createContext, useState, useContext, useEffect } from "react"
import { loginReq, registerReq } from '../api/auth'

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

    const signUp = async(user) => {
        try {
            const res = await registerReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signIn = async(user) => {
        try {
            const res = await loginReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    },[errors])

    return (
        <AuthContext.Provider value={
            {
                signUp,
                signIn,
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