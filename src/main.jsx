import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { StateProvider } from './context/StateProvider'
import { initialState } from './context/initalState'
import reducer from './context/reducer'
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AnimatePresence>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </AnimatePresence>
  </Router>
)
