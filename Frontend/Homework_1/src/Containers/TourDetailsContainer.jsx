import HotelInfo from '../Components/HotelInfo';
import HotelContent from '../Components/HotelContent';
import HotelFacilities from '../Components/HotelFacilities';
import '../ContainersCSS/TourDetailsContainer.css';

function TourDetailsContainer({ tour }) {
    if (!tour) return <div>Тур не найден</div>;

    return (
        <main className="tour-details-main">
            <div className="container">
                <h1>{tour.hotel_name}</h1>
                <HotelInfo tour={tour} />
                <HotelContent tour={tour} />
                <HotelFacilities tour={tour} />
            </div>
        </main>
    );
}

export default TourDetailsContainer;