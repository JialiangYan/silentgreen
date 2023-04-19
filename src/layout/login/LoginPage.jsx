import React from 'react'
import './LoginPage.css'
import { Routes, Route } from 'react-router-dom'

const Login = React.lazy(() =>
  import('../../components/login/Login').then(({ Login }) => ({
    default: Login,
  }))
)
const Register = React.lazy(() =>
  import('../../components/register/Register').then(({ Register }) => ({
    default: Register,
  }))
)

export const LoginPage = React.memo(() => {
  return (
    <div className="loginPage">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route index element={<Login />}></Route>
      </Routes>
    </div>
  )
})
