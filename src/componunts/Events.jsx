import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Events = () => {
    const events = [
        { id: 1, title: 'Salsa Night', date: 'May 15, 2023', image: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg' },
        { id: 2, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
        { id: 3, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' },
        { id: 4, title: 'Salsa Night', date: 'May 15, 2023', image: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg' },
        { id: 5, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
        { id: 6, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' }
    ];
    const navigator = useNavigate();

    const handleEventClick = (eventId) => {
        navigator("/event/"+eventId)
    };

    return (
        <div className=' bg-black p-2'>
            <h1>Events</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {events.map(event => (
                    <li key={event.id} onClick={() => handleEventClick(event.title)} style={{ cursor: 'pointer', color: '#007bff', marginBottom: '20px' }}>
                        <img src={event.image} alt={event.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                        <h2>{event.title}</h2>
                        <p>{event.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
