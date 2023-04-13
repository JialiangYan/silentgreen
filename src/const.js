import * as I from '@ant-design/icons'
import { lazy } from 'react'
import React from 'react'

const sideItems = [
  {
    label: '访问分析',
    key: 'sub1',
    icon: <I.AreaChartOutlined />,
    sub: [
      {
        label: '实时数据',
        key: '1',
        path: '/analysis/reAnalysis',
        element: lazy(() => import('./pages/reAnalysis')),
      },
      {
        label: '历史趋势',
        key: '2',
        path: '/analysis/histTrend',
        element: lazy(() => import('./pages//histTrend')),
      },
    ],
    identity: 'manager',
  },
  {
    label: '企业分析',
    key: 'sub2',
    icon: <I.AreaChartOutlined />,
    sub: [
      {
        label: '企业信息',
        key: '3',
        path: '/company/companyInfo',
        element: lazy(() => import('./pages/CompanyCard/CompanyCardPage')),
      },
      {
        label: '企业画像',
        key: '4',
        path: '/company/companyPortrait',
        element: lazy(() => import('./pages/reAnalysis')),
      },
      {
        label: '申报数据',
        key: '5',
        path: '/company/companyData',
        element: lazy(() => import('./pages/reAnalysis')),
      },
    ],
    identity: 'manager',
  },
  {
    label: '总体分析',
    key: 'sub3',
    icon: <I.PieChartOutlined />,
    sub: [
      {
        label: '区域信息',
        key: '6',
        path: '/overall/region',
        element: lazy(() => import('./pages/reAnalysis')),
      },
      {
        label: '行业信息',
        key: '7',
        path: '/overall/industry',
        element: lazy(() => import('./pages/reAnalysis')),
      },
    ],
    identity: 'manager',
  },
  {
    label: '碳排查',
    key: 'sub4',
    icon: <I.RadarChartOutlined />,
    sub: [
      {
        label: '核放数据',
        key: '8',
        path: '/carbon/carbonData',
        element: lazy(() => import('./pages/reAnalysis')),
      },
      {
        label: '排放源',
        key: '9',
        path: '/carbon/carbonSrc',
        element: lazy(() => import('./pages/reAnalysis')),
      },
    ],
    identity: 'manager',
  },
  {
    label: '绿色绩效',
    key: '10',
    icon: <I.RadarChartOutlined />,
    element: lazy(() => import('./pages/reAnalysis')),
    path: '/greenGrade',
    identity: 'manager',
  },
  {
    label: '绿色漂洗',
    key: '11',
    icon: <I.RadarChartOutlined />,
    element: lazy(() => import('./pages/reAnalysis')),
    path: '/greenWashing',
    identity: 'manager',
  },
  {
    label: '申报',
    key: '12',
    icon: <I.EditOutlined />,
    element: lazy(() => import('./pages/reAnalysis')),
    path: '/declare',
    identity: 'company',
  },
  {
    label: '反馈',
    key: '13',
    icon: <I.EditOutlined />,
    element: lazy(() => import('./pages/reAnalysis')),
    path: '/feedback',
    identity: 'company',
  },
  // 兜底页面，无匹配作为默认页
  {
    path: '',
    element: lazy(() => import('./pages/reAnalysis')),
  },
]

// 扁平化
const flatten = function (arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(!!curr.sub ? curr.sub : curr)
  }, [])
}

export { sideItems, flatten }
