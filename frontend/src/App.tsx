import { useState } from 'react'
import Menu from './components/menu'
import NewNote from './routes/newNote'
import AllNotes from './routes/all'
import Layout from './routes/Layout'
import Login from './routes/login'
import EditNote from './routes/editNote'
import Register from './routes/register'
import AboutMe from './routes/me'



import { BrowserRouter, Routes, Route } from "react-router-dom";








function App() {


  return (
    <>

      <BrowserRouter>
        <div>
          <Routes>


        <Route path="/" element={<Layout />} >
            <Route index element={<NewNote />} />
            <Route path="/all" element={<AllNotes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new" element={<NewNote />} />
            <Route path="/register" element={<Register />} />
            <Route path='/editNote/:id' element={<EditNote/>} />
            <Route path='/me' element={<AboutMe/>} />
        </Route>


        </Routes>
      </div>

    </BrowserRouter >
    </>
  )
}

export default App
