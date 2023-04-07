import React, { useContext } from 'react'
import './Register.css'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import loginContext from '../../config/loginContext'

const axiosfunc = require(`../../utils/axiosfunc.js`)

export const Register = () => {
  const navigate = useNavigate()
  const { setIsLogin } = useContext(loginContext)
  const onFinish = async (values) => {
    axiosfunc('post', '/miserauth/register', values).then(
      (res) => {
        console.log('get response', res)
        setIsLogin(true)
        navigate('/overall/region')
      },
      (error) => {
        console.log('get response failed!')
      }
    )
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="form-box">
      <Form
        name="basic"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form"
      >
        <span className="title">漂绿监管平台</span>
        <span className="subtitle">使用邮箱免费注册账号</span>
        <div className="form-container">
          <Form.Item
            label=""
            name="username"
            rules={[{ required: true, message: '' }]}
          >
            <Input placeholder="用户名" className="input" />
          </Form.Item>
          <Form.Item
            label=""
            name="email"
            rules={[{ required: true, message: '' }]}
          >
            <Input placeholder="邮箱" className="input" />
          </Form.Item>
          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: '' }]}
          >
            <Input.Password placeholder="密码" className="input" />
          </Form.Item>
        </div>
        <Button type="primary" htmlType="submit" className="button">
          注册
        </Button>
      </Form>
      <div className="form-section">
        <p>
          已经有账号了？ <Link to="/login">登陆</Link>
        </p>
      </div>
    </div>
  )
}
