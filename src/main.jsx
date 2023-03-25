import React from 'react'
import ReactDOM from 'react-dom/client'
import Interface from "./Interface"
import './index.css'
import { CookiesProvider } from "react-cookie";
import {HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <HashRouter>
  <CookiesProvider>
  <Interface/>
  </CookiesProvider>
  </HashRouter>
  </>
)
