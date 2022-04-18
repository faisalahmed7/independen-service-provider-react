import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Classes></Classes>
            <Footer></Footer>
        </div>
    );
};

export default Home;