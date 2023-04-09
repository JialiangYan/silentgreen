import { createContext } from 'react'

const loginContext = createContext({
  isLogin: false,
  identity: 'manager',
  setIsLogin: () => {},
  setIdentity: () => {},
})

export default loginContext
