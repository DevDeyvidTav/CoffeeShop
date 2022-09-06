import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './css/global.css'
import { CoffeeProvider } from './contexts/CoffeeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </React.StrictMode>
)