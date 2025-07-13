import React from 'react';
import { useNavigate } from 'react-router-dom';

const CivilEngineering = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 p-10 shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.1dWgF3qGAZFjBOEQ_cc7sgHaEv&pid=Api&P=0&h=180" // Replace with your image URL
          alt="Civil Engineering"
          className="w-32 h-32 rounded-full shadow-md mr-6"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">B.E. Civil Engineering</h1>
          <p className="text-xl font-medium text-gray-700">Engineering the Future of Infrastructure</p>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Department</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Department of Civil Engineering at our university is dedicated to fostering innovation, research, and practical experience. Our curriculum integrates traditional civil engineering principles with modern technology to prepare students for a dynamic industry. We are committed to nurturing well-rounded professionals capable of addressing complex engineering challenges.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be a leader in Civil Engineering education and research, creating opportunities for students to engage in cutting-edge projects and collaborations that advance the field. Our vision is to cultivate a culture of excellence and ethical practice, ensuring that our graduates are well-prepared to contribute to the global engineering community.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Facilities</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.TwcxaWyQgRnWPyr74AfQCQHaEI&pid=Api&P=0&h=180" // Replace with your image URL
              alt="Facilities"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our state-of-the-art facilities include advanced laboratories for structural, geotechnical, and environmental engineering. We also offer dedicated spaces for project work, including a 3D printing lab and simulation center. These resources provide students with hands-on experience and exposure to real-world engineering applications.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Achievements</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JGLCWxg3mdNip6_TLIgdJAhTRRTL7DGj5g&s" // Replace with your image URL
              alt="Achievements"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our students have achieved remarkable success in national and international competitions, including engineering design contests and research symposiums. We have also received accolades for community service projects and innovative solutions in infrastructure development, reflecting our commitment to excellence and impact.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Opportunities</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Graduates of our Civil Engineering program are well-prepared for a range of career opportunities in both public and private sectors. Our alumni work as project managers, structural engineers, environmental consultants, and more. We provide career support services, including internships and job placement assistance, to help students transition from academia to the professional world.
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
              For more information about the Department of Civil Engineering, or to schedule a visit, please reach out to us at:
              <br />
              <strong>Email:</strong> civileng@university.edu
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Address:</strong> 123 Engineering Hall, University Campus
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

export default CivilEngineering;
