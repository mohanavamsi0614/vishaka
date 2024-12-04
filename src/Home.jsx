import Navbar from "./componunts/Nav";
import EventSlider from "./componunts/Slider";
import { useNavigate } from "react-router-dom"; 
import members from "./team"
const upcomingEvents = [
  { id: 1, title: "Salsa Night", date: "May 15, 2023", image: "https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg" },
  { id: 2, title: "Hip Hop Workshop", date: "May 22, 2023", image: "https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg" },
  { id: 3, title: "Ballroom Gala", date: "June 5, 2023", image: "https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png" },
];


function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gray-50">
      <Navbar />
      <div>
        <div className="my-10">
          <h1 className="m-5 text-2xl font-bold text-center">Updates</h1>
          <EventSlider events={upcomingEvents} />
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-5">Events</h1>
          <div className="w-full flex flex-wrap justify-around">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="w-auto m-5 bg-white shadow-lg rounded-lg overflow-hidden">
                <div>
                  <img className="w-full h-40 object-cover" src={event.image} alt={event.title} />
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-gray-700 mt-2">Here is a description of the event.</p>
                </div>
              </div>
            ))}
          </div>
            <p onClick={()=>{navigate("/events")}} className=" w-full flex justify-center">More...</p>
        </div>

        <div className="my-10 bg-white p-5 shadow-md rounded-lg mx-5 lg:mx-20">
          <h1 className="text-2xl font-bold mb-5">About Us</h1>
          <p className="text-gray-700">
            Welcome to our community! We host various events to bring people together and share our love for dance and
            music. Join us to create memories, learn new skills, and have a fantastic time.
          </p>
        </div>

        <div className="my-10">
          <h1 className="text-2xl font-bold text-center mb-5">Meet Our Members</h1>
          <div className="w-full flex justify-around flex-wrap gap-5">
            {members.slice(0, 3).map((member) => (
              <div key={member.id} className="w-48 bg-white shadow-lg rounded-lg overflow-hidden">
                <div>
                  <img className="w-full h-40 object-cover" src={member.file} alt={member.name} />
                </div>
                <div className="p-4 text-center">
                  <p className="text-lg font-bold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className='flex justify-center space-x-4 mt-2'> 
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-black"><i className="fa fa-instagram"></i>
</a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-black"><i className="fa fa-linkedin"></i>
</a>
                <a href={member.email} target="_blank" rel="noopener noreferrer" className="text-black
                "><i className="fa fa-twitter"></i>
</a>
              </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button
              className="px-4 py-2 border  text-black rounded "
              onClick={() => navigate("/members")}
            >
              Show More Members
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
