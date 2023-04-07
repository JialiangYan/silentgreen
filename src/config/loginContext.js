import { createContext } from 'react'

const loginContext = createContext({
  isLogin: false,
  setIsLogin: (state) => {},
})

export default loginContext
