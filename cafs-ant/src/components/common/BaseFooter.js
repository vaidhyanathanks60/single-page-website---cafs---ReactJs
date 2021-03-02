import React from 'react';
import { BackTop } from 'antd';
import './BaseFooter.css';

function BaseFooter(){
    return(
        <div className="wrapper">
            <div className="foot">
                <div className="link">
                    <a href="http://www.google.com">CAFS</a>
                </div> 
                <ul className="social">
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                    <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                    <li><a href="https://www.github.com">GitHub</a></li>
                    <li><a href="https://www.youtube.com">YouTube</a></li>
                </ul>
            </div>

              
            <div className="copyrights">
                 &copy;{new Date().getFullYear()} CAFS | All right reserved | Terms of Service | Privacy 
            </div>
            <BackTop></BackTop>

        </div> 
   );
}   

export default BaseFooter;