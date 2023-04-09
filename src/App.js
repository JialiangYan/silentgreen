import React, { useState, Suspense } from 'react'
import { Loading } from './components'
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
  // 测试用，展示把false换成true，用户换成管理员
  const [isLogin, setIsLogin] = useState(true)
  const [identity, setIdentity] = useState('manager')

  return (
    <div className="App">
      {isLogin ? (
        <Suspense fallback={<Loading />}>
          <MainPage />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <loginContext.Provider
            value={{ isLogin, setIsLogin, identity, setIdentity }}
          >
            <LoginPage />
          </loginContext.Provider>
        </Suspense>
      )}
    </div>
  )
}

export default App
