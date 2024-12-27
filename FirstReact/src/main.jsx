import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateMerge from './26-12-24/StateMerge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    {/* <StateMerge></StateMerge> */}
  </StrictMode>,
)
