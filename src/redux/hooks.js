//目的：重新定义useSelector，这样不用每次都声明state的类型为RootState
import {
  useSelector as useReduxSeletor,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'
import { RootState, AppDispatch } from './store'
export const useSelector = useReduxSeletor
export const useAppDispatch = () => useAppDispatch()
