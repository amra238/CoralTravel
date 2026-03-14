import { useState } from 'react';
import '../ComponentsCSS/HotelFacilities.css';

function HotelFacilities({ tour }) {
    const [activeTab, setActiveTab] = useState('Общее');
    const tabs = ['Общее', 'Услуги', 'Номера', 'Питание', 'Mice'];

    const facilities = [
        { icon: 'blueDocument.png', title: 'Общее', content: tour.location_description },
        { icon: 'blueMap.png', title: 'Расположение', content: `Город: ${tour.arrival_city}. В 55 км от аэропорта.` },
        { icon: 'blueAround.png', title: 'В окрестностях', content: tour.nearby_attractions },
        { icon: 'blueBuild.png', title: 'В отеле', content: tour.hotel_facilities },
        { icon: 'bluePool.png', title: 'Бассейны для взрослых', content: tour.adult_pools_count },
        { icon: 'bluePool.png', title: 'Детские бассейны', content: tour.children_pools_count },
        { icon: 'blueBeach.png', title: 'Пляж', content: tour.beach_info },
        { icon: 'blueInvalid.png', title: 'Особенности', content: 'Номера для людей с ограниченными возможностями: 4' },
        { icon: 'blueContacts.png', title: 'Контакты', content: tour.contact_info }
    ];

    return (
        <div className="facilities-section">
            <h2>Удобства отеля</h2>
            <div className="facilities-tabs">
                {tabs.map(tab => (
                    <button key={tab} className={`facilities-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}>{tab}</button>
                ))}
            </div>
            <div className="hotel-facilities">
                <div className="facilities-content">
                    {facilities.map((item, idx) => (
                        <div key={idx} className="info-row">
                            <div className="info-text">
                                <div className="info-icon"><img src={`/static/src/${item.icon}`} alt="" /></div>
                                <strong>{item.title}</strong>
                            </div>
                            <div style={{ padding: '8px' }}><p>{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotelFacilities;