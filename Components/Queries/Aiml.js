import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aiml = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 p-10 shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X83heokIS2zOFELTHCs84bmKR7fLO8tok-z6CIrb-lpe8_ddLFEJ46ko5RmgfUQxBCE&usqp=CAU" // Replace with your image URL
          alt="AI & ML Engineering"
          className="w-32 h-32 rounded-full shadow-md mr-6"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">B.E. AI & ML Engineering</h1>
          <p className="text-xl font-medium text-gray-700">Pioneering Intelligence in Technology</p>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Department</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Department of AI & ML Engineering at our university is dedicated to advancing the frontiers of artificial intelligence and machine learning. Our curriculum is designed to equip students with the knowledge and skills needed to develop intelligent systems and algorithms that can learn and adapt. We emphasize hands-on learning through real-world projects and research opportunities.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be a leader in AI & ML education and research, driving innovation and ethical development of intelligent systems. Our vision is to create a nurturing environment that fosters creativity, critical thinking, and collaboration, empowering our students to become pioneers in the field of AI and ML.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Facilities</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://s3-ap-south-1.amazonaws.com/cmrec/wp-media-folder-cmr-engineering-college-hyderabad-telangana-india-approved-by-aicte-new-delhi-and-affiliated-to-jnt-university-hyderabad/wp-content/uploads/2021/08/CSE-Lab-Pics-6.png" // Replace with your image URL
              alt="Facilities"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our department offers cutting-edge facilities, including AI labs equipped with high-performance computing clusters, data analytics tools, and machine learning libraries. We also have dedicated spaces for research in areas such as natural language processing, computer vision, and robotics. These resources provide students with hands-on experience and the opportunity to work on groundbreaking projects.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Achievements</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5orVf4aieI8yY-TeywdhJArGTNSBR-VyQyNK-vwRIABn26CTzhHojsGnK9pbRAAdm4k&usqp=CAU" // Replace with your image URL
              alt="Achievements"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our students and faculty have made significant contributions to the field of AI & ML, including published research in top-tier journals, winning prestigious AI competitions, and developing innovative AI-driven solutions. Our department is recognized globally for its commitment to advancing the field and making a positive impact on society.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Opportunities</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Graduates of our AI & ML Engineering program are in high demand across various industries, including technology, finance, healthcare, and robotics. Our department provides robust career support, including internships, industry partnerships, and job placement services, to ensure our students are well-prepared for the workforce.
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-19.jpg" // Replace with your image URL
              alt="Contact Us"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              For more information about the Department of AI & ML Engineering, or to schedule a visit, please reach out to us at:
              <br />
              <strong>Email:</strong> aiml@university.edu
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Address:</strong> 789 Innovation Hall, University Campus
            </p>
          </div>
        </div>
      </section>
      <button
        onClick={handleGoBack}
        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
      >
        Back
      </button>
    </div>
  );
};

export default Aiml;
