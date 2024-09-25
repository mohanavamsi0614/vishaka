import Navbar from "./nav";
import Header from "./header";
import MainContent from "./mainco";
import Footer from "./foot";
import EventPage from "./EventPage";
import { Routes, Route } from 'react-router-dom'
import Events from "./componunts/Events";
import Members from "./componunts/Members";
const App = () => {
  return (
    
      <Routes>  
      <Route path="/" element={<div className="flex flex-col min-h-screen">
      <Navbar />
      <Header id='home'/>
      <MainContent id='events' />
      <Footer id='about'/>
        </div>
      } />
      <Route path="/event/:name" element={<EventPage/>} />
      <Route path="/events" element={<Events/>}/>
      <Route path="/members" element={<Members/>}/>
      </Routes>
  );
};

export default App;
