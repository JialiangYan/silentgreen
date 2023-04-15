import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import React  from "react";
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    companyname: '攀钢集团成都有限公司',
    teleNum: '18180867726',
    address: '四川省成都市青羊区',
    scCode:'',

  },
  {
    key: '2',
    companyname: '成都玉龙化工有限公司',
    teleNum:'19980823984',
    address: '四川省成都市青羊区',
    scCode:'',

  },
  {
    key: '3',
    companyname: '郫都区企业',
    teleNum: '15198662771',
    address: '四川省成都市郫都区',
    scCode:'',

  },
  {
    key: '4',
    companyname: '扬子江药业集团',
    teleNum: '18177263534',
    address: '四川省成都市都江堰区',
    scCode:'',

  },
];
export default function CompanyTablePage  () {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      // if (visible) {
      //   setTimeout(() => searchInput.current?.select(), 100);
      // }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: '公司名称',
      dataIndex: 'companyname',
      key: 'companyname',
      width: '30%',
      ...getColumnSearchProps('companyname'),
    },
    {
      title: '联系电话',
      dataIndex: 'teleNum',
      key: 'teleNum',
      width: '20%',
      ...getColumnSearchProps('teleNum'),
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
     {
      title: '社会统一信用代码',
      dataIndex: 'scCode',
      key: 'scCode',
      width: '20%',
      ...getColumnSearchProps('scCode'),
    },

           {
      title: '公司详情',
      dataIndex: 'companyDetail',
      key: 'companyDetail',
      width: '20%',
      render: () => <a>详情</a>,
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
