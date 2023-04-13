import React from 'react'
import ReactECharts from 'echarts-for-react'

// 在此组件中绘制一个简单的折线图
export const Chart = (props) => {
  const { data } = props
  const { title, data1, data2 } = data
  // 返回折线图的配置对象
  const option = {
    title: {
      left: 'center',
      text: title,
    },
    xAxis: {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data1,
        type: 'line',
      },
      {
        data: data2,
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
