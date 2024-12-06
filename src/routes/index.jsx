import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../site/Home.jsx'
import Login from '../login/Login.jsx'
import Cadastrar from '../login/Cadastro.jsx'

const Private = ({ Item }) => {
  const signed = false
  return signed > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
  return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path='/home' element={<Private Item={Home} />} />
            <Route path='/' element={<Login />} />
            <Route exact path='/cadastrar' element={<Cadastrar />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
  )
}

export default RoutesApp