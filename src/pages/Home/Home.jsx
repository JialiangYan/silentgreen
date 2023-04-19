import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
import { mainData } from '../../mock/data'
import './home.css'

export default function Home() {
  // 获取当前时间
  let formattedDate = ''
  function refreshTime() {
    let dateStr = new Date().toLocaleString()
    let date = new Date(dateStr)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    formattedDate = `${year}年${month}月${day}日`
    setInterval(refreshTime, 43200000)
  }
  refreshTime()

  let username = localStorage.getItem('userName') || '用户名'
  return (
    <div className="main">
      <div className="projects-section">
        {/* Header部分 */}
        <div className="projects-section-line">
          <div className="projects-status">
            <div className="item-status">
              <span className="status-number">数量</span>
              <span className="status-type">描述</span>
            </div>
            {/* <div className="item-status">
              <span className="status-number">24</span>
              <span className="status-type">Upcoming</span>
            </div>
            <div className="item-status">
              <span className="status-number">62</span>
              <span className="status-type">Total Projects</span>
            </div> */}
          </div>
          <div className="view-actions">
            <Space wrap size={16}>
              <span style={{ fontSize: '1.2em' }}>欢迎，{username}</span>
              <Avatar shape="square" size="large" icon={<UserOutlined />} />
            </Space>
          </div>
        </div>
        {/* 六大项目模块 */}
        <div className="project-boxes jsGridView">
          {/* 1 */}
          {mainData.map((item, key) => {
            return (
              <div className="project-box-wrapper" key={key}>
                <div
                  className="project-box"
                  style={{ backgroundColor: `${item.bgc}` }}
                >
                  {/* 日期 */}
                  <div className="project-box-header">
                    <span>{formattedDate}</span>
                  </div>
                  {/* 内容 */}
                  <div className="project-box-content-header">
                    <p className="box-content-header">{item.header}</p>
                    <p className="box-content-subheader">{item.subheader}</p>
                  </div>
                  {/* 进度条 */}
                  <div className="box-progress-wrapper">
                    <p className="box-progress-header">{item.progressHeader}</p>
                    <div className="box-progress-bar">
                      <span
                        className="box-progress"
                        style={{
                          width: `${item.progress}%`,
                          backgroundColor: `${item.progressColor}`,
                        }}
                      ></span>
                    </div>
                    <p className="box-progress-percentage">{item.progress}</p>
                  </div>
                  <div className="project-box-footer">
                    <div
                      className="days-left"
                      style={{ color: `${item.progressColor}` }}
                    >
                      {item.footer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
