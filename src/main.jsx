import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomeView } from './views/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PuppyList } from './views/PuppyList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='p-5'>
        <h1 className='text-3xl'>Welcome to Puppy Adoption</h1>

        <Routes>
          <Route path="/" element={ <HomeView /> } />
          <Route path="/centers/:centerId" element={ <PuppyList /> } />

        </Routes>

      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
