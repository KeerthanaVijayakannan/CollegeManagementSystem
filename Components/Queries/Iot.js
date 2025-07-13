import React from 'react';
import { useNavigate } from 'react-router-dom';

const Iot = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 p-10 shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/213/270/non_2x/iot-letter-technology-logo-design-on-white-background-iot-creative-initials-letter-it-logo-concept-iot-letter-design-vector.jpg" // Replace with your image URL
          alt="IoT Engineering"
          className="w-32 h-32 rounded-full shadow-md mr-6"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">B.E. IoT Engineering</h1>
          <p className="text-xl font-medium text-gray-700">Connecting the Future</p>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Department</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Department of IoT Engineering at our university is focused on advancing the future of connected devices and smart systems. Our curriculum emphasizes a blend of hardware and software, offering students hands-on experience with the latest IoT technologies. We aim to produce innovative engineers who are ready to tackle the challenges of an increasingly connected world.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a leading department in IoT Engineering, fostering innovation and collaboration in the development of smart systems. Our vision is to create a hub for cutting-edge research and education, empowering students to shape the future of connected technologies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Facilities</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRbz5A2UOVgfwAnPt5F56tjCzzBzY0wbU-yv3LZ6v1_9wTnqWK-AokebZUzXVQLpariE&usqp=CAU" // Replace with your image URL
              alt="Facilities"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our department boasts state-of-the-art facilities, including IoT labs equipped with the latest sensors, microcontrollers, and communication modules. We also have a dedicated research center for smart city applications and industrial IoT, providing students with the tools to explore and innovate in this rapidly evolving field.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Achievements</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZU-wXVW7i7KO7COdK7754awIviDqcJjJeAg&s" // Replace with your image URL
              alt="Achievements"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our students and faculty have been recognized for groundbreaking research in IoT security, smart healthcare, and industrial automation. We have won numerous awards in national and international hackathons, showcasing our commitment to pushing the boundaries of what's possible in IoT technology.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Opportunities</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Graduates from our IoT Engineering program are highly sought after in various industries, including smart cities, healthcare, manufacturing, and consumer electronics. Our department offers robust career support, including internships with leading tech companies and opportunities to work on real-world IoT projects.
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
              For more information about the Department of IoT Engineering, or to schedule a visit, please reach out to us at:
              <br />
              <strong>Email:</strong> ioteng@university.edu
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Address:</strong> 456 Technology Hall, University Campus
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

export default Iot;
