import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import rootStore from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const App = React.lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={rootStore.store}>
    <React.StrictMode>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Router>
    </React.StrictMode>
  </Provider>
)
