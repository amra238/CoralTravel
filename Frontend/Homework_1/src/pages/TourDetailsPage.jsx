import React, { useState } from 'react';
import HeaderContainer from '../Containers/HeaderContainer';
import Footer from '../Components/Footer';
import TourDetailsContainer from '../Containers/TourDetailsContainer';
import { useParams, useNavigate } from 'react-router-dom';

function TourDetailsPage({ getTourWithDetails }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const tour = getTourWithDetails(parseInt(id));

    if (!tour) {
        return <div>Тур не найден</div>;
    }

    return (
        <div className="App">
            <HeaderContainer onAuthClick={() => { }} />
            <div className="container">
                <div className="breadcrumb">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Главная</a>
                    <strong> / Горящие туры из Казани / {tour.hotel_name}</strong>
                </div>
                <TourDetailsContainer tour={tour} />
            </div>
            <Footer />
        </div>
    );
}

export default TourDetailsPage;