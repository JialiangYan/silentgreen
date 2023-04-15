import { Table } from 'antd';
import React, {useEffect} from 'react'
import axiosfunc from "../../utils/axiosfunc";




const columns = [
{
    title: '公司名称',
    width: 100,
    dataIndex: 'companyname',
    key: 'companyname',
    fixed: 'left',
  },
  {
    title: '联系方式',
    width: 100,
    dataIndex: 'teleNum',
    key: 'teleNum',
    fixed: 'left',
  },
  {
    title: '原油',
    dataIndex: '原油',
    key: '1',
    width: 150,
  },
  {
    title: '沥青质矿物燃料',
    dataIndex: '沥青质矿物燃料',
    key: '2',
    width: 150,
  },
  {
    title: '液体天然气',
    dataIndex: '液体天然气',
    key: '3',
    width: 150,
  },
  {
    title: '动力汽油_油',
    dataIndex: '动力汽油_油',
    key: '4',
    width: 150,
  },
  {
    title: '航空汽油',
    dataIndex: '航空汽油',
    key: '5',
    width: 150,
  },
  {
    title: '航空煤油',
    dataIndex: '航空煤油',
    key: '6',
    width: 150,
  },
  {
    title: '页岩油',
    dataIndex: '页岩油',
    key: '7',
    width: 150,
  },
  {
    title: '汽油_柴油_油',
    dataIndex: '汽油_柴油_油',
    key: '7',
    width: 150,
  },
  {
    title: '残留燃料油',
    dataIndex: '残留燃料油',
    key: '7',
    width: 150,
  },
  {
    title: '液化石油气',
    dataIndex: '液化石油气',
    key: '7',
    width: 150,
  },
  {
    title: '乙烷',
    dataIndex: '乙烷',
    key: '7',
    width: 150,
  },
  {
    title: '石油精',
    dataIndex: '石油精',
    key: '7',
    width: 150,
  },
    {
    title: '沥青',
    dataIndex: '沥青',
    key: '7',
    width: 150,
  },
    {
    title: '润滑剂',
    dataIndex: '润滑剂',
    key: '7',
    width: 150,
  },
    {
    title: '石油焦炭',
    dataIndex: '石油焦炭',
    key: '7',
    width: 150,
  },
    {
    title: '提炼原料',
    dataIndex: '提炼原料',
    key: '7',
    width: 150,
  },
    {
    title: '动力汽油',
    dataIndex: '动力汽油',
    key: '7',
    width: 150,
  },
    {
    title: '汽油_柴油',
    dataIndex: '汽油_柴油',
    key: '7',
    width: 150,
  },
    {
    title: '液化石油气',
    dataIndex: '液化石油气',
    key: '7',
    width: 150,
  },
    {
    title: '煤油',
    dataIndex: '煤油',
    key: '7',
    width: 150,
  },
    {
    title: '润滑剂_b',
    dataIndex: '润滑剂_b',
    key: '7',
    width: 150,
  },
    {
    title: '压缩天然气',
    dataIndex: '压缩天然气',
    key: '7',
    width: 150,
  },
    {
    title: '液化天然气',
    dataIndex: '液化天然气',
    key: '7',
    width: 150,
  },
    {
    title: '柴油',
    dataIndex: '柴油',
    key: '7',
    width: 150,
      children:[
        {
          title: '柴油_农业',
          dataIndex: '柴油_农业',
          key: '7',
          width: 150,
        },
          {
          title: '柴油_林业',
          dataIndex: '柴油_林业',
          key: '7',
          width: 150,
        },
          {
          title: '柴油_工业',
          dataIndex: '柴油_工业',
          key: '7',
          width: 150,
        },
          {
          title: '柴油_家庭',
          dataIndex: '柴油_家庭',
          key: '7',
          width: 150,
        },
      ]
  },
  {
    title: '动力汽油4冲程',
    dataIndex: '动力汽油4冲程',
    key: '7',
    width: 150,
      children:[
        {
          title: '动力汽油4冲程_农业',
          dataIndex: '动力汽油4冲程_农业',
          key: '7',
          width: 150,
        },
          {
          title: '动力汽油4冲程_林业',
          dataIndex: '动力汽油4冲程_林业',
          key: '7',
          width: 150,
        },
          {
          title: '动力汽油4冲程_工业',
          dataIndex: '动力汽油4冲程_工业',
          key: '7',
          width: 150,
        },
          {
          title: '动力汽油4冲程_家庭',
          dataIndex: '动力汽油4冲程_家庭',
          key: '7',
          width: 150,
        },
      ]
  },
    {
    title: '动力汽油2冲程',
    dataIndex: '动力汽油2冲程',
    key: '7',
    width: 150,
      children:[
        {
          title: '动力汽油2冲程_农业',
          dataIndex: '动力汽油2冲程_农业',
          key: '7',
          width: 150,
        },
          {
          title: '动力汽油2冲程_林业',
          dataIndex: '动力汽油2冲程_林业',
          key: '7',
          width: 150,
        },
          {
          title: '动力汽油2冲程_工业',
          dataIndex: '动力汽油2冲程_工业',
          key: '7',
          width: 150,
        },
          {
          title: '动力汽油2冲程_家庭',
          dataIndex: '动力汽油2冲程_家庭',
          key: '7',
          width: 150,
        },
      ]
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const getCompanyInfo=(companyname)=>{
  console.log(companyname)
      axiosfunc('get','companyInfo/getCompanyInfo',companyname).then(
          (res)=>{
            console.log('get response',res)
          }
      )
}

const data = [
  {
    key:'1',
    companyname:'成都玉龙化工有限公司',
    teleNum:'19980823984'
  },
  {
    key:'2',
    companyname: '攀钢集团成都有限公司',
    teleNum: '18180867726'
  },
    {
      key:'3',
    companyname: '扬子江药业集团',
    teleNum: '18177263534'
  },
    {
      key:'4',
    companyname: '郫都区企业',
    teleNum: '15198662771'
  }


];
// for (let i = 0; i < 5; i++) {
//   data.push({
//     key: i,
//     companyname: `Edward ${i}`,
//     teleNum: '32',
//     原油: '',
//     沥青质矿物燃料: '',
//     液体天然气: '',
//     动力汽油_油: '',
//     航空汽油: '',
//     航空煤油: '',
//     页岩油: '',
//     汽油_柴油_油:'',
//     液化石油气_油:'',
//     乙烷:'',
//     石油精:'',
//     沥青:'',
//     润滑剂:'',
//     石油焦炭:'',
//     提炼原料:'',
//     动力汽油:'',
//     汽油_柴油:'',
//     液化石油气:'',
//     煤油:'',
//     润滑剂_b:'',
//     压缩天然气:'',
//       液化天然气:'',
//       柴油_农业:'',
//     柴油_林业:'',
//     柴油_工业:'',
//     柴油_家庭:'',
//     动力汽油4冲程_农业:'',
//     动力汽油4冲程_林业:'',
//     动力汽油4冲程_工业:'',
//     动力汽油4冲程_家庭:'',
//     动力汽油2冲程_农业:'',
//     动力汽油2冲程_林业:'',
//     动力汽油2冲程_工业:'',
//     动力汽油2冲程_家庭:'',
//
//   });
// }
export default  function CompanyDataPage () {

  // useEffect(() => {
  //   getCompanyInfo({'companyname':'成都玉龙化工有限公司'})
  // }, [])

  return(
        <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
      )

};
