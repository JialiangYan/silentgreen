import React, { Suspense } from 'react'
import { Layout } from 'antd'
import './MainPage.css'
import { Routes, Route } from 'react-router-dom'
import { MyHeader, SideMenu, Loading } from '../../components'
import { sideItems, flatten } from '../../const'
const { Content, Footer } = Layout

export const MainPage = () => {
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
          <Suspense fallback={<Loading />}>
            <Layout>
              <Content
                style={{
                  margin: '24px 24px 0',
                  padding: '24px 24px 0',
                  backgroundColor: '#fff',
                  overflow: 'scroll',
                }}
              >
                <div className="content">
                  <Routes>
                    {flatten(sideItems).map((item, key) => {
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

              <Footer style={{ textAlign: 'center', height: '10vh' }}>
                默绿SilentGreen @2023/All Right Reserved
                <br />
                备案/许可证编号为：蜀ICP备2023008123号
              </Footer>
            </Layout>
          </Suspense>
        </Layout>
      </Layout>
    </div>
  )
}
