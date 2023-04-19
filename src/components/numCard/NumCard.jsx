import React from 'react'
import './NumCard.css'

export const NumCard = (props) => {
  const { content, title } = props

  return (
    <div>
      <div className="card">
        <div className="title">{title}</div>
        <div className="description">
          {Array.isArray(content) ? (
            content.map((item, key) => {
              return <p key={key}>{item}</p>
            })
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  )
}
