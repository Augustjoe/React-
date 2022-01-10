import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import "./login.less"
import log from "./img/logo.png"

export default class Login extends Component {
  add = () => {

  }
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  render() {
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
              span: 5,
            }}
            wrapperCol={{
              span: 19,
            }} initialValues={{
              remember: true,
            }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} autoComplete="off">
            <Form.Item label="用户名:" name="username" rules={[
              {
                required: true,
                message: '请输入用户名!'
              },
              { min: 4, max: 12, message: "用户名至少4位，至多12位" },
              { pattern: /^[a-zA-Z0-9_]+$/, message: "用户名必须是英文、数字、下划线" }
            ]}>
              <Input prefix={<UserOutlined style={{ 'color': 'rgba(0, 0, 0, .25)' }} />} />
            </Form.Item>

            <Form.Item label="密码：" name="password" rules={[
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
              <Input.Password prefix={<LockOutlined style={{ 'color': 'rgba(0, 0, 0, .25)' }} />} />
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
      </div>
    )
  }
}
