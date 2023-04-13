import React from 'react'
import { Badge, Descriptions } from 'antd';
export default  function CompanyDetailPage  () {
  return(
      <Descriptions title="Company Info" bordered>
    <Descriptions.Item label="公司名称">成都玉龙化工有限公司</Descriptions.Item>
    <Descriptions.Item label="公司类别">化工类</Descriptions.Item>
    <Descriptions.Item label="官方网站" span={2}>
      <a href='http://m.cdylhg.com/'>
        http://m.cdylhg.com/
      </a>
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>

    <Descriptions.Item label="Config Info">
成都玉龙化工有限公司始建于1958年，位于成都市青白江区，是国家高新技术企业，成都市重点新材料企业和重点培育的企业集团。现有年产20万立方米三聚氰胺泡沫、20万吨合成氨、55万吨化肥、5000吨MCA阻燃剂、2000吨有机硅催化剂、3000吨PVB树脂、1000吨聚脲和3000吨水处理剂的生产能力。

公司科技实力较强，拥有省市两级企业技术中心和院士（专家）创新工作站，具有多项自主知识产权和发明专利，其中：三聚氰胺具有质量优、装置能耗低、周期长的特点！MCA阻燃剂阻燃性能可达V0级！有机硅催化剂**市场占有率较高！

公司通过了ISO9001质量、ISO14001环境管理体系认证和清洁生产审核，并先后荣获“中国化工企业500强”“成都市十大创新力企业”“**环境优美工厂”和四川省命名的“玉龙化工工业生态园区”等荣誉。

公司坚持“诚信为本，顾客至上”的营销理念，连续多年被评为“四川省质量信誉3A级企业”。“裕农”牌碳酸氢铵曾是部优产品，“玉晶”牌三聚氰胺和“裕农”牌尿素是四川省**产品，三聚氰胺泡沫和阻燃剂产品是四川省地方名优产品。
    </Descriptions.Item>
  </Descriptions>
      )

}


