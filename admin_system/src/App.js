
import React, { Component } from 'react'
import {Route,BrowserRouter,Routes} from "react-router-dom"

import Admin from "./pages/admin/admin"
import Login from "./pages/login/login"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Admin/>}>
         </Route>
          <Route path='/login' element={<Login></Login>}/>
       </Routes>
      </BrowserRouter>
    )
  }
}

