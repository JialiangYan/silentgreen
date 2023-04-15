import { Space, Switch, Table } from 'antd';
import React,{ useState } from 'react';
const columns = [
  {
    title: '条目名称',
    dataIndex: 'carbonItem',
    key: 'carbonItem',
  },
  {
    title: '排放因子（kg/GJ）',
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
    title: '计算公式',
    dataIndex: 'calFormula',
    width: '12%',
    key: 'calFormula',
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '12%',
    key: 'action',
    render: () => <a>添加</a>,
  },
];
const data = [
  {
    key: 1,
    carbonItem: '固定源燃烧',
    addTime:'2023-12-3' ,
    lastModiTime:'2023-12-7',
    calFormula:'燃料消耗量• 排放因子',

    children: [
      {
        key: 11,
        carbonItem: '原油',
        emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',


      },
      {
        key: 12,
        carbonItem: '沥青质矿物燃料',
            emitting:77.0,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',


      },
      {
        key: 13,
        carbonItem: '液体天然气',
            emitting:64.2,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',
        calCompany:'企业1',

      },
      {
        key: 14,
        carbonItem: '动力汽油',
            emitting:69.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
      {
        key: 15,
        carbonItem: '航空汽油',
            emitting:70.0,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
      {
        key: 16,
        carbonItem: '航空煤油',
            emitting:71.5,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
      {
        key: 17,
        carbonItem: '页岩油',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
      {
        key: 18,
        carbonItem: '汽油/柴油',
            emitting:74.1,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 19,
        carbonItem: '残留燃料油',
            emitting:77.4,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 110,
        carbonItem: '液化石油气',
            emitting:63.1,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 111,
        carbonItem: '乙烷',
            emitting:61.6,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 112,
        carbonItem: '石油精',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 113,
        carbonItem: '沥青',
            emitting:80.7,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 114,
        carbonItem: '润滑剂',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 115,
        carbonItem: '石油焦炭',
            emitting:97.5,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 116,
        carbonItem: '提炼原料',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 117,
        carbonItem: '炼厂气',
            emitting:57.6,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 118,
        carbonItem: '固体石蜡',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 119,
        carbonItem: '石油溶剂',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 120,
        carbonItem: '其他石油',
            emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },

    ],
  },
  {
    key: 2,
    carbonItem: '道路运输',
    addTime:'2023-12-3' ,
    lastModiTime:'2023-12-7',
    calFormula: '∑ [燃料a• EFa ]',

    children:[
      {
        key: 21,
        carbonItem: '动力汽油',
        emitting:69.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 22,
        carbonItem: '汽油/柴油',
        emitting:74.1,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 23,
        carbonItem: '液化石油气',
        emitting:63.1,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 24,
        carbonItem: '煤油',
        emitting:71.9,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 25,
        carbonItem: '润滑剂 b',
        emitting:73.3,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 26,
        carbonItem: '压缩天然气',
        emitting:56.1,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
        {
        key: 27,
        carbonItem: '液化天然气',
        emitting:56.1,
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',

      },
    ]
  },
  {
    key: 3,
    carbonItem: '非道路移动源和机械',
    addTime:'2023-12-3' ,
    lastModiTime:'2023-12-7',
    calFormula: '∑[ 燃料j •EFj]',
    children: [
      {
        key: 31,
        carbonItem: '柴油',
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',
        children:[
          {
            key: 311,
            carbonItem: '农业',
            emitting:74.1,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 312,
            carbonItem: '林业',
            emitting:74.1,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 313,
            carbonItem: '工业',
            emitting:74.1,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 314,
            carbonItem: '家庭',
            emitting:74.1,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },

        ]


      },
        {
        key: 32,
        carbonItem: '动力汽油 4 冲程',
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',
        children:[
          {
            key: 321,
            carbonItem: '农业',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 322,
            carbonItem: '林业',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 323,
            carbonItem: '工业',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 324,
            carbonItem: '家庭',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },

        ]
      },
        {
        key: 33,
        carbonItem: '动力汽油 2 冲程',
        addTime:'2023-12-3' ,
        lastModiTime:'2023-12-7',
        children:[
          {
            key: 331,
            carbonItem: '农业',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 332,
            carbonItem: '林业',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 333,
            carbonItem: '工业',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
            {
            key: 334,
            carbonItem: '家庭',
            emitting:34,
            addTime:'2023-12-3' ,
            lastModiTime:'2023-12-7',

          },
        ]
      }

    ]
  }
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
