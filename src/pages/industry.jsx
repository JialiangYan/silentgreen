import React from 'react'
import { CircleChart } from '../components'
import { Col, Row } from 'antd'
import './industry.css'
import { circleData } from '../mock/data'
export default function industry() {
  return (
    <div className="wrapper">
      {/* 行业碳排放 */}
      <div className="carbon card">
        <div className="title">行业碳排放</div>
        <div className="subtitle">一大堆对于内容的描述信息</div>
        <div className="content">
          <Row>
            <Col span={12}>
              <div className="data">
                <div className="data-item">行业碳排放平均值</div>
                <div className="data-item">行业碳排放总量</div>
              </div>
            </Col>
            <Col span={12}>
              <CircleChart propsData={circleData[0]} />
            </Col>
          </Row>
        </div>
      </div>

      {/* 行业绿色 */}
      <div className="green card">
        <div className="title">行业绿色</div>
        <div className="subtitle">一大堆对于内容的描述信息</div>
        <div className="content">
          <Row>
            <Col span={12}>
              <div className="data">
                <div className="data-item">行业绿色绩效平均值</div>
                <div className="data-item">行业碳绿色企业数</div>
                <div className="data-item">行业绿色疑似绿漂数</div>
              </div>
            </Col>
            <Col span={12}>
              <CircleChart propsData={circleData[1]} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
