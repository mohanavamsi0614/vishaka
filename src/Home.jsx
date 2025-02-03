import Navbar from "./componunts/Nav";
import EventSlider from "./componunts/Slider";
import { useNavigate } from "react-router-dom";
import members from "./team";
import rangasthalam from "./assets/photos/Rangasthalam.png"
import ugadi from "./assets/photos/ugadi.png"
import place from "./assets/photos/placement.png"
import group from "./assets/photos/group.jpg"
import sankranthi from "./assets/photos/sankranthi.png"
import splash from "./assets/photos/splash.png"
import ignite  from "./assets/photos/ignite.png"
import { motion } from "framer-motion";

const upcomingEvents = [
  { id: 1, title: 'Rangasthalam', date: 'Nov 13 2024', image: rangasthalam },
  { id: 2, title: 'Ugadi', date: 'April 9, 2024', image:  ugadi},
  { id: 3, title: 'Placement Talk', date: 'August 10, 2024', image: place },
  { id: 4, title: 'sankranthi', date: 'Jan 4, 2025', image: sankranthi },
  { id: 5, title: 'Splash', date: 'Sep 14, 2024', image: splash },
  { id: 6, title: 'ignite', date: 'June 5, 2023', image: ignite }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4">
        {/* Updates Section */}
        {/* <div className="my-10">
          <h1 className="m-5 text-3xl font-bold text-center text-gray-800">Updates</h1>
          <EventSlider events={upcomingEvents} />
        </div> */}
        <div className=" flex justify-center mt-10 mb-10">
        <img src={group} className="rounded-lg  lg:h-[600px] w-full object-contain" />
</div>
        {/* Events Section */}
        <div>
          <h1 className="text-5xl font-semibold text-center mb-5 text-gray-800">Events</h1>
          <div className="w-full gap-5 flex-wrap flex flex-1 justify-center md:justify-around">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                className="w-full sm:w-72 md:w-1/4 m-2 bg-white shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img className="w-full h-auto object-cover" src={event.image} alt={event.title} />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-gray-700 mt-2">Here is a brief description of the event. Stay tuned for more details!</p>
                </div>
              </motion.div>
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
        <motion.div
          className="my-10 bg-white p-5 shadow-md rounded-lg mx-5 lg:mx-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-5 text-gray-800">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our community! We host various events to bring people together and share our love for dance and
            music. Join us to create memories, learn new skills, and have a fantastic time.
          </p>
        </motion.div>

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
