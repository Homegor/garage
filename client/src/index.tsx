import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"

import "./app/scss/index.scss"
import App from "./app/App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
