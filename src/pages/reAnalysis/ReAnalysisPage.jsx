import React from 'react'
import { Row, Col, Typography, Card } from 'antd'
import { Chart, NumDes } from '../../components'

const { Text, Title } = Typography

export const ReAnalysisPage = () => {
  return (
    <>
      <Title level={3}>实时数据</Title>
      <Row gutter={16}>
        <Col span={6}>
          <NumDes top={0} bottom={0} />
        </Col>
        <Col span={6}>
          <NumDes top={1} bottom={1} />
        </Col>
        <Col span={6}>
          <NumDes top={2} bottom={2} />
        </Col>
        <Col span={6}>
          <NumDes top={3} bottom={3} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Chart />
        </Col>
      </Row>
    </>
  )
}
