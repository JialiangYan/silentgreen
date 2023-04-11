import { Space, Switch, Table } from 'antd';
import React,{ useState } from 'react';
const columns = [
  {
    title: '条目名称',
    dataIndex: 'carbonItem',
    key: 'carbonItem',
  },
  {
    title: '排放量',
    dataIndex: 'emitting',
    key: 'emitting',
    width: '12%',
  },
  {
    title: '添加时间',
    dataIndex: 'addTime',
    key: 'addTime',
    width: '12%',
  },
  {
    title: '最后编辑时间',
    dataIndex: 'lastModiTime',
    width: '12%',
    key: 'lastModiTime',
  },
  {
    title: '计算公司',
    dataIndex: 'calCompany',
    width: '12%',
    key: 'calCompany',
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '12%',
    key: 'action',
    render: () => <a>删除</a>,
  },
];
const data = [
  {
    key: 1,
    carbonItem: '化石燃料',
    emitting:34,
    addTime:'2023-12-3' ,
    lastModiTime:'2023-12-7',
    calCompany:'企业1',

    children: [
      {
        key: 11,
        carbonItem: '煤',
        emitting:34,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',
        calCompany:'企业1',

      },
      {
        key: 12,
        carbonItem: '硫类化合物',
            emitting:34,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',
        calCompany:'企业1',

        children: [
          {
            key: 121,
            carbonItem: 'SO2',
                emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',
            calCompany:'企业1',

          },
          {
            key: 122,
            carbonItem: 'SO3',
                emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',
            calCompany:'企业1',

          },
        ],
      },

    ],
  },
  {
    key: 2,
    carbonItem: '用电排放',
        emitting:34,
    addTime:'2023-12-3' ,
    lastModiTime:'2023-12-7',
    calCompany:'企业1',


  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export  default function CarbonSources () {
  const [checkStrictly, setCheckStrictly] = useState(false);
  return (
    <>
      <Space
        align="center"
        style={{
          marginBottom: 16,
        }}
      >
        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
          checkStrictly,
        }}
        dataSource={data}
      />
    </>
  );
};
