import React, { Component } from 'react'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Navigate  } from 'react-router-dom';
import "./login.less"
import log from "./img/logo.png"
import { reqLogin } from '../../api/';
import storeUtil from '../../utils/storageUtil';

export default class Login extends Component {

  state = {
    route:null
  }

  add = () => {

  }
  onFinish = async (values) => {
    console.log('Success:', values);
    const { username, password } = values;
    // 正常的处理返回的promis
    /*  reqLogin(username, password).then(res => {
          console.log("成功了", res.data)
        })
 
    // 也可以通过await来处理
    /* 
        简化promise对象的使用：不用再使用then（）来指定成功、失败的回调函数
        以同步编码（没有回调函数了）方式实现异步流程
        在返回promise的表达方式左侧写await：不想要promise想要promise执行后的数据
        在最近的所在函数左侧写 async
    */
      const response = await reqLogin(username, password)
      if(response.status === 0){
        message.success("登录成功")
        storeUtil.saveData('user_key',response.data)
        this.setState({route:true})

      }else{
        message.error(response.msg)
      }
     
      console.log("请求成功", response)
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  render() {
    console.log(storeUtil.getData("user_key"))
    if( storeUtil.getData("user_key") && storeUtil.getData("user_key")._id){
      return (
        <Navigate to='/' replace='true' />
      )
    }
    return (
      <div className="login">
        <div className='header'>
          <img src={log} alt="logo" />
          <h2>后台管理系统</h2>
        </div>
        <div className='content'>
          <h2>用户登录</h2>
          <Form name="basic"
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 24,
            }} initialValues={{
              remember: true,
            }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} autoComplete="off">
            <Form.Item name="username" rules={[
              {
                required: true,
                message: '请输入用户名!'
              },
              { min: 4, max: 12, message: "用户名至少4位，至多12位" },
              { pattern: /^[a-zA-Z0-9_]+$/, message: "用户名必须是英文、数字、下划线" }
            ]}>
              <Input placeholder="用户名:" prefix={<UserOutlined style={{ 'color': 'rgba(0, 0, 0, .25)' }} />} />
            </Form.Item>

            <Form.Item name="password" rules={[
              {
                validator: (rule, value) => {

                  if (!value) {
                    return Promise.reject(new Error('请填写密码'))
                  } else if (12 < value.lenght || value.lenght < 4) {
                    return Promise.reject(new Error('密码至少4位，至多12位'))
                  } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                    return Promise.reject(new Error('密码必须是英文、数字、下划线'))
                  } else {
                    return Promise.resolve()
                  }
                }
              }
            ]}>
              <Input.Password placeholder="密码：" prefix={<LockOutlined style={{ 'color': 'rgba(0, 0, 0, .25)' }} />} />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{
              offset: 8,
              span: 16,
            }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item wrapperCol={{
              offset: 0,
              span: 24,
            }}>
              <Button type="primary" style={{ width: '100%', 'marginTop': "20px" }} htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        {
          // 路由跳转无法通过编程
          this.state.route && (
            <Navigate to='/' replace='true' />
          )
        }
      </div>
    )
  }
}
