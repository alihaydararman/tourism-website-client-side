import React from 'react';
import Teams from '../Teams/Teams';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Teams></Teams>
        </div>
    );
};

export default Home;