import Navbar from "./nav";
import Header from "./header";
import MainContent from "./mainco";
import Footer from "./foot";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
