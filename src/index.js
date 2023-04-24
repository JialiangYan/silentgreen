import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Loading } from './components'
import { Provider } from 'react-redux'
import rootStore from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const App = lazy(() => import('./App'))
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={rootStore.store}>
    <React.StrictMode>
      <Router>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Router>
    </React.StrictMode>
  </Provider>
)
