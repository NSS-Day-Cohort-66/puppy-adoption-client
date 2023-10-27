import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomeView } from './views/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='p-5'>
      <h1 className='text-3xl'>Welcome to Puppy Adoption</h1>
      <HomeView />
    </main>
  </React.StrictMode>,
)
