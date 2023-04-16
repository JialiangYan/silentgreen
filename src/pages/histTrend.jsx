import React from 'react'
import { Col, Row } from 'antd'
import { Chart } from '../components'
import { chartData } from '../mock/data'

export default function hisTrend() {
  return (
    <div>
      <div className="reAnalysis">
        <div className="content">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Chart data={chartData[0]} />
            </Col>
            <Col span={12}>
              <Chart data={chartData[1]} />
            </Col>
            <Col span={12}>
              <Chart data={chartData[2]} />
            </Col>
            <Col span={12}>
              <Chart data={chartData[3]} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
