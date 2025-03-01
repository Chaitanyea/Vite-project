import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import {SnackbarProvider} from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </SnackbarProvider>
)
