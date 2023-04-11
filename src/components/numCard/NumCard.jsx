import React from 'react'
import { Card } from 'antd'

export const NumCard = (props) => {
  console.log(props)
  const { content, title } = props

  return (
    <div>
      <Card title={title} bordered={true} style={{ height: '30vh' }}>
        {Array.isArray(content) ? (
          content.map((item, key) => {
            return <p key={key}>{item}</p>
          })
        ) : (
          <p>{content}</p>
        )}
      </Card>
    </div>
  )
}
