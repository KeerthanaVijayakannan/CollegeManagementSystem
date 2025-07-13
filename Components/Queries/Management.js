import React from 'react';

const Management = () => {
  return (
    <div style={{ backgroundColor: '#f7fafc', padding: '2rem' }}>
      {/* Header Image with Management Line */}
      <div style={{ position: 'relative', textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src="https://www.srikrishna.ac.in/images/Slider/Slide2.jpg" // Replace with the actual header image URL
          alt="Management"
          style={{ width: '120%', height: '120px', borderRadius: '8px',opacity:"0.4" }} // Adjusted height to auto
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            fontSize: '2rem',
            fontWeight: 'bold',
            // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            width: '100%', // Matches the image width
            height: '100%', // Matches the image height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Management Team
        </div>
      </div>

      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Management Member 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <img
            style={{
              width: '150px',
              height: '200px',
              borderRadius: '8px',
              objectFit: 'cover',
              marginRight: '2rem',
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRZMSCTBNBbOG5Qo-Q0SS8wU07A5yal35BtOGfZtW_W3cg_4KRz6HLzq3lWFktI9NiZA&usqp=CAU" // Replace with the actual image URL
            alt="Smt. S. Malarvizhi"
          />
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '0.5rem' }}>
              Smt. S. Malarvizhi
            </h2>
            <p style={{ color: '#1e3a8a', fontSize: '1.25rem', marginBottom: '1rem' }}>
              Chairperson and Managing Trustee
            </p>
            <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
              Smt. S. Malarvizhi is a visionary academician, a reformer, and an able administrator.
              As an educator herself, she firmly believes in education that nurtures holistic
              development for students. She is the driving force behind the Sri Krishna Institutions
              to have emerged as one of the pioneers in providing quality education.
            </p>
            <a href="#" style={{ color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }}>
              Read More
            </a>
          </div>
        </div>

        {/* Management Member 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <img
            style={{
              width: '150px',
              height: '200px',
              borderRadius: '8px',
              objectFit: 'cover',
              marginRight: '2rem',
            }}
            src="https://www.skct.edu.in/v1/images/p2/trusteeAditya.jpg" // Replace with the actual image URL
            alt="Sri. K. Adithya"
          />
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '0.5rem' }}>
              Sri. K. Adithya, B.E., MOB (Australia)
            </h2>
            <p style={{ color: '#1e3a8a', fontSize: '1.25rem', marginBottom: '1rem' }}>
              Trustee
            </p>
            <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
              Mr. K. Adithya, BE (Mechanical Engineering) and Master of Business, Australia, is a
              passionate entrepreneur. Through his education and varied cultural exposure, he has
              acquired the knowledge and skills necessary for his diverse career.
            </p>
            <a href="#" style={{ color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
