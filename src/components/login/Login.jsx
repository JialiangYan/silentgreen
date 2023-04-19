import React, { createContext, useContext } from 'react'
import './Login.css'
import { Button, Form, Input } from 'antd'
import loginContext from '../../config/loginContext'
import { useNavigate } from 'react-router-dom'
import axiosfunc from '../../utils/axiosfunc'

export const Login = () => {
  const { setIsLogin } = useContext(loginContext)
  const { setIdentity } = useContext(loginContext)
  const navigate = useNavigate()

  // 表单成功提交
  const onFinish = (values) => {
    // 暂时放在这里,用后端把这行注释掉
    // setIsLogin(true)
    console.log(values)


    axiosfunc('post', 'miserauth/login', values).then(
      (res) => {
        console.log('get response', res)
        if (res.code == 0) {
          localStorage.setItem('isLogin', 'true')
          localStorage.setItem('userpower', res.userpower)
          localStorage.setItem('userInfo', res.userInfo)
          localStorage.setItem('userName', res.username)
          console.log(localStorage)
          // setIsLogin(true)
        }
      },
      (error) => {
        console.log('get response failed!')
      }
    )
      navigate('/analysis/reAnalysis')
      // window.location.reload()

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
        <span className="title">默绿SilentGreen</span>
        <div className="form-container">
          <Form.Item
            label=""
            name="userName"
            rules={[{ required: true, message: '' }]}
          >
            <Input placeholder="邮箱" className="input" />
          </Form.Item>
          <Form.Item
            label=""
            name="userPassword"
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
        <p>默绿SilentGreen @2023/All Right Reserved</p>
      </div>
    </div>
  )
}
