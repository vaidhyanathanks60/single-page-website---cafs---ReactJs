import React from 'react';
import { Row, Col } from 'antd';

const items = [
    {
        key:1,
        title:'Safe and Secure ',
        content:'We prioritize customer’s security more than ours. No sensitive personal information is left to pass out.'
    },
    {
        key:2,
        title:'Easy Account Opening',
        content:'With PAN number and bank account layers, you can now easily open your account with CAFS Money.'

        
    },
    {
        key:3,
        title:'Service',
        content:'We make you become a responsible investor with various mutual fund investing policies, we invest in mutual fund.'
    },
    {
        key:4,
        title:'Transparent',
        content:'Transactions are held in customer’s name and no further demat account needed.'
    },
    {
        key:5,
        title:'Easy Accessible',
        content:'No commission or Kick-backs are funded for opening a new policy and is easily accessible.'    },
    {
        key:6,
        title:'Smart Compare',
        content:'Right information at the right time is assured with notifications on scheduled events.'
    },
]

function About(){
    return(
        <div className="block aboutBlock">
            <div className="container">
                <div className="titleHolder">
                    <h2>Our Strategy </h2>
                    <p>of Working-Flow</p>
                </div>
                <div className="contentHolder">
                    <p>Wealth in Mutual Funds is created by robust planning,
                     emotional control and disciplined execution.</p>
                    <p> At CAFS, we assist you right from planning your investments to achieving your financial goals.</p>
                    <img src='https://cafsmoney.com/images/home/mutual_online.png' alt="" />
                </div>
                
                <Row gutter={[24, 24]}>
                   {items.map(item =>{
                       return (
                        <Col span={8}>
                            <div className="content">
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>    
                            </div>
                        </Col>
                       );
                   })} 
                </Row>
            </div>    
        </div>    
    );
}
export default About;