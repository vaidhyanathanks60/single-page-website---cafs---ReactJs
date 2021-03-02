import React from 'react';
import Slide from '../components/common/home/Slide';
import Faq from '../components/common/home/Faq';
import About from '../components/common/home/about';

 function Home() {
    return (
        <div className="main">
            <Slide />
            <About />
            <Faq />
        </div>

    );
}

export default Home;