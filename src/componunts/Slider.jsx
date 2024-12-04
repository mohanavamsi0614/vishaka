import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
const EventSlider = ({ events }) => {
    const navigate = useNavigate();
    const settings = {
      dots: true,  
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="p-2 w-full h-64" onClick={() => navigate(`/event/${event.title}`)}>
              <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
          ))}
        </Slider>
    );
  };
export default EventSlider;