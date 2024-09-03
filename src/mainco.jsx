import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import logo from "./3_BR[1].png"
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const upcomingEvents = [
  { id: 1, title: 'Salsa Night', date: 'May 15, 2023', image: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg' },
  { id: 2, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
  { id: 3, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' },
];

const pastEvents =[
  { id: 1, title: 'Salsa Night', date: 'May 15, 2023', image: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg' },
  { id: 2, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
  { id: 3, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' },
];


const EventSlider = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {events.map((event) => (
        <div key={event.id} className="p-4">
          <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.date}</p>
        </div>
      ))}
    </Slider>
  );
};


const MainContent = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 w-full h-screen text-gray-700 p-6 overflow-y-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Main Content</h2>
      <p className="mb-4">
        This is the main content area. You can add more components here to display content on your page.
      </p>
      
      <h3 className="text-lg font-semibold mb-2">Upcoming Dance Club Events</h3>
      <EventSlider events={upcomingEvents} />
      
      <h3 className="text-lg font-semibold mt-8 mb-2">Past Dance Club Events</h3>
      <EventSlider events={pastEvents} />
      <motion.h3
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold mt-8 mb-2"
      >
        Event Gallery
      </motion.h3>
      
      <p className="mt-4">
        Keep scrolling to hide and reveal the navbar. This area will contain the main components of your application.
      </p>
    </motion.main>
  );
};

export default MainContent;
