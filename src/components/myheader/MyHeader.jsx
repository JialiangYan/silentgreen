import React from 'react'
import { Col, Row, Button } from 'antd'
import './MyHeader.css'
import Logo from '../../assets/logo.jpg'
import { Layout } from 'antd'
const { Header } = Layout

export const MyHeader = () => {
  return (
    <Header className="header">
      <Row>
        <Col span={2}>
          <div className="logo">
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
        <Col span={19}>
          <div></div>
        </Col>
        <Col span={3}>
          <Button size={'middle'}>中英文切换</Button>
        </Col>
      </Row>
    </Header>
  )
}
