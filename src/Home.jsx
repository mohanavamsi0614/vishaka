import Navbar from "./componunts/Nav";
import EventSlider from "./componunts/Slider";
import { useNavigate } from "react-router-dom";
import members from "./team";
import rangasthalam from "./assets/photos/Rangasthalam.png"
import ugadi from "./assets/photos/ugadi.png"
import group from "./assets/photos/group.jpg"
const upcomingEvents = [
  { id: 1, title: 'Rangasthalam', date: 'Nov 13 2024', image: rangasthalam },
  { id: 2, title: 'Ugadi', date: 'April 9, 2024', image:  ugadi},
  { id: 3, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' },
  { id: 4, title: 'Salsa Night', date: 'May 15, 2023', image: 'https://i.ytimg.com/vi/C_KZ2TxiOpA/maxresdefault.jpg' },
  { id: 5, title: 'Hip Hop Workshop', date: 'May 22, 2023', image: 'https://m.media-amazon.com/images/I/51ZTjQRvWlS.jpg' },
  { id: 6, title: 'Ballroom Gala', date: 'June 5, 2023', image: 'https://i.pinimg.com/originals/54/7a/7f/547a7f9693b6ab79efcd963d2d760fcf.png' }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gray-50">
      <Navbar />
      <div>
        {/* Updates Section */}
        {/* <div className="my-10">
          <h1 className="m-5 text-3xl font-bold text-center text-gray-800">Updates</h1>
          <EventSlider events={upcomingEvents} />
        </div> */}
        <img src={group} className=" rounded-lg"/>

        {/* Events Section */}
        <div>
          <h1 className="text-2xl font-semibold text-center mb-5 text-gray-800">Events</h1>
          <div className="w-full gap-5 flex-wrap flex flex-1 justify-around">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="w-52 m-1 md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-auto object-cover" src={event.image} alt={event.title} />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-gray-700 mt-2">Here is a brief description of the event. Stay tuned for more details!</p>
                </div>
              </div>
            ))}
          </div>
          <p
            onClick={() => navigate("/events")}
            className="mt-5 text-center text-blue-500 hover:underline cursor-pointer"
          >
            More...
          </p>
        </div>

        {/* About Us Section */}
        <div className="my-10 bg-white p-5 shadow-md rounded-lg mx-5 lg:mx-20">
          <h1 className="text-3xl font-bold mb-5 text-gray-800">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our community! We host various events to bring people together and share our love for dance and
            music. Join us to create memories, learn new skills, and have a fantastic time.
          </p>
        </div>

        {/* Members Section */}
        <div className="my-10">
          <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">Meet Our Members</h1>
          <div className="w-full flex flex-wrap justify-center items-center gap-2 flex-1">
            {members.slice(0, 6).map((member) => (
              <div key={member.id} className="w-48 bg-white  shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src={member.file} alt={member.name} />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-2 ">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-600"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                      href={member.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button
              className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"
              onClick={() => navigate("/members")}
            >
              Show More Members ...
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
