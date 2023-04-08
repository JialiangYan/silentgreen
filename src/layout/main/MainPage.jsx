import React, { useState, useEffect } from 'react'
import { Layout, theme, Spin, ConfigProvider } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './MainPage.css'
import { Routes, Route } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { MyHeader, SideMenu } from '../../components'
import {
  RegionPage,
  IndustryPage,
  ReAnalysisPage,
  HistTrendPage,
  UserInfoPage,
  PortraitPage,
  AccessPage,
  RankingPage,
  MonitorPage,
  TablePage,
} from '../../pages'
import { dbData } from '../../mock/dbData'
import { carbonData } from '../../mock/carbonData'
import { emailData } from '../../mock/emailData'

const { Content, Footer, Sider } = Layout
const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />

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
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin
          indicator={antIcon}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '100vh',
          }}
        />
      </Layout>
    )
  }

  return (
    <div className="main">
      <Layout style={{ height: '100%' }}>
        {/* 顶栏 */}
        <MyHeader />
        {/* 顶栏以下的部分 */}
        <Layout>
          {/* 侧边栏 */}
          <Sider>
            <SideMenu />
          </Sider>
          {/* 内容 */}
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ margin: '24px 16px 0' }}>
              <div
                className="content"
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <Routes>
                  {/* 总体分析 */}
                  <Route
                    path="/overall/region"
                    element={<RegionPage />}
                  ></Route>
                  <Route
                    path="/overall/industry"
                    element={<IndustryPage />}
                  ></Route>

                  {/* 访问分析 */}
                  <Route
                    path="/analysis/reAnalysis"
                    element={<ReAnalysisPage />}
                  ></Route>
                  <Route
                    path="/analysis/histTrend"
                    element={<HistTrendPage />}
                  ></Route>

                  {/* 用户分析 */}
                  <Route
                    path="/user/userinfo"
                    element={<UserInfoPage />}
                  ></Route>
                  <Route
                    path="/user/userPortrait"
                    element={<PortraitPage />}
                  ></Route>

                  {/* 页面分析 */}
                  <Route path="/page/ranking" element={<RankingPage />}></Route>
                  <Route
                    path="/page/perfMonitor"
                    element={<MonitorPage />}
                  ></Route>
                  <Route
                    path="/page/accessDepth"
                    element={<AccessPage />}
                  ></Route>

                  {/* 数据修改 */}
                  <Route
                    path="/data/carbon"
                    element={<TablePage data={carbonData} />}
                  ></Route>
                  <Route
                    path="/data/db"
                    element={<TablePage data={dbData} />}
                  ></Route>
                  <Route
                    path="/data/email"
                    element={<TablePage data={emailData} />}
                  ></Route>

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
