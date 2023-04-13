import React from 'react'
import { Col, Row, Button } from 'antd'
import './MyHeader.css'
import Logo from '../../assets/logo.jpg'
import { Layout } from 'antd'
import axiosfunc from "../../utils/axiosfunc";
import { useNavigate } from 'react-router-dom'

const { Header } = Layout

let username=localStorage.getItem('userName')

console.log(username)
export const MyHeader = () => {

    const navigate=useNavigate()

  const logOut=()=>{
    axiosfunc('post','miserauth/loginout',localStorage.getItem('userInfo')).then(
        (res)=>{
          console.log('getresponse success',res)
          if(res.code==0 | res.code==-1){
                localStorage.removeItem('isLogin')
                localStorage.removeItem('userName')
                localStorage.removeItem('userInfo')
               navigate('/')

          }
        }
    )

  }


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
          <Col span={15}>
          <div></div>
        </Col>
        <Col span={2}>
          <div>你好!{username}</div>
        </Col>
        <Col span={2}>
          <Button size={'middle'}>中英文切换</Button>
        </Col>
        <Col span={2}>
            {/*需要后端，默认无法点击*/}
          <Button size={'middle'} onClick={logOut} disabled={true}>退出登录</Button>
        </Col>
      </Row>
    </Header>
  )
}
