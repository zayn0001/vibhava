import React from 'react'
import ReactDOM from 'react-dom/client'
import Interface from "./Interface"
import './index.css'
import { CookiesProvider } from "react-cookie";
import {BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <CookiesProvider>
  <Interface/>
  </CookiesProvider>
  </BrowserRouter>
  </>
)
