import React from 'react'
import { Col, Row } from 'antd'
import './MyHeader.css'
import Logo from '../../assets/logo.jpg'
import { Layout } from 'antd'
const { Header } = Layout

export const MyHeader = () => {
  return (
    <Header className="header">
      <Row>
        <Col span={21}>
          <div className="logo">
            <img
              src={Logo}
              alt="logo"
              style={{
                marginTop: '10px',
                height: '40px',
                width: '160px',
              }}
            />
          </div>
        </Col>
        <Col span={3}></Col>
      </Row>
    </Header>
  )
}
