import React from 'react'
import { overall } from '../../mock/companyData'
import { Row, Col, Typography, Card, Statistic } from 'antd'
const { Text, Title } = Typography

export const NumDes = (props) => {
  const { top, bottom } = props
  let width = 6
  if (top - bottom === 1) {
    width = 12
  }
  if (top - bottom === 0) {
    width = 24
  }

  return (
    <Card bordered={true}>
      <Row gutter={16}>
        {overall.map((item, index) => {
          if (index <= top && index >= bottom)
            return (
              <Col key={index} span={width}>
                <Statistic title={item.description} value={item.num} />
              </Col>
            )
        })}
      </Row>
    </Card>
  )
}
