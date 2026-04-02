import React from 'react';
import Header from './Header/Header';
import Hero from './Hero';
import Profile from './Profile';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <div className="py-12 px-4">
                <Profile></Profile>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;