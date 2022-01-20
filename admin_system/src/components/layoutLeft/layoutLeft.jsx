import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import logo from "../../assets/images/logo.png"
import menuList from '../../config/menu';
import "./layoutLeft.less"

const { SubMenu } = Menu;

export default class LayoutLeft extends Component {

  state = {
    router: null,
    path: window.location.pathname.toLowerCase(),
  }

  // 通过数组生成dom元素
  getMenuCompents = (menuList) => {
    return menuList.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {
              this.getMenuCompents(item.children)
            }
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      }
    })
  }
  getMenuCompentsByReduce = (menuList) => {
    return menuList.reduce((pre, item) => {
      if (item.children) {

        let sItem = item.children.find(citem => citem.key === this.state.path);
        sItem &&  (this.openKey = item.key )

        pre.push((
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {
              this.getMenuCompentsByReduce(item.children)
            }
          </SubMenu>
        ))
      } else {
        pre.push((
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </Menu.Item>
        ))
      }
      return pre
    }, [])
  }


  render() {
    this.menuComent = this.getMenuCompentsByReduce(menuList)
    return (
      <div className='leftNav'>
        <Link to="/" className='leftNavHeader'>
          <img src={logo} alt="" />
          <h1>后台管理系统</h1>
        </Link>
        {/* <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
          <Menu.Item key="Home" icon={<PieChartOutlined />}>
          <Link to={"/Home"}> 首 页 </Link> </Menu.Item> 
          <SubMenu key="sub" icon={<MailOutlined />} title="商品">
          <Menu.Item key="Category">
            <Link to={"/Category"}> 品类管理 </Link> 
            </Menu.Item> 
            <Menu.Item key="Product">
            <Link to={"/Product"}> 商品管理 </Link>
             </Menu.Item> 
            </SubMenu> <Menu.Item key="User" icon={<PieChartOutlined />
            }>
            <Link to={"/User"}> 用户管理 </Link> </Menu.Item> <Menu.Item key="Role" icon={<PieChartOutlined />}>
            <Link to={"/Role"}> 角色管理 </Link> </Menu.Item> <SubMenu key="sub2" icon={<AppstoreOutlined />} title="图形图表">
            <Menu.Item key="Pie">
              <Link to={"/Pie"}> 柱形图 </Link> </Menu.Item> <Menu.Item key="Line">
              <Link to={"/Line"}> 折线图 </Link> </Menu.Item> <Menu.Item key="Bar">
              <Link to={"/Bar"}> 饼图 </Link> </Menu.Item> </SubMenu> </Menu>  */}
        <Menu mode="inline" theme="dark" defaultOpenKeys={[this.openKey]} selectedKeys={[window.location.pathname.toLowerCase()]}>
          {
            // this.getMenuCompents(menuList)
            this.menuComent
          }
        </Menu>
      </div>
    )
  }
}

// export default useNavigate()
