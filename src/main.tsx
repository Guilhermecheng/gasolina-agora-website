import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigContext } from './context/ConfigContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigContext>
      <App />
    </ConfigContext>
  </React.StrictMode>
)
