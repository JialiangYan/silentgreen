import React from 'react'
import ReactECharts from 'echarts-for-react'
// 在此组件中绘制一个简单的分布图
export const CircleChart = (props) => {
  const { title1, title2, value1, value2 } = props.propsData
  // 返回分布图的配置对象
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: '测试',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: value1, name: title1 },
          { value: value2, name: title2 },
        ],
      },
    ],
  }
  return (
    <div>
      <ReactECharts option={option} />
    </div>
  )
}
