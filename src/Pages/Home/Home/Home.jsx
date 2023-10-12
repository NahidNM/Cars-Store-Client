import React from 'react';
import Banner from '../Banner/Banner';
import CategoryCar from '../CategoryCar/CategoryCar';
import TeamMember from '../TeamMember/TeamMember';
import Contract from '../Contract/Contract';
import Gellary from '../Gellary/Gellary';
import OfferCarProduct from '../OfferCarProduct/OfferCarProduct';
import ReviewCar from '../ReviewCar/ReviewCar';
import Silder from '../Silder/Silder';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Silder></Silder>
        <Gellary></Gellary>
        <CategoryCar></CategoryCar>
        {/* <ReviewCar></ReviewCar> */}
        <OfferCarProduct></OfferCarProduct>
        <TeamMember></TeamMember>
        <Contract></Contract>
        </div>
    );
};

export default Home;<h1>home</h1>