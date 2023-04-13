import React, { useContext } from 'react'
import './Register.css'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import loginContext from '../../config/loginContext'
import axiosfunc from "../../utils/axiosfunc";

export const Register = () => {
  const navigate = useNavigate()
  const { setIsLogin } = useContext(loginContext)
  const onFinish = async (values) => {
    axiosfunc('post', '/miserauth/register', values).then(
      (res) => {
        console.log('get response', res)
        setIsLogin(true)
        navigate('/')
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
        <span className="title">默绿SilentGreen</span>
        <span className="subtitle">使用邮箱免费注册账号</span>
        <div className="form-container">
          <Form.Item
            label="用户名"
            name="userName"
            rules={[{ required: true, message: '' }]}
          >
            <Input placeholder="用户名" className="input" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '' }]}
          >
            <Input placeholder="邮箱" className="input" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '' }]}
          >
            <Input.Password placeholder="密码" className="input" />
          </Form.Item>

          <Form.Item
            label="社工号"
            name="scCode"
            rules={[{ required: false, message: '' }]}
          >
            <Input.Password placeholder="社会认证号" className="input" />
          </Form.Item>
                    <Form.Item
            label="公司名称"
            name="companyName"
            rules={[{ required: true, message: '' }]}
          >
            <Input.Password placeholder="公司名称" className="input" />
          </Form.Item>
          <Form.Item
            label="联系电话"
            name="teleNum"
            rules={[{ required: true, message: '' }]}
          >
            <Input.Password placeholder="例如：13988801111" className="input" />
          </Form.Item>
                    <Form.Item
            label="公司地址"
            name="address"
            rules={[{ required: false, message: '' }]}
          >
            <Input.Password placeholder="公司地址" className="input" />
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
