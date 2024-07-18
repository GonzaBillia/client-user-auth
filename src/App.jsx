import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthProvider from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import TasksPage from "./pages/TasksPage"
import TaskFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"
import TaskProvider from "./context/TaskContext"
import Navbar from "./components/Navbar"

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/client-user-auth/" element={<HomePage />} />

          <Route path="/client-user-auth/login" element={<LoginPage />} />

          <Route path="/client-user-auth/register" element={<RegisterPage />} />

          
            <Route element={<ProtectedRoute />}>
              <Route path="/client-user-auth/tasks" element={<TasksPage />} />

              <Route path="/client-user-auth/add-task" element={<TaskFormPage />} />

              <Route path="/client-user-auth/task/:id" element={<TaskFormPage />} />

              <Route path="/client-user-auth/profile/:id" element={<ProfilePage />} />
            </Route>
          
        </Routes>

      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App