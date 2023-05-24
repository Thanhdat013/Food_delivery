import ReactDOM from 'react-dom/client'
import './index.css'

import { persistor, store } from '@/redux/store'
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimatePresence>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </AnimatePresence>
)
