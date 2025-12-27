import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

function App() {
  function Home() {
    return <h2>Home</h2>
  }

  function Login() {
    return <h2>Login</h2>
  }

  function Issue() {
    return <h2>Issues</h2>
  }

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/issues' element={<Issue/>}/>
    </Routes>
  )
}

export default App
