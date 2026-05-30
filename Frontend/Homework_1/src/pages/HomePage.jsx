import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderContainer from '../Containers/HeaderContainer';
import HotToursContainer from '../Containers/HotToursContainer';
import MainContentContainer from '../Containers/MainContentContainer';
import Footer from '../Components/Footer';
import AuthModal from '../Components/authModal';
import TourDetailsPage from './TourDetailsPage';

function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Базовые данные для отображения в списке туров
  const tours = [
    {
      id: 0,
      image_url: '/static/src/hotel1.jpg',
      arrival_city: 'Турция, Анталья',
      departure_city: 'Казань',
      hotel_name: 'MAXX ROYAL BELEK GOLF RESORT',
      rating: 5,
      PriceDisplay: '296 927,69 ₽',
      meal_plan: 'Ультра Все Включено',
      departure_date: '15.07.2025',
      end_date: '22.07.2025',
      people_count: 2,
      nights_count: 7
    },
    {
      id: 1,
      image_url: '/static/src/hotel2.jpg',
      arrival_city: 'Египет, Хургада',
      departure_city: 'Казань',
      hotel_name: 'Albatros Palace Resort',
      rating: 5,
      PriceDisplay: '89 990 ₽',
      meal_plan: 'Все включено',
      departure_date: '10.11.2025',
      end_date: '17.11.2025',
      people_count: 2,
      nights_count: 7
    },
    {
      id: 2,
      image_url: '/static/src/hotel3.jpg',
      arrival_city: 'ОАЭ, Дубай',
      departure_city: 'Казань',
      hotel_name: 'Address Dubai Mall',
      rating: 5,
      PriceDisplay: '145 000 ₽',
      meal_plan: 'Завтраки',
      departure_date: '05.12.2025',
      end_date: '12.12.2025',
      people_count: 2,
      nights_count: 7
    },
    {
      id: 3,
      image_url: '/static/src/hotel4.jpg',
      arrival_city: 'Россия, Сочи (Красная Поляна)',
      departure_city: 'Казань',
      hotel_name: 'Radisson Resort & Congress Centre',
      rating: 5,
      PriceDisplay: '67 500 ₽',
      meal_plan: 'Все включено',
      departure_date: '20.11.2025',
      end_date: '27.11.2025',
      people_count: 2,
      nights_count: 7
    }
  ];

  // Расширенные данные только для страницы деталей тура
  const tourDetailsData = {
    0: {
      tour_price: 296927.69,
      location_description: 'Роскошный гольф-курорт с превосходным обслуживанием',
      nearby_attractions: 'Гольф-поле, торговый центр, аквапарк',
      hotel_facilities: 'Спа, фитнес-центр, несколько ресторанов',
      adult_pools_count: 3,
      children_pools_count: 2,
      beach_info: 'Частный пляж в 200м от отеля',
      contact_info: 'Тел: +90 242 123 45 67'
    },
    1: {
      tour_price: 89990,
      location_description: 'Пляжный курорт на берегу Красного моря',
      nearby_attractions: 'Аквариум, парк развлечений, дайвинг-центр',
      hotel_facilities: 'Аквапарк, спа, 8 ресторанов',
      adult_pools_count: 4,
      children_pools_count: 3,
      beach_info: 'Первая линия, песчаный пляж',
      contact_info: 'Тел: +20 65 123 45 67'
    },
    2: {
      tour_price: 145000,
      location_description: 'Роскошный отель рядом с Dubai Mall',
      nearby_attractions: 'Бурдж-Халифа, Dubai Mall, фонтаны',
      hotel_facilities: 'Спа, бассейн на крыше, рестораны',
      adult_pools_count: 2,
      children_pools_count: 1,
      beach_info: 'Пляж JBR в 10 минутах',
      contact_info: 'Тел: +971 4 123 45 67'
    },
    3: {
      tour_price: 67500,
      location_description: 'Горнолыжный курорт в горах Кавказа',
      nearby_attractions: 'Горнолыжные трассы, термальные источники',
      hotel_facilities: 'Спа, бассейн, рестораны, лыжехранилище',
      adult_pools_count: 2,
      children_pools_count: 1,
      beach_info: 'Горнолыжные трассы рядом',
      contact_info: 'Тел: +7 862 123 45 67'
    }
  };

  // Функция для получения полных данных тура (базовые + расширенные)
  const getTourWithDetails = (tourId) => {
    const basicTour = tours[tourId];
    const details = tourDetailsData[tourId] || {};
    return { ...basicTour, ...details };
  };

  const handleAuthSubmit = (formData) => {
    console.log('Auth ', formData);
    setIsAuthModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <HeaderContainer onAuthClick={() => setIsAuthModalOpen(true)} />
            <HotToursContainer tours={tours} />
            <MainContentContainer tours={tours} />
            <Footer />
            <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
              onSubmit={handleAuthSubmit}
            />
          </div>
        } />
        <Route path="/tour/:id" element={
          <TourDetailsPage getTourWithDetails={getTourWithDetails} />
        } />
      </Routes>
    </Router>
  );
}

export default HomePage;