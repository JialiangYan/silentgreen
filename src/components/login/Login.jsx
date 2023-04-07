import React, { useContext } from 'react'
import './Login.css'
import { Button, Form, Input } from 'antd'
import loginContext from '../../config/loginContext'
import { useNavigate } from 'react-router-dom'

const axiosfunc = require(`../../utils/axiosfunc.js`)

export const Login = () => {
  const { setIsLogin } = useContext(loginContext)
  const navigate = useNavigate()

  // 表单成功提交
  const onFinish = (values) => {
    // 暂时放在这里
    setIsLogin(true)
    navigate('/overall/region')

    axiosfunc('post', 'miserauth/login', values).then(
      (res) => {
        console.log('get response', res)
        if (res.code == 0) {
        }
      },
      (error) => {
        console.log('get response failed!')
      }
    )
  }
  return (
    <div className="form-box">
      <Form
        name="basic"
        initialValues={{
          loginid: '',
          loginPwd: '',
        }}
        onFinish={onFinish}
        autoComplete="off"
        className="form"
      >
        <span className="title">漂绿监管平台</span>
        <div className="form-container">
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
          登陆
        </Button>
      </Form>
      <div className="form-section">
        <p>绿色漂洗</p>
      </div>
    </div>
  )
}
