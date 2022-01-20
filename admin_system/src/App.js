
import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"

import Admin from "./pages/admin/admin"
import Login from "./pages/login/login"
// const Admin = () => require('./pages/admin/admin')

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login></Login>} />
          <Route path='/*' element={
            <Admin></Admin>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

