import logo from './2_BR[1].png';

const Header = () => {
  return (
    <div className="bg-gray-800 w-full h-screen text-white flex justify-center items-center text-center p-4" id='home'>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className="w-1/2 "> 
          <img src={logo} className="w-full h-auto mb-20"/> 
        </div>
        <h1 className="text-md mt-4 text-white text-clip w-30">
The programs by Vishaka dedicated to serve the development and
enhancement of educational and cultural activities within the campus
and in reach of fully inter-Disciplinary in scope. We envision a centre
that provides opportunities, exchange of ideas and skills between the campus to
creative activities in Education art, culture, literature performance.</h1>
      </div>
    </div>
  );
};

export default Header;
