import React, {useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script'

import Login from './components/Login'
import Home from './container/Home'

const App = () => {


  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: 'profile email'
      })
    }
    )
  })
  
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App
