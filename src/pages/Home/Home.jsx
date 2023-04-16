import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd'
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
              <span className="status-number">45</span>
              <span className="status-type">In Progress</span>
            </div>
            <div className="item-status">
              <span className="status-number">24</span>
              <span className="status-type">Upcoming</span>
            </div>
            <div className="item-status">
              <span className="status-number">62</span>
              <span className="status-type">Total Projects</span>
            </div>
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
          <div className="project-box-wrapper">
            <div className="project-box" style={{ backgroundColor: '#fee4cb' }}>
              {/* 日期 */}
              <div className="project-box-header">
                <span>{formattedDate}</span>
              </div>
              {/* 内容 */}
              <div className="project-box-content-header">
                <p className="box-content-header">实时数据</p>
                <p className="box-content-subheader">数据</p>
              </div>
              {/* 进度条 */}
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: '60%', backgroundColor: '#ff942e' }}
                  ></span>
                </div>
                <p className="box-progress-percentage">60%</p>
              </div>
              <div className="project-box-footer">
                <div className="days-left" style={{ color: '#ff942e' }}>
                  xxxxxx
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="project-box-wrapper">
            <div className="project-box" style={{ backgroundColor: '#e9e7fd' }}>
              <div className="project-box-header">
                <span>{formattedDate}</span>
              </div>
              <div className="project-box-content-header">
                <p className="box-content-header">历史趋势</p>
                <p className="box-content-subheader">趋势</p>
              </div>
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: '50%', backgroundColor: '#4f3ff0' }}
                  ></span>
                </div>
                <p className="box-progress-percentage">50%</p>
              </div>
              <div className="project-box-footer">
                <div className="days-left" style={{ color: '#4f3ff0' }}>
                  xxxxx
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="project-box-wrapper">
            <div className="project-box">
              <div className="project-box-header">
                <span>{formattedDate}</span>
              </div>
              <div className="project-box-content-header">
                <p className="box-content-header">流量包使用</p>
                <p className="box-content-subheader">使用量</p>
              </div>
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: '80%', backgroundColor: '#096c86' }}
                  ></span>
                </div>
                <p className="box-progress-percentage">80%</p>
              </div>
              <div className="project-box-footer">
                <div className="days-left" style={{ color: '#096c86' }}>
                  xxxxx
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="project-box-wrapper">
            <div className="project-box" style={{ backgroundColor: '#ffd3e2' }}>
              <div className="project-box-header">
                <span>{formattedDate}</span>
              </div>
              <div className="project-box-content-header">
                <p className="box-content-header">流量包使用</p>
                <p className="box-content-subheader">使用量</p>
              </div>
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: '20%', backgroundColor: '#df3670' }}
                  ></span>
                </div>
                <p className="box-progress-percentage">20%</p>
              </div>
              <div className="project-box-footer">
                <div className="days-left" style={{ color: '#df3670' }}>
                  xxxxxx
                </div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="project-box-wrapper">
            <div className="project-box" style={{ backgroundColor: '#c8f7dc' }}>
              <div className="project-box-header">
                <span>{formattedDate}</span>
              </div>
              <div className="project-box-content-header">
                <p className="box-content-header">流量包使用</p>
                <p className="box-content-subheader">使用量</p>
              </div>
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: '60%', backgroundColor: '#34c471' }}
                  ></span>
                </div>
                <p className="box-progress-percentage">60%</p>
              </div>
              <div className="project-box-footer">
                <div className="days-left" style={{ color: '#34c471' }}>
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="project-box-wrapper">
            <div className="project-box" style={{ backgroundColor: '#d5deff' }}>
              <div className="project-box-header">
                <span>{formattedDate}</span>
              </div>
              <div className="project-box-content-header">
                <p className="box-content-header">流量包使用</p>
                <p className="box-content-subheader">使用量</p>
              </div>
              <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                  <span
                    className="box-progress"
                    style={{ width: '40%', backgroundColor: '#4067f9' }}
                  ></span>
                </div>
                <p className="box-progress-percentage">40%</p>
              </div>
              <div className="project-box-footer">
                <div className="days-left" style={{ color: '#4067f9' }}>
                  xxxxxx
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
