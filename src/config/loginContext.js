import { createContext } from 'react'
import axiosfunc from "../utils/axiosfunc";
const loginContext = createContext({
  isLogin: false,
  identity:'manager',

  setIsLogin: () => {},
  setIdentity: (userpower) => {
    this.identity=userpower
    return this.identity
  },
})

export default loginContext
