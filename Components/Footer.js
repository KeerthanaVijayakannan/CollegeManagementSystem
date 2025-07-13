import React from 'react';
import Feedback from './Queries/Feedback';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '30px 0', position: 'relative' }}>
      {/* Content Above the White Line */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px 100px', color: '#1e3a8a', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Logo Above the White Line */}
          <img src="https://tse4.mm.bing.net/th?id=OIP.kiKWJL8djHmFirst70cIUwHaHN&pid=Api&P=0&h=180" alt="College Logo" style={{ width: '120px', marginRight: '20px' }} />
          <div>
            <h3 style={{ margin: '10px 0 5px', fontWeight: 'bold' }}>Sri Krishna College of Technology</h3>
            <p style={{ margin: '0', fontSize: '18px' }}>An Autonomous Institution | Accredited by NAAC with 'A' Grade</p>
            <p style={{ margin: '10px 0 5px', fontSize: '18px' }}>Kovaipudur, Coimbatore – 641042, Tamil Nadu</p>
            <p style={{ margin: '0', fontSize: '18px' }}>
              <a href="tel:04222984567" style={{ color: '#1e3a8a', textDecoration: 'none' }}>0422-2984567</a>,{' '}
              <a href="tel:04222984568" style={{ color: '#1e3a8a', textDecoration: 'none' }}>0422-2984568</a>
            </p>
            <p style={{ margin: '10px 0 0', fontSize: '18px' }}>
              <a href="mailto:info@skct.edu.in" style={{ color: '#1e3a8a', textDecoration: 'none' }}>info@skct.edu.in</a>
            </p>
            <p style={{ margin: '5px 0 0', fontSize: '18px' }}>
              <a href="mailto:principal@skct.edu.in" style={{ color: '#1e3a8a', textDecoration: 'none' }}>principal@skct.edu.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* White Line Separator */}
      <div style={{ height: '5px', backgroundColor: '#ffffff' }}></div>

      {/* Footer Content Below the White Line */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 100px', flexWrap: 'wrap' }}>
        {/* Main Links */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#ff0000', marginBottom: '10px' }}>Main Links</h4>
          <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><a href="#aboutus" style={{ color: '#ffffff', textDecoration: 'none' }}>About us</a></li>
            <li><a href="#academics" style={{ color: '#ffffff', textDecoration: 'none' }}>Academics</a></li>
            <li><a href="#admissions" style={{ color: '#ffffff', textDecoration: 'none' }}>Admissions</a></li>
            <li><a href="#campustour" style={{ color: '#ffffff', textDecoration: 'none' }}>Campus Tour</a></li>
            <li><a href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact Us</a></li>
            <li><a href="#examinations" style={{ color: '#ffffff', textDecoration: 'none' }}>Examinations</a></li>
            <li><a href="#industryconnect" style={{ color: '#ffffff', textDecoration: 'none' }}>Industry Connect</a></li>
            <li><a href="#placement" style={{ color: '#ffffff', textDecoration: 'none' }}>Placement</a></li>
            <li><a href="#alumni" style={{ color: '#ffffff', textDecoration: 'none' }}>Alumni</a></li>
            <li><a href="#careers" style={{ color: '#ffffff', textDecoration: 'none' }}>Careers</a></li>
          </ul>
        </div>

        {/* Accreditations */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#ff0000', marginBottom: '10px' }}>Accreditations</h4>
          <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8' }}>
            <li style={{ color: '#ffffff' }}>AICTE</li>
            <li style={{ color: '#ffffff' }}>IIC</li>
            <li style={{ color: '#ffffff' }}>IQAC</li>
            <li style={{ color: '#ffffff' }}>NAAC</li>
            <li style={{ color: '#ffffff' }}>NIRF</li>
            <li style={{ color: '#ffffff' }}>NISP</li>
            <li style={{ color: '#ffffff' }}>NBA</li>
            <li style={{ color: '#ffffff' }}>ISO 9001:2015</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#ff0000', marginBottom: '10px' }}>Quick Links</h4>
          <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><a href="#aictebooks" style={{ color: '#ffffff', textDecoration: 'none' }}>AICTE books Recommended-authors</a></li>
            <li><a href="#aictebooksug" style={{ color: '#ffffff', textDecoration: 'none' }}>AICTE books Recommended-UG</a></li>
            <li><a href="#auditedstatements" style={{ color: '#ffffff', textDecoration: 'none' }}>Audited Financial Statements 2018-2023</a></li>
            <li><a href="#codeofconduct" style={{ color: '#ffffff', textDecoration: 'none' }}>Code of Conduct</a></li>
            <li><a href="#skctorganogram" style={{ color: '#ffffff', textDecoration: 'none' }}>SKCT Organogram</a></li>
            <li><a href="#strategicplan" style={{ color: '#ffffff', textDecoration: 'none' }}>Strategic Plan and Deployment</a></li>
            <li><a href="#ugcundertaking" style={{ color: '#ffffff', textDecoration: 'none' }}>UGC Undertaking</a></li>
            <li><a href="#campusmap" style={{ color: '#ffffff', textDecoration: 'none' }}>Campus Map</a></li>
            <li><a href="#faq" style={{ color: '#ffffff', textDecoration: 'none' }}>FAQ</a></li>
            <li><a href="#newsletters" style={{ color: '#ffffff', textDecoration: 'none' }}>Newsletters</a></li>
          </ul>
        </div>

        {/* Additional Information */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#ff0000', marginBottom: '10px' }}>Student Resources</h4>
          <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><a href="#scholarships" style={{ color: '#ffffff', textDecoration: 'none' }}>Scholarships</a></li>
            <li><a href="#studentcouncil" style={{ color: '#ffffff', textDecoration: 'none' }}>Student Council</a></li>
            <li><a href="#internships" style={{ color: '#ffffff', textDecoration: 'none' }}>Internships</a></li>
            <li><a href="#mentorship" style={{ color: '#ffffff', textDecoration: 'none' }}>Mentorship Programs</a></li>
            <li><a href="#clubs" style={{ color: '#ffffff', textDecoration: 'none' }}>Clubs & Organizations</a></li>
            <li><a href="#resources" style={{ color: '#ffffff', textDecoration: 'none' }}>Resources & Support</a></li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
