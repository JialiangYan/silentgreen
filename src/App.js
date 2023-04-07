import React, { useState, Suspense } from 'react'
import './App.css'
import loginContext from './config/loginContext'
// 导入页面
const LoginPage = React.lazy(() =>
  import('./layout/login/LoginPage').then(({ LoginPage }) => ({
    default: LoginPage,
  }))
)
const MainPage = React.lazy(() =>
  import('./layout/main/MainPage').then(({ MainPage }) => ({
    default: MainPage,
  }))
)

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
      {isLogin ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MainPage />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <loginContext.Provider value={{ isLogin, setIsLogin }}>
            <LoginPage />
          </loginContext.Provider>
        </Suspense>
      )}
    </div>
  )
}

export default App
