import React, { useState } from 'react'
import { AreaChartOutlined } from '@ant-design/icons'
import { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ConfigProvider, Menu } from 'antd'
import './SideMenu.css'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

export const SideMenu = () => {
  const items = [
    getItem('fang', 'sub1', <AreaChartOutlined />, [
      getItem('区域', '1'),
      getItem('行业', '2'),
    ]),

    getItem('analysis', 'su2', <AreaChartOutlined />, [
      getItem('实时数据', '3'),
      getItem('历史趋势', '4'),
    ]),

    getItem('user', 'sub3', <AreaChartOutlined />, [
      getItem('用户情况', '5'),
      getItem('用户画像', '6'),
    ]),

    getItem('page', 'sub4', <AreaChartOutlined />, [
      getItem('页面排行', '7'),
      getItem('性能监控', '8'),
      getItem('访问深度', '9'),
    ]),

    getItem('data', 'sub5', <AreaChartOutlined />, [
      getItem('碳排放因子', '10'),
      getItem('外接数据库', '11'),
      getItem('邮件', '12'),
    ]),
  ]

  const [current, setCurrent] = useState('1')
  const navigate = useNavigate()

  const nav = (num) => {
    switch (num) {
      case '1':
        navigate('/overall/region')
        break
      case '2':
        navigate('/overall/industry')
        break
      case '3':
        navigate('/analysis/reAnalysis')
        break
      case '4':
        navigate('/analysis/histTrend')
        break
      case '5':
        navigate('/user/userinfo')
        break
      case '6':
        navigate('/user/userPortrait')
        break
      case '7':
        navigate('/page/ranking')
        break
      case '8':
        navigate('/page/perfMonitor')
        break
      case '9':
        navigate('/page/accessDepth')
        break
      case '10':
        navigate('/data/carbon')
        break
      case '11':
        navigate('/data/db')
        break
      case '12':
        navigate('/data/email ')
        break
    }
  }

  const onClick = (e) => {
    console.log('click ', e)
    // 改变高亮位置
    setCurrent(e.key)
    // 路由
    nav(e.key)
  }

  return (
    <div className="sides">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <Menu
          theme="light"
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </ConfigProvider>
    </div>
  )
}
