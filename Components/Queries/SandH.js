import React from 'react';
import { useNavigate } from 'react-router-dom';

const SandH = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-gray-100 p-10 shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKctTsWDDpfsNkYC1K5JIa-DvqiSFFmT8Xqw&s" // Replace with your image URL
          alt="Science and Humanities"
          className="w-32 h-32 rounded-full shadow-md mr-6"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Science and Humanities</h1>
          <p className="text-xl font-medium text-gray-700">Nurturing Minds and Inspiring Change</p>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Department</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Department of Science and Humanities plays a foundational role in the academic development of our students. We offer a broad spectrum of courses in physics, chemistry, mathematics, and humanities, designed to cultivate critical thinking, creativity, and a strong scientific foundation. Our interdisciplinary approach prepares students for a holistic understanding of both technical and humanistic knowledge.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To create a dynamic and inclusive learning environment that fosters intellectual curiosity and ethical responsibility. Our vision is to equip students with the knowledge and skills necessary to make meaningful contributions to society through scientific inquiry and a deep understanding of the human experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Facilities</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu5M4XNUN2-UMmN5Vq50eF61FiNJ86o1yjbqKAvzQAL9v5voWC7NUv4-To8ux_QOBcrs&usqp=CAU" // Replace with your image URL
              alt="Facilities"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our department is equipped with modern laboratories for physics and chemistry, as well as dedicated spaces for mathematics and humanities studies. We provide students with access to advanced research tools and resources that support both scientific experiments and explorations of the human condition.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Achievements</h3>
          <div className="flex items-center mb-4">
            <img
              src="https://en.whu.edu.cn/_mediafile/whu_en2016/2015/01/29/1cpchvrkps.jpg" // Replace with your image URL
              alt="Achievements"
              className="w-40 h-40 rounded-lg shadow-md mr-4"
            />
            <p className="text-gray-600 leading-relaxed">
              Our students have excelled in various academic competitions and research projects, earning recognition for their innovative work in both the sciences and the humanities. We take pride in our contributions to interdisciplinary research and community engagement, demonstrating our commitment to academic excellence and social impact.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Opportunities</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The skills and knowledge gained in the Science and Humanities department open doors to diverse career paths. Our graduates are well-prepared for careers in research, education, public policy, communication, and various industries that value analytical and creative thinking. We provide guidance and support for students seeking to advance in both academic and professional realms.
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
              For more information about the Department of Science and Humanities, or to schedule a visit, please reach out to us at:
              <br />
              <strong>Email:</strong> sciencehumanities@university.edu
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Address:</strong> 456 Academic Lane, University Campus
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

export default SandH;
