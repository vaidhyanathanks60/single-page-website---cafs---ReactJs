import React from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';




const items = [
    {
        key:'1',
        title:'One',
        content:'Tax Saving Funds',
    },
    {
        key:'2',
        title:'Two',
        content:'Balanced Funds',
    },
    {
        key:'3',
        title:'Three',
        content:'Low Risk Better than FD',
    },
    {
        key:'4',
        title:'Four',
        content:'Fund with best returns',
    },
    {
        key:'5',
        title:'Five',
        content:'Debt Funds',
    },
    {
        key:'6',
        title:'Six',
        content:'Top Rated Funds',
    },
    {
        key:'7',
        title:'Seven',
        content:'Equity Funds',
    },
    {
        key:'8',
        title:'Eight',
        content:'Insta Redeem Funds',
    }
]

 function Slide() {
    return (
        <div className="heroBlock">
            <Carousel autoplay >
                {items.map(item =>{
                    return(
                        <div className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                <Button type="primary">Learn More...</Button>

                                </div>
                            </div>

                        </div>    
                    );
                })}   
            </Carousel>
        </div>
    )
}

export default Slide;