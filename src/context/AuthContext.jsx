import { createContext, useState, useContext } from "react"
import { registerReq } from '../api/auth'

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
            console.log(res.data)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    return (
        <AuthContext.Provider value={
            {
                signUp,
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