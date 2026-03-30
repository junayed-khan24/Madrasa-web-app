import React from 'react';
import Header from './Header/Header';
import Hero from './Hero';
import Profile from './Profile';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <div className="py-12 px-4">
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Home;