import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App' // Importando o componente que você acabou de criar

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)