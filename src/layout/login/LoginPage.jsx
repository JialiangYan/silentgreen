import React from 'react'
import './LoginPage.css'
import { Routes, Route } from 'react-router-dom'

const Login = React.lazy(() =>
  import('../../components/login/Login').then(({ Login }) => ({
    default: Login,
  }))
)

export const LoginPage = React.memo(() => {
  return (
    <div className="loginPage">
      <Routes>
        <Route index path="/" element={<Login />}></Route>
      </Routes>
    </div>
  )
})
