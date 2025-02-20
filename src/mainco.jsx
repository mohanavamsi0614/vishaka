import { motion } from 'framer-motion';
import EventSlider from './componunts/Slider';
import Gallery from './componunts/gallary';
// import ugadi from './ugadi.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router';
import members from './team.js';
const images = [
  { src: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg', alt: 'Salsa Night' },
  { src: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg', alt: 'Hip Hop Workshop' },
  { src: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png', alt: 'Ballroom Gala' },
];
const upcomingEvents = [
  { id: 1, title: 'Salsa Night', date: 'May 15, 2023', image: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg' },
  { id: 2, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
  { id: 3, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' },
];

const pastEvents =[
  // { id: 1, title: 'Ugadi Utsav', date: 'April 9, 2024', image: ugadi },
  { id: 2, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
  { id: 3, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' },
];
const settings = {
  dots: false,  
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const MainContent = () => {
  const nav=useNavigate()
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black w-full h-full text-white p-8 overflow-y-auto"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Club Events</h1>
      
      <section id='events' className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <EventSlider events={upcomingEvents} />
      
        <h2 className="text-2xl font-semibold mt-12 mb-4">Past Events</h2>
        <EventSlider events={pastEvents} />
      </section>
      
      <motion.section
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Event Gallery</h2>
        <Gallery images={images} />
      </motion.section>
      <button className='bg-blue-500 text-white p-2 mb-12 rounded-full'>View More</button>
      <section>
      <h2 className="text-2xl font-semibold mb-4" onClick={()=>{nav("/members")}}>The team &#x2192;</h2>
      <Slider {...settings} className="mt-8"> 
        {members.slice(0, 4).map((i, index) => (
          <div className='relative p-2 w-full' key={index}>
            <img src={i.file} className='w-full h-64 object-cover rounded-lg shadow-md' /> 
            <div className='absolute bottom-2 w-full  text-center text-white bg-black bg-opacity-50'>
              <p className='text-xl font-bold'>{i.name}</p>
              <p>{i.role}</p>
              <div className='flex justify-center space-x-4 mt-2'> 
                <a href={i.instagram} target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa fa-instagram"></i>
</a>
                <a href={i.linkedin} target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa fa-linkedin"></i>
</a>
                <a href={i.email} target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa fa-twitter"></i>
</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button onClick={() => nav("/members")} className='bg-blue-500 mt-10 text-white p-2 mb-12 rounded-full'>View All Team Members</button>
      </section>

    </motion.main>
  );
};

export default MainContent;
