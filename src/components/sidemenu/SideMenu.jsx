import React, { useState } from 'react'
import {
  AreaChartOutlined,
  PieChartOutlined,
  RadarChartOutlined,
} from '@ant-design/icons'
import { Layout, Menu, ConfigProvider } from 'antd'
import { useNavigate } from 'react-router-dom'
import './SideMenu.css'
import { sideItems } from '../../const'
const { Sider } = Layout

export const SideMenu = () => {
  const items = [
    sideItems.map((item) => {
      return !!item.sub
        ? {
            key: item.key,
            icon: item.icon,
            children: [
              ...item.sub.map((i) => {
                return { key: i.key, label: i.label }
              }),
            ],
            label: item.label,
          }
        : {
            key: item.key,
            icon: item.icon,
            label: item.label,
          }
    }),
  ]

  const [current, setCurrent] = useState('1')
  const navigate = useNavigate()

  const nav = (num) => {
    switch (num) {
      case '1':
        navigate('/analysis/reAnalysis')
        break
      case '2':
        navigate('/analysis/histTrend')
        break
      case '3':
        navigate('/company/companyInfo')
        break
      case '4':
        navigate('/company/companyPortrait')
        break
      case '5':
        navigate('/company/companyData')
        break
      case '6':
        navigate('/overall/region')
        break
      case '7':
        navigate('/overall/industry')
        break
      case '8':
        navigate('/carbon/carbonData')
        break
      case '9':
        navigate('/carbon/carbonSrc')
        break
      case '10':
        navigate('/green/grade')
        break
      case '11':
        navigate('/green/greenWashing')
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
    <Sider>
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
            items={items[0]}
          />
        </ConfigProvider>
      </div>
    </Sider>
  )
}
