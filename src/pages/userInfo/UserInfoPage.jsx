import React from 'react'
import { Row, Col, Typography, Card } from 'antd'
import { NumDes, Chart } from '../../components'
import { AreaChartOutlined, DashboardOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

export const UserInfoPage = () => {
  return (
    <>
      {/* 文字提示行 */}
      <Row gutter={16}>
        {/* 概况 */}
        <Col span={8}>
          <DashboardOutlined />
          <Text> 概况</Text>
        </Col>

        {/* 排污设施情况 */}
        <Col span={8}>
          <DashboardOutlined />
          <Text> 排污设施情况</Text>
        </Col>

        {/* 设备执行情况 */}
        <Col span={8}>
          <DashboardOutlined />
          <Text> 设备执行情况</Text>
        </Col>
      </Row>

      {/* 卡片行 */}
      <Row gutter={16}>
        {/* 概况 */}
        <Col span={8}>
          <NumDes top={3} bottom={0} />
        </Col>
        {/* 排污设施情况 */}
        <Col span={4}>
          <NumDes top={5} bottom={4} />
        </Col>
        <Col span={4}>
          <NumDes top={7} bottom={6} />
        </Col>
        {/* 设备执行情况 */}
        <Col span={4}>
          <NumDes top={9} bottom={8} />
        </Col>
        <Col span={4}>
          <NumDes top={11} bottom={10} />
        </Col>
      </Row>

      {/* 图表行 */}
      <Row gutter={16}>
        {/* 功率 */}
        <Col span={12}>
          <AreaChartOutlined />
          <Text> 图1</Text>
          <Chart />
        </Col>
        {/* 各行业占比 */}
        <Col span={12}>
          <AreaChartOutlined />
          <Text> 图2</Text>
          <Chart />
        </Col>
      </Row>
      <Row></Row>
    </>
  )
}
