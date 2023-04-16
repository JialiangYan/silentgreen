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
  // 测试用，展示把false换成true，用户换成管理员，后端用注释的code
  // const [isLogin, setIsLogin] = useState(true)
  // const [identity, setIdentity] = useState('manager')
  //使用localstorage接受和使用从后端保存的数据
  const isLogin = localStorage.getItem('isLogin')
  const identity = localStorage.getItem('userpower')

  return (
    <div className="App">
      {true ? (
        <Suspense fallback={<Loading />}>
          <MainPage />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <loginContext.Provider
            //需要切换，去掉两个没有使用的方法
            // value={{ isLogin, identity,setIsLogin,setIdentity }}

            value={{ isLogin, identity }}
          >
            <LoginPage />
          </loginContext.Provider>
        </Suspense>
      )}
    </div>
  )
}

export default App
