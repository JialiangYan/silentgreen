import React from 'react'
import ReactECharts from 'echarts-for-react'

// 在此组件中绘制一个简单的折线图
export const Chart = () => {
  // 返回折线图的配置对象
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }
  return (
    <div>
      <ReactECharts option={option} />
    </div>
  )
}
