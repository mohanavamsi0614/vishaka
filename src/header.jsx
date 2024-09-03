import logo from './2_BR[1].png';

const Header = () => {
  return (
    <div className="bg-gray-800 w-full h-screen text-white flex justify-center items-center text-center p-4" id='home'>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className="w-1/2 "> 
          <img src={logo} className="w-full h-auto"/> 
        </div>
        <h1 className="text-2xl mt-4 text-white">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default Header;
