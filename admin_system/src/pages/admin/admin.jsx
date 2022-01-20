import React, { Component } from 'react'
import { Outlet, Route, Routes, Navigate } from "react-router-dom"
import storeUtil from '../../utils/storageUtil';
import { Layout } from 'antd'
import LayoutLeft from '../../components/layoutLeft/layoutLeft';
import Layoutheader from '../../components/header/header';

import Category from '../category/category';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';

import Home from "../home/home"
import Role from "../role/role"
import Product from '../product/product';
import User from "../user/user"

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {

  render() {
    if (!storeUtil.getData("user_key")) {
      return (
        <Navigate to='/login' replace='true' />
      )
    }
    const user = storeUtil.getData('user_key')
    console.log("admin")
    return (
      <div style={{ height: "100%" }}>
        <Layout style={{ height: "100%" }}>
          <Sider>
            <LayoutLeft></LayoutLeft>
          </Sider>
          <Layout>
            <Header style={{background:"#fff"}}>
              <Layoutheader user={user}></Layoutheader>
            </Header>

            <Content style={{margin:20}}>
              <Routes>
                <Route path='/Pie' element={<Pie></Pie>} />
                <Route path='/Line' element={<Line></Line>} />
                <Route path='/Bar' element={<Bar></Bar>} />
                <Route path='/Home' element={<Home></Home>} />
                <Route path='/Role' element={<Role></Role>} />
                <Route path='/Category' element={<Category></Category>} />
                <Route path='/Product' element={<Product></Product>} />
                <Route path='/User' element={<User></User>} />
                <Route path='/*' element={
                  <Navigate to='/Home' replace='true' />
                } />
              </Routes>
            </Content>

            <Footer>Footer</Footer>
          </Layout>
        </Layout>
        <Outlet></Outlet>
      </div>
    )
  }
}
