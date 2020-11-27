import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppProvider } from './Components/context';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
