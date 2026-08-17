import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './config/i18n'
import './index.css'
import App from './App'
import './neumorphism.css'
import './fx.css'
import './consistency.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
