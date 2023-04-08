import { Table } from 'antd';
import React from 'react'
const columns = [
{
    title: 'CompanyName',
    width: 100,
    dataIndex: 'companyname',
    key: 'companyname',
    fixed: 'left',
  },
  {
    title: 'teleNum',
    width: 100,
    dataIndex: 'teleNum',
    key: 'teleNum',
    fixed: 'left',
  },
  {
    title: 'indicator 1',
    dataIndex: 'indicator1',
    key: '1',
    width: 150,
  },
  {
    title: 'indicator 2',
    dataIndex: 'indicator2',
    key: '2',
    width: 150,
  },
  {
    title: 'indicator 3',
    dataIndex: 'indicator3',
    key: '3',
    width: 150,
  },
  {
    title: 'indicator 4',
    dataIndex: 'indicator4',
    key: '4',
    width: 150,
  },
  {
    title: 'indicator 5',
    dataIndex: 'indicator5',
    key: '5',
    width: 150,
  },
  {
    title: 'indicator 6',
    dataIndex: 'indicator6',
    key: '6',
    width: 150,
  },
  {
    title: 'indicator 7',
    dataIndex: 'indicator7',
    key: '7',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    companyname: `Edward ${i}`,
    teleNum: '32',
    indicator1: '空气',
    indicator2: '水',
    indicator3: '废料',
    indicator4: 'SO2',
    indicator5: 'CO2',
    indicator6: 'coal',
    indicator7: 'oil',
  });
}
export const CompanyDataPage = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);
