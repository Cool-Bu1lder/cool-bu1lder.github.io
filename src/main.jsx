import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
//import 'bootstrap-icons/font/bootstrap-icons.min.css'
import App from './App.jsx'

const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
