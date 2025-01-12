import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Authcontextprovider from './components/context/Auth-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <Authcontextprovider>
<BrowserRouter>
    <App />
   </BrowserRouter>
   </Authcontextprovider>
   
   
)
