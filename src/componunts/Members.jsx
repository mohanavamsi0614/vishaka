import { useEffect } from 'react';
import first from '../Student Pics/dEnhance.jpg'
import secound from "../Student Pics/IMG_0357.jpg"
import third from "../Student Pics/SAVE_20240807_120713.jpg"
import Navbar from '../nav';
 
const Members = () => {
    const members = [
        { id: 1, name: 'John Doe', role: 'Developer', image:first , socialLinks: { facebook: 'https://facebook.com/johndoe', twitter: 'https://twitter.com/johndoe', linkedin: 'https://linkedin.com/in/johndoe' }},
        { id: 2, name: 'Jane Smith', role: 'Designer', image: secound, socialLinks: { facebook: 'https://facebook.com/janesmith', twitter: 'https://twitter.com/janesmith', linkedin: 'https://linkedin.com/in/janesmith' }},
        { id: 3, name: 'Alice Johnson', role: 'Product Manager', image: third, socialLinks: { facebook: 'https://facebook.com/alicejohnson', twitter: 'https://twitter.com/alicejohnson', linkedin: 'https://linkedin.com/in/alicejohnson' }},
        { id: 4, name: 'Bob Brown', role: 'QA Engineer', image: 'path/to/bob.jpg', socialLinks: { facebook: 'https://facebook.com/bobbrown', twitter: 'https://twitter.com/bobbrown', linkedin: 'https://linkedin.com/in/bobbrown' }},
        { id: 5, name: 'Charlie Davis', role: 'DevOps Engineer', image: 'path/to/charlie.jpg', socialLinks: { facebook: 'https://facebook.com/charliedavis', twitter: 'https://twitter.com/charliedavis', linkedin: 'https://linkedin.com/in/charliedavis' }},
        { id: 6, name: 'Diana Evans', role: 'Data Scientist', image: 'path/to/diana.jpg', socialLinks: { facebook: 'https://facebook.com/dianaevans', twitter: 'https://twitter.com/dianaevans', linkedin: 'https://linkedin.com/in/dianaevans' }},
        { id: 7, name: 'Ethan Foster', role: 'Frontend Developer', image: 'path/to/ethan.jpg', socialLinks: { facebook: 'https://facebook.com/ethanfoster', twitter: 'https://twitter.com/ethanfoster', linkedin: 'https://linkedin.com/in/ethanfoster' }},
        { id: 8, name: 'Fiona Green', role: 'Backend Developer', image: 'path/to/fiona.jpg', socialLinks: { facebook: 'https://facebook.com/fionagreen', twitter: 'https://twitter.com/fionagreen', linkedin: 'https://linkedin.com/in/fionagreen' }},
        { id: 9, name: 'George Harris', role: 'UI/UX Designer', image: 'path/to/george.jpg', socialLinks: { facebook: 'https://facebook.com/georgeharris', twitter: 'https://twitter.com/georgeharris', linkedin: 'https://linkedin.com/in/georgeharris' }},
        { id: 10, name: 'Hannah Ivers', role: 'Marketing Specialist', image: 'path/to/hannah.jpg', socialLinks: { facebook: 'https://facebook.com/hannahivers', twitter: 'https://twitter.com/hannahivers', linkedin: 'https://linkedin.com/in/hannahivers' }},
        { id: 11, name: 'Ian Johnson', role: 'SEO Expert', image: 'path/to/ian.jpg', socialLinks: { facebook: 'https://facebook.com/ianjohnson', twitter: 'https://twitter.com/ianjohnson', linkedin: 'https://linkedin.com/in/ianjohnson' }},
        { id: 12, name: 'Julia King', role: 'Content Writer', image: 'path/to/julia.jpg', socialLinks: { facebook: 'https://facebook.com/juliaking', twitter: 'https://twitter.com/juliaking', linkedin: 'https://linkedin.com/in/juliaking' }},
        { id: 13, name: 'Kevin Lee', role: 'System Administrator', image: 'path/to/kevin.jpg', socialLinks: { facebook: 'https://facebook.com/kevinlee', twitter: 'https://twitter.com/kevinlee', linkedin: 'https://linkedin.com/in/kevinlee' }},
        { id: 14, name: 'Laura Miller', role: 'Network Engineer', image: 'path/to/laura.jpg', socialLinks: { facebook: 'https://facebook.com/lauramiller', twitter: 'https://twitter.com/lauramiller', linkedin: 'https://linkedin.com/in/lauramiller' }},
        { id: 15, name: 'Mike Nelson', role: 'Cloud Architect', image: 'path/to/mike.jpg', socialLinks: { facebook: 'https://facebook.com/mikenelson', twitter: 'https://twitter.com/mikenelson', linkedin: 'https://linkedin.com/in/mikenelson' }},
        { id: 16, name: 'Nina OConnor', role: 'Business Analyst', image: 'path/to/nina.jpg', socialLinks: { facebook: 'https://facebook.com/ninaoconnor', twitter: 'https://twitter.com/ninaoconnor', linkedin: 'https://linkedin.com/in/ninaoconnor' }},
        { id: 17, name: 'Oscar Perez', role: 'Technical Writer', image: 'path/to/oscar.jpg', socialLinks: { facebook: 'https://facebook.com/oscarperez', twitter: 'https://twitter.com/oscarperez', linkedin: 'https://linkedin.com/in/oscarperez' }},
        { id: 18, name: 'Paula Quinn', role: 'Graphic Designer', image: 'path/to/paula.jpg', socialLinks: { facebook: 'https://facebook.com/paulaquinn', twitter: 'https://twitter.com/paulaquinn', linkedin: 'https://linkedin.com/in/paulaquinn' }},
        { id: 19, name: 'Quinn Roberts', role: 'Software Tester', image: 'path/to/quinn.jpg', socialLinks: { facebook: 'https://facebook.com/quinnroberts', twitter: 'https://twitter.com/quinnroberts', linkedin: 'https://linkedin.com/in/quinnroberts' }},
        { id: 20, name: 'Ryan Smith', role: 'Web Developer', image: 'path/to/ryan.jpg', socialLinks: { facebook: 'https://facebook.com/ryansmith', twitter: 'https://twitter.com/ryansmith', linkedin: 'https://linkedin.com/in/ryansmith' }},
    ];
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <div className="bg-black h-full text-white p-2">
            <h1 className=" text-2xl text-center mb-4">Members List</h1>
            <ul className="flex flex-wrap items-center  w-full justify-center"> 
                {members.map(member => (
                    <li key={member.id} className="flex m-2  flex-col size-40 md:flex-row border rounded-2xl p-4  justify-center items-center mb-4"> 
                        <div><img src={member.image} alt={member.name} className="w-16 h-16 rounded-full" /> </div>
                        <div className="text-center md:text-left"> 
                            <h2 className=' text-xl font-semibold '>{member.name}</h2>
                            <p className=' font-thin'>{member.role}</p>
                            <div>
                                <a href={member.socialLinks.facebook}><i className="fa fa-instagram "/></a>
                                <a href={member.socialLinks.twitter}><i className="fa fa-twitter m-2"/></a>
                                <a href={member.socialLinks.linkedin}><i className="fa fa-linkedin"/></a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Members;
