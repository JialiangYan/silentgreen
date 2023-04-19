import React from 'react'
import { Col, Row, Button } from 'antd'
import './MyHeader.css'
import Logo from '../../assets/logo.jpg'
import { Layout } from 'antd'
import axiosfunc from '../../utils/axiosfunc'
import { useNavigate } from 'react-router-dom'
const { Header } = Layout

export const MyHeader = () => {
  const navigate = useNavigate()
  // 点击logo跳转至首页
  const handleClick = () => {
    navigate('./')
  }
  const logOut = () => {
    axiosfunc(
      'post',
      'miserauth/loginout',
      localStorage.getItem('userInfo')
    ).then((res) => {
      console.log('getresponse success', res)
      if ((res.code == 0) | (res.code == -1)) {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('userName')
        localStorage.removeItem('userInfo')
        navigate('/')
        window.location.reload()
      }
    })
  }

  return (
    <Header className="header">
      <Row>
        <Col span={2}>
          <div className="logo" onClick={handleClick}>
            <img
              src={Logo}
              alt="logo"
              style={{
                height: '75px',
                width: '75px',
              }}
            />
          </div>
        </Col>
        <Col span={17}>
          <div></div>
        </Col>
        <Col span={2}>
          <Button size={'middle'}>中英文切换</Button>
        </Col>
        <Col span={2}>
          {/*需要后端，默认无法点击*/}
          <Button size={'middle'} onClick={logOut} disabled={false}>
            退出登录
          </Button>
        </Col>
      </Row>
    </Header>
  )
}
