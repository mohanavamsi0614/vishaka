import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Navbar from './Nav';
import rangasthalam from "../assets/photos/Rangasthalam.png"

const Events = () => {
    const events = [
        { id: 1, title: 'Rangasthalam', date: 'Nov 13 2024', image: rangasthalam },
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
        <div className='bg-black p-4'>
        <Navbar/>
            <h1 className='text-white text-3xl mb-4'>Events</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {events.map(event => (
                    <li 
                        key={event.id} 
                        onClick={() => handleEventClick(event.id)} 
                        style={{ 
                            cursor: 'pointer', 
                            color: '#007bff', 
                            marginBottom: '20px', 
                            transition: 'transform 0.2s', 
                            border: '1px solid #444', 
                            borderRadius: '8px', 
                            padding: '10px', 
                            backgroundColor: '#222' 
                        }} 
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} 
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src={event.image} alt={event.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                        <h2 className='text-white text-xl'>{event.title}</h2>
                        <p className='text-gray-400'>{event.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
