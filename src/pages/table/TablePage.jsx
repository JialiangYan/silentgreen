import React from 'react'
import { Space, Table } from 'antd'

const { Column } = Table

export const TablePage = ({ data }) => (
  <Table dataSource={data}>
    <Column title="项目名称" dataIndex="name" key="name" />
    <Column title="碳排放因子" dataIndex="factor" key="factor" />
    <Column title="地址" dataIndex="address" key="address" />
    <Column
      title="操作"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>删除</a>
        </Space>
      )}
    />
  </Table>
)
