import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ugadi from './ugadi.png';
import Footer from './foot';

const EventPage = () => {
    const { name } = useParams();
    useEffect(()=>{
      window.scrollTo(0,0)
    })
    const nav=useNavigate()

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
            additionalInfo: "Don't forget to bring sunscreen and water!"}
//         },{
//             title: 'Ugadi Utsav',
//             date: 'May 15, 2023',
//             time: '7:00 PM',
//             // mainPhoto: ugadi,
//             description: `The event Ugadi Utsav 2K24 has been conducted on 09th April 2024 in Kalasalingam Academy of Research and Education. 
// Inauguration function started at 1:00pm with the lighting of the Kuthuvilakku as a tribute to Mother Saraswathi, the Goddess of Knowledge by the dignitaries. Prayer works wonders. Prayer should spring from the heart, thinking of a supreme power beyond all human inadequacies is a kind of auto suggestion
// Prayer to the God Ganesha with the song Gananayagaya by Sravani
// Dr. K. Sridharan – Chancellor & Dr. A. Samson Nesaraj – Director of Student Affairs, is the guest for the event.
// Dr. Kotte. Amaranadha Reddy, Faculty Coordinator of Vishaka Club & Assistant professor (Department of Mathematics) delivered the welcome address. 
//   Ms A Deepithika-President of club Vishaka proposed a vote of thanks.
// `,
//             photos: [ "https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg",
//     "https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg",
//     "https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png",
//   ],
//             additionalInfo: "Don't forget to bring sunscreen and water!"
//         }
    ];
    
    const event = events.find(event => event.title === name);


  return (
    <div className="bg-black w-full h-full text-white p-8 overflow-y-auto">
      <div className="text-center py-8">
      <h1 className=' size-10 rounded-full border border-white  text-center text-2xl' onClick={()=>{nav("/")}}>	&larr;</h1>
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-xl text-gray-600">{event.date} at {event.time}</p>
      </div>
      <div className="w-full mb-10  flex justify-center">
        <img src={event.mainPhoto} alt={event.title} className="w-full h-full object-cover" />
      </div>
      <div className="">
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
      <Footer/>
    </div>
  );
};

export default EventPage;
