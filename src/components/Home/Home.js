import React from 'react';
import Banner from './Banner/Banner';
import OurAchievement from './OurAchivement/OurAchievement';
import OurExpert from './OurExpert/OurExpert';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <OurExpert />
            <OurAchievement />
            <Testimonial />
        </>
    );
};

export default Home;