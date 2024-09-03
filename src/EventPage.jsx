import React from 'react';
import { useParams } from 'react-router-dom';

const EventPage = () => {
    const { name } = useParams();
    const events = [
        {
            title: 'Salsa Night',
            date: 'May 15, 2023',
            time: '7:00 PM',
            mainPhoto: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg',
            description: 'Join us for a night of salsa dancing and music.',
            photos: [ "https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg",
    "https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg",
    "https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png",
  ],
            additionalInfo: "Don't forget to bring sunscreen and water!"
        }
        ,{
            title: 'Hip Hop Workshop',
            date: 'May 15, 2023',
            time: '7:00 PM',
            mainPhoto: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg',
            description: 'Join us for a night of salsa dancing and music.',
            photos: [ "https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg",
    "https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg",
    "https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png",
  ],
            additionalInfo: "Don't forget to bring sunscreen and water!"
        },{
            title: 'Ballroom Gala',
            date: 'May 15, 2023',
            time: '7:00 PM',
            mainPhoto: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg',
            description: 'Join us for a night of salsa dancing and music.',
            photos: [ "https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg",
    "https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg",
    "https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png",
  ],
            additionalInfo: "Don't forget to bring sunscreen and water!"
        }
    ];
    
    const event = events.find(event => event.title === name);


  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-xl text-gray-600">{event.date} at {event.time}</p>
      </div>
      <div className="w-full h-[50vh]">
        <img src={event.mainPhoto} alt={event.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-8">
        <p className="text-lg mb-8">{event.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {event.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Event photo ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
          <p className="text-gray-700">{event.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
