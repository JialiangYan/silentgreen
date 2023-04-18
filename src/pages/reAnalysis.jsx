import React from 'react'
import { NumCard } from '../components'
import { Col, Row } from 'antd'
import { reAnalysisData } from '../mock/data'

export default function reAnalysis() {
  return (
    <div className="reAnalysis">
      <div className="content">
        <Row gutter={[50, 50]}>
          <Col span={12}>
            <NumCard {...reAnalysisData[0]} />
          </Col>
          <Col span={12}>
            <NumCard {...reAnalysisData[1]} />
          </Col>
          <Col span={12}>
            <NumCard {...reAnalysisData[2]} />
          </Col>
          <Col span={12}>
            <NumCard {...reAnalysisData[3]} />
          </Col>
        </Row>
      </div>
    </div>
  )
}
