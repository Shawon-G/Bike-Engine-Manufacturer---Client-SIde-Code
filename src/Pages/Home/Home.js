import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Items from './Items';
import OurPeople from './OurPeople';
import OurStory from './OurStory';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <BusinessSummary />
            <Reviews />

            <OurStory />
            <OurPeople />

            <Footer />
        </div>
    );
};

export default Home;