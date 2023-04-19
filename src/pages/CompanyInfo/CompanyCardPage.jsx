import React from 'react';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';
import CompanyDetailPage from "./CompanyDetailPage";
import {useNavigate} from "react-router-dom";
const { Meta } = Card;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',

};

export default function CompanyCardPage (){
    const navigate=useNavigate()
    const jump2Detail=()=>{
        navigate('/company/companyDetail')
    }



    return(

         <>
             <div style={{}}>

            <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}><img style={{verticalAlign:'middle',marginLeft:'37%' }} align='center' width='370px' height='160px' src='https://img0.baidu.com/it/u=3052033135,2884109169&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281'/></h3>
                </div>
                <div>
                  <h3 style={contentStyle}><img style={{verticalAlign:'middle',marginLeft:'37%' }} align='center' width='370px' height='160px' src='https://img2.baidu.com/it/u=2766579125,2089584920&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'/> </h3>
                </div>
                <div>
                  <h3 style={contentStyle}><img style={{verticalAlign:'middle',marginLeft:'37%' }} align='center' width='370px' height='160px' src='https://img0.baidu.com/it/u=2793500466,1187489650&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500'/></h3>
                </div>
                <div>
                  <h3 style={contentStyle}><img style={{verticalAlign:'middle',marginLeft:'37%' }} align='center' width='370px' height='160px' src='https://img2.baidu.com/it/u=3583589165,4087941247&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'/></h3>
                </div>
              </Carousel>
        <Row>

                <Col span={8}>

                <Card
                hoverable
                style={{width: 240}}
                cover={<img height={'150px'} width={'150px'}  alt="example" src="https://img2.baidu.com/it/u=2857169278,4009073881&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=220"/>}
                //点击跳转到detail页面
                onClick={jump2Detail}
                >
                <Meta title="成都玉龙化工有限公司" description="官方网站：http://m.cdylhg.com/">

                    </Meta>
                    {/*<a href='http://m.cdylhg.com/'>*/}
                    {/*   官网*/}
                    {/*</a>*/}
                </Card>

            </Col>


            <Col span={8}>
                <Card
                hoverable
                style={{width: 240}}
                cover={<img height={'150px'} width={'150px'} alt="example" src="https://img1.baidu.com/it/u=2111446879,1969851640&fm=253&fmt=auto&app=138&f=JPEG?w=481&h=241"/>}
                // onClick={jump2Detail}
                >
                <Meta title="攀钢集团成都有限公司" description="官方网站：https://www.pzhsteel.com.cn/"/>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                hoverable
                style={{width: 240}}
                cover={<img height={'150px'} width={'150px'} alt="example" src="https://img0.baidu.com/it/u=2800351648,392932574&fm=253&fmt=auto&app=138&f=JPEG?w=393&h=289"/>}
                // onClick={jump2Detail}
                >
                <Meta title="成都瀚江新材科技股份有限公司" description="官方网站：https://cdhj.bmlink.com/"/>
                </Card>
            </Col>


        </Row>



            </div>


    </>
        )


};
