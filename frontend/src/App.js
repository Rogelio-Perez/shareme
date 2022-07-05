import React, {useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script'

import Login from './components/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: 'https://www.googleapis.com/auth/documents.readonly'
      })
    }
    )
  })
  
  useEffect(() => {
    const user = fetchUser()

    if(!user) navigate('/login')
  }, [])
  
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App
