import React from 'react';

const ManagementPage = () => {
  return (
    <div style={{ backgroundColor: '#f7fafc', padding: '2rem' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Management Member 1 */}
        <div style={{ backgroundColor: '#ffffff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between', '@media (min-width: 768px)': { flexDirection: 'row' } }}>
            <img
              style={{ width: '100%', objectFit: 'cover', '@media (min-width: 768px)': { width: '33%' } }}
              src="image_of_malarvizhi.jpg" // Replace with actual image URL
              alt="Smt. S. Malarvizhi"
            />
            <div style={{ padding: '1.5rem', '@media (min-width: 768px)': { width: '67%' } }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '0.5rem' }}>Smt. S. Malarvizhi</h2>
              <p style={{ color: '#4a5568', fontSize: '1.25rem', marginBottom: '1rem' }}>Chairperson and Managing Trustee</p>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
                Smt. S. Malarvizhi is a visionary academician, a reformer, and an able administrator.
                As an educator herself, she firmly believes in education that nurtures holistic
                development for students. She is the driving force behind the Sri Krishna Institutions
                to have emerged as one of the pioneers in providing quality education.
              </p>
              <a href="#" style={{ color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }}>Read More</a>
            </div>
          </div>
        </div>

        {/* Management Member 2 */}
        <div style={{ backgroundColor: '#ffffff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'space-between', '@media (min-width: 768px)': { flexDirection: 'row' } }}>
            <img
              style={{ width: '100%', objectFit: 'cover', '@media (min-width: 768px)': { width: '33%' } }}
              src="image_of_adithya.jpg" // Replace with actual image URL
              alt="Sri. K. Adithya"
            />
            <div style={{ padding: '1.5rem', '@media (min-width: 768px)': { width: '67%' } }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '0.5rem' }}>Sri. K. Adithya, B.E., MOB (Australia)</h2>
              <p style={{ color: '#4a5568', fontSize: '1.25rem', marginBottom: '1rem' }}>Trustee</p>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
                Mr. K. Adithya, BE (Mechanical Engineering) and Master of Business, Australia, is a
                passionate entrepreneur. Through his education and varied cultural exposure, he has
                acquired the knowledge and skills necessary for his diverse career.
              </p>
              <a href="#" style={{ color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
