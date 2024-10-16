import { useEffect } from 'react';
import Navbar from '../nav';
import members from "../team";
import { useNavigate } from 'react-router';

const Members = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white p-4">
            <Navbar home={false} />
            <h1 className="text-3xl text-center mb-8 font-bold">Members List</h1>
            <ul className="flex flex-wrap items-center justify-center">
                {members.map((member) => (
                    <li 
                        key={member.id} 
                        className="flex flex-col items-center m-2 p-4 w-full sm:w-1/2 md:w-1/3 border border-gray-700 rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        <div className="mb-4">
                            <img src={member.file} alt={member.name} className="w-20  h-20 md:w-32 md:h-32 rounded-full border-4 border-gray-500" />
                        </div>
                        <div className="text-center ">
                            <h2 className="text-2xl font-semibold">{member.name}</h2>
                            <p className="font-light">{member.role}</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                {member.instagram ? (
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                ) : (
                                    <span className="text-gray-500"><i className="fa fa-instagram fa-2x"></i></span>
                                )}
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
                                    <i className="fa fa-linkedin fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Members;
