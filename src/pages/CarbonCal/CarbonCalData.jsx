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
    companyName: '攀钢集团成都有限公司',
    carbonEmitting: 32,
    address: '四川省成都市青羊区',
  },
  {
    key: '2',
    companyName: '成都玉龙化工有限公司',
    carbonEmitting: 78,
    address: '四川省成都市青羊区',
  },
  {
    key: '3',
    companyName: '郫都区企业',
    carbonEmitting: 16,
    address: '四川省成都市郫都区',
  },
  {
    key: '4',
    companyName: '扬子江药业集团',
    carbonEmitting:89,
    address: '四川省成都市都江堰区',
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
