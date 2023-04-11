import { Table } from 'antd';
import React from 'react'
const columns = [
  {
    title: '公司名称',
    dataIndex: 'companyName',
    filters: [

      {
        text: '化工类企业',
        value: 'Chemistry',
        children: [
          {
            text: '企业3',
            value: '企业3',
          },
          {
            text: '企业4',
            value: '企业4',
          },
        ],
      },
      {
        text: '科技类企业',
        value: 'Technology',
        children: [
          {
            text: '企业1',
            value: '企业1',
          },
          {
            text: '企业2',
            value: '企业2',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.companyName.includes(value),
    width: '30%',
  },
  {
    title: '碳排放总量',
    dataIndex: 'carbonEmitting',
    sorter: (a, b) => a.carbonEmitting - b.carbonEmitting,
  },
  {
    title: '公司地址',
    dataIndex: 'address',
    filters: [
      {
        text: '青羊区',
        value: '青羊区',
      },
      {
        text: '武侯区',
        value: '武侯区',
      },
    ],
    onFilter: (value, record) => record.address.includes(value),
    filterSearch: true,
    width: '40%',
  },
];
const data = [
  {
    key: '1',
    companyName: '企业1',
    carbonEmitting: 32,
    address: '成都市青羊区1号路',
  },
  {
    key: '2',
    companyName: '企业2',
    carbonEmitting: 78,
    address: '成都市武侯区1号路',
  },
  {
    key: '3',
    companyName: '企业3',
    carbonEmitting: 16,
    address: '成都市青羊区5号路',
  },
  {
    key: '4',
    companyName: '企业4',
    carbonEmitting:89,
    address: '成都市武侯区2号路',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
export default function CarbonCalData () {
    return(
             <Table columns={columns} dataSource={data} onChange={onChange} />
        )


}
