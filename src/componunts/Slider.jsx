import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
const EventSlider = ({ events }) => {
    const navigate = useNavigate();
    const settings = {
      dots: true,  
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
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
  
    return (
        <Slider {...settings} className=' gap-5 flex justify-evenly'>
          {events.map((event) => (
            <div key={event.id} className="w-52 m-5 md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-auto object-cover" src={event.image} alt={event.title} />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-gray-700 mt-2">Here is a brief description of the event. Stay tuned for more details!</p>
                </div>
              </div>
          ))}
        </Slider>
    );
  };
export default EventSlider;