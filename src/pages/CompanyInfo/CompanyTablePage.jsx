import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import React  from "react";
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    companyname: '绿色企业1',
    teleNum: 111111111,
    address: '四川省成都市',
    scCode:'1111111',

  },
  {
    key: '2',
    companyname: '绿色企业2',
    teleNum: 222222222,
    address: '四川省宜宾市',
    scCode:'1111111',

  },
  {
    key: '3',
    companyname: '绿色企业3',
    teleNum: 33333333,
    address: '四川省攀枝花市',
    scCode:'1111111',

  },
  {
    key: '4',
    companyname: '绿色企业4',
    teleNum: 444444,
    address: '四川省成都市',
    scCode:'1111111',

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
      title: 'CompanyName',
      dataIndex: 'companyname',
      key: 'companyname',
      width: '30%',
      ...getColumnSearchProps('companyname'),
    },
    {
      title: 'teleNum',
      dataIndex: 'teleNum',
      key: 'teleNum',
      width: '20%',
      ...getColumnSearchProps('teleNum'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
     {
      title: 'scCode',
      dataIndex: 'scCode',
      key: 'scCode',
      width: '20%',
      ...getColumnSearchProps('scCode'),
    },

           {
      title: 'companyDetail',
      dataIndex: 'companyDetail',
      key: 'companyDetail',
      width: '20%',
      render: () => <a>详情</a>,
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
