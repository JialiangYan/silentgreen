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
    // getItem('fang', 'sub1', <AreaChartOutlined />, [
    //   getItem('区域', '1'),
    //   getItem('行业', '2'),
    // ]),
    //
    // getItem('analysis', 'su2', <AreaChartOutlined />, [
    //   getItem('实时数据', '3'),
    //   getItem('历史趋势', '4'),
    // ]),
    //
    // getItem('user', 'sub3', <AreaChartOutlined />, [
    //   getItem('用户情况', '5'),
    //   getItem('用户画像', '6'),
    // ]),
    //
    // getItem('page', 'sub4', <AreaChartOutlined />, [
    //   getItem('页面排行', '7'),
    //   getItem('性能监控', '8'),
    //   getItem('访问深度', '9'),
    // ]),
    //
    // getItem('data', 'sub5', <AreaChartOutlined />, [
    //   getItem('碳排放因子', '10'),
    //   getItem('外接数据库', '11'),
    //   getItem('邮件', '12'),
    // ]),
       getItem('访问分析', 'sub1', <AreaChartOutlined />, [
      getItem('实时数据', '1'),
      getItem('历史趋势', '2'),
  ]),


  getItem('企业分析', 'sub2', <AreaChartOutlined />, [
    getItem('企业信息', '3'),
    getItem('企业画像', '4'),
      getItem('申报数据','5')
  ]),

  getItem('总体分析', 'sub4',<AreaChartOutlined />, [
    getItem('区域信息', '6'),
    getItem('行业信息', '7'),

  ]),
   getItem('碳盘查', 'sub5', <AreaChartOutlined />, [
    getItem('核放数据', '8'),
    getItem('排放源', '9'),

  ]),
       getItem('绿色绩效', 'sub6',<AreaChartOutlined />),
           getItem('绿色漂洗', 'sub7',<AreaChartOutlined />),
  ]

  const [current, setCurrent] = useState('1')
  const navigate = useNavigate()

  const nav = (num) => {
    switch (num) {
      // case '1':
      //   navigate('/overall/region')
      //   break
      // case '2':
      //   navigate('/overall/industry')
      //   break
      // case '3':
      //   navigate('/analysis/reAnalysis')
      //   break
      // case '4':
      //   navigate('/analysis/histTrend')
      //   break
      // case '5':
      //   navigate('/user/userinfo')
      //   break
      // case '6':
      //   navigate('/user/userPortrait')
      //   break
      // case '7':
      //   navigate('/page/ranking')
      //   break
      // case '8':
      //   navigate('/page/perfMonitor')
      //   break
      // case '9':
      //   navigate('/page/accessDepth')
      //   break
      // case '10':
      //   navigate('/data/carbon')
      //   break
      // case '11':
      //   navigate('/data/db')
      //   break
      // case '12':
      //   navigate('/data/email ')
      //   break
            case '1':
        navigate('/analysis/reAnalysis')
        break
      case '2':
        navigate('/analysis/histTrend')
        break
      case '3':
        navigate('../CompanyTable')
        break
      case '4':
        navigate('../CompanyCard')
        break
      case '5':
        navigate('../CompanyData')
        break
      case '6':
        navigate('/overall/region')
        break
      case '7':
        navigate('/overall/industry')
            break
      case '8':
        navigate('/data/carbon')
            break
      case'9':
        navigate('../BaiduMap')
            break
      case'sub6':
        navigate('b')
            break
      case'sub7':
        navigate('/data/analysis')
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
