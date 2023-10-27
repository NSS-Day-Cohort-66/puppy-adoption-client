import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomeView } from './views/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='p-5'>
        <h1 className='text-3xl'>Welcome to Puppy Adoption</h1>
        <HomeView />
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
