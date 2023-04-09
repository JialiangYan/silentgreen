import React from 'react'
import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
)

export const Loading = () => {
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
