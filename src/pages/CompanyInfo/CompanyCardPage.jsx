import React from 'react';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function CompanyCardPage (){
    return(
         <>
            <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
        <Row>
            <Col span={8}>
                <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://th.bing.com/th/id/OIP.7S_LlcwDGh3hQ0Ij9tMSywHaFY?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>}
                >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </Col>

            <Col span={8}>
                <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://th.bing.com/th/id/OIP.7S_LlcwDGh3hQ0Ij9tMSywHaFY?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>}
                >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://th.bing.com/th/id/OIP.7S_LlcwDGh3hQ0Ij9tMSywHaFY?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>}
                >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </Col>


        </Row>


    </>
        )


};
