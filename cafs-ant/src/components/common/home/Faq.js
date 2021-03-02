import React from 'react';
import { Collapse } from 'antd';
import { Button } from 'antd';


const { Panel } = Collapse;

function Faq(){
    return(
       <div className="block-faqblock" style={{diplay:'flex',backgroundColor:'lightgray'}}>
           <div className="container">
                <div className="titleHolder" >
                    <h2>Frequently Asked Questions</h2>
                </div>
              <Collapse accordion>
                 <Panel header="What is SIP?" key="1">
                     <p>Systematic Investment Plan, commonly known as S.I.P. allows you to invest regularly, a fixed sum in your selected mutual fund. In S.I.P, a fixed amount is deducted from your bank account every month and directed towards the mutual fund you choose to invest in.</p>
                 </Panel>
                 <Panel header="What are the benefits of SIP?" key="2">
                     <p>S.I.P offers many benefits. A few of them are: Brings Discipline:- Investing on a pre-set date every month, makes you set aside a fixed sum of money to invest and gradually turns you into a disciplined investor. Power of Compounding: Unlike traditional investment options where interest is calculated on the initial investment at a pre-defined frequency, Mutual Funds provide you market-linked returns generated on a daily basis on the amount accumulated till the previous day. Benefit of Rupee Cost Averaging: You get more units when the market goes down and less when the market goes up. Thus, you average-out the cost of total units bought. It is a convenient method of investing as you can start with a minimum amount of INR 500 per month.</p>
                 </Panel>
                 <Panel header="How to start an SIP?" key="3">
                     <p>Starting an S.I.P is easy. First, you need to select a fund that is best suited to your long-term goals and risk profile. You can do this yourself, or you can take the help of a professional financial advisor. Once you have zeroed-in on a fund, you need to fill the S.I.P application form, post which a fixed amount is deducted from your bank account every month and directed towards the mutual fund you choose to invest in.</p>
                 </Panel>
              </Collapse>
                <div className="supports" style={{display:'flex',justifyContent: 'center' ,backgroundColor:'lightgray'}}>
                  <div className="support" style={{ display: 'flex', justifyContent: 'center' , padding: '35px'}} >
                        <h3>You Don't know About Mutual Fund, CAFS Money Will Help You</h3>
                  </div>   
                  <div className="buttons" style={{ display: 'flex', justifyContent: 'center', padding:'35px'}}>
                     <Button type="primary">Any Help</Button>         
                     <Button type="secondary">Start Investing</Button>         
                  </div>
                </div>
            </div>  
        </div>    
        );
}

export default Faq;