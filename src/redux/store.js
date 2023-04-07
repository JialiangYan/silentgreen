import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { actionLog } from './middlewares/actionLog'

const rootReducer = combineReducers({})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLog),
  devTools: true,
})

export default { store }
