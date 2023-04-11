import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './MainPage.css'
import { Routes, Route } from 'react-router-dom'
import { MyHeader, SideMenu, Loading } from '../../components'
import { sideItems, flatten } from '../../const'
const { Content, Footer } = Layout

export const MainPage = () => {
  // 加载动画
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="main">
      <Layout style={{ height: '100%' }}>
        {/* 顶栏 */}
        <MyHeader />
        {/* 顶栏以下的部分 */}
        <Layout>
          {/* 侧边栏 */}
          <SideMenu />
          {/* 内容 */}
          <Layout>
            <Content
              style={{
                margin: '24px 24px 0',
                padding: '24px 24px 0',
                backgroundColor: '#fff',
              }}
            >
              <div className="content">
                <Routes>
                  {flatten(sideItems).map((item, key) => {
                    console.log(item.element)
                    return (
                      <Route
                        path={item.path}
                        element={<item.element />}
                        key={key}
                        exact
                      />
                    )
                  })}
                  {/* 404页面 */}
                  <Route path="*" element={<h1>404 Not Found</h1>}></Route>
                </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              默绿SilentGreen @2023/All Right Reserved
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
