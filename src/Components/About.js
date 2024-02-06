import React from 'react';
import logo from "../Images/myimg.jpeg"
const About = () => {
  const fullName = 'Sarfaraz Haider Ali';
  const educationDetails = [
    { class: '12th', board: 'Science ', percentage: 'percentage: 62.77' },
    { class: 'Engineering', board: 'Computer Science', percentage: 'CGPA: 8.18' },
  ];
  const learnedTechnologies = 'Java || Python || JavaScrip || C || MERN || Git';

  return (
    <div className=" w-full flex items-center justify-center p-8 mt-40">
      <div className=" bg-white p-8 rounded-lg shadow-lg shadow-black">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Profile"
            className="w-24   h-24 rounded-full object-fill mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold ml-2">{fullName}</h2>
            <p className='ml-2 '>I am Sarfaraz Haider Ali, a graduate from Aiktc College. I possess a strong understanding and proficiency in MERN (MongoDB, Express.js, React.js, Node.js) technologies. My education and hands-on experience have equipped me with comprehensive knowledge in building modern web applications and software solutions using the MERN stack.</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Education Details</h3>
          <table className="w-full border-collapse">
            <tbody>
              {educationDetails.map((edu, index) => (
                <tr key={index}>
                  <td className="border p-2">{edu.class}</td>
                  <td className="border p-2">{edu.board}</td>
                  <td className="border p-2">{edu.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-lg font-semibold mt-2">Learned Technologies: </p>
          <p>{learnedTechnologies}</p>

        </div>
      </div>
    </div>
  );
};

export default About;
