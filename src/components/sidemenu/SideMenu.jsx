import React, { useState, useContext } from 'react'
import { Layout, Menu, ConfigProvider } from 'antd'
import { useNavigate } from 'react-router-dom'
import './SideMenu.css'
import { sideItems } from '../../const'
import loginContext from '../../config/loginContext'
const { Sider } = Layout

export const SideMenu = () => {
  const [current, setCurrent] = useState('1')
  const navigate = useNavigate()
  const {identity}=useContext(loginContext)
  //实现用户权限管理，从后端接收userpower
  // const  identity  = localStorage.getItem('userpower')
  // console.log(localStorage.getItem('userpower'))
  // 菜单栏列表
  const items = sideItems
    .filter((i) => {
      return i.identity === identity
    })
    .map((item) => {
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
    })

  console.log(items)

  const nav =
    identity === 'manager'
      ? (num) => {
          switch (num) {
            default:
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
              navigate('/greenGrade')
              break
            case '11':
              navigate('/greenWashing')
              break
          }
        }
      : (num) => {
          switch (num) {
            default:
              navigate('/declare')
              break
            case '13':
              navigate('/feedback')
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
            items={items}
          />
        </ConfigProvider>
      </div>
    </Sider>
  )
}
