import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

// Styles for section borders
const sectionBorderStyles = {
  border: '8px solid transparent',
  borderImage: 'linear-gradient(to right, #ff9a9e, #fad0c4) 1',
  padding: '100px 0',
  margin: '20px 0',
  position: 'relative',
  backgroundColor: '#fff',
  zIndex: 1,
};

// Sample data for academic programs
const programs = [
  {
    name: 'Computer Science and Engineering',
    description: 'Focuses on software development, algorithms, and computer systems. Prepares students for careers in technology and IT.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXK7IMW5fnO_6z0QxQwsBhTNfAaqEWR_g5nQ&s'
  },
  {
    name: 'Mechanical Engineering',
    description: 'Covers the design, analysis, and manufacturing of mechanical systems. Ideal for students interested in machinery and robotics.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3yjUy-ZDNe8t8TlncQHLpmmMCKWZWlk42Q&s'
  },
  {
    name: 'Civil Engineering',
    description: 'Involves the planning, design, and construction of infrastructure projects. Suitable for those interested in public works and construction.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKurEUPDYlUVMum2DKmhDq-5M3ilezRVQ6A&s'
  },
];

export default function AcademicsSection() {
  return (
    <section id="academics" style={sectionBorderStyles}>
      <Container>
        <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Academics
        </Typography>
        
        <Typography variant="body1" style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          Our college offers a diverse range of academic programs designed to provide students with the knowledge and skills necessary for success in their chosen fields. Our curriculum is designed to foster critical thinking, creativity, and problem-solving skills. We offer undergraduate and postgraduate programs in various disciplines, including engineering, computer science, and humanities.
        </Typography>

        <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Key Features:
        </Typography>
        <ul>
          <li>State-of-the-art facilities and infrastructure</li>
          <li>Experienced and highly qualified faculty</li>
          <li>Innovative teaching methods and technology integration</li>
          <li>Comprehensive support services for academic and personal development</li>
        </ul>

        <Typography variant="h5" style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>
          Our Programs
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
                <img
                  src={program.image}
                  alt={program.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
                />
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {program.name}
                </Typography>
                <Typography variant="body2" style={{ lineHeight: '1.6' }}>
                  {program.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>
          Faculty Highlights
        </Typography>
        <Grid container spacing={4}>
          {/* Faculty member 1 */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <img
                src="https://skct.irins.org/assets/profile_images/185858.jpg" // Replace with your actual image URL
                alt="Faculty Member 1"
                style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }}
              />
              <Box>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  Dr. Sudha
                </Typography>
                <Typography variant="body2">
                  Professor of Computer Science with 20 years of experience in software engineering and machine learning.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Faculty member 2 */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QN3MlBBEI09V4_n7z1vEZJJsObmL7cWZYw&s" // Replace with your actual image URL
                alt="Faculty Member 2"
                style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }}
              />
              <Box>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  Dr. Dhivya
                </Typography>
                <Typography variant="body2">
                  Associate Professor of Mechanical Engineering specializing in robotics and automation.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Typography variant="h5" style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>
          Student Testimonials
        </Typography>
        <Grid container spacing={4}>
          {/* Testimonial 1 */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
              <Typography variant="body1" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                "The academic programs at this college are exceptional. The hands-on experience and knowledgeable faculty prepared me well for my career."
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                - Alex Johnson, Computer Science Graduate
              </Typography>
            </Paper>
          </Grid>

          {/* Testimonial 2 */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
              <Typography variant="body1" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                "The diverse range of programs and supportive environment made my learning experience enriching and enjoyable."
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                - Emily Davis, Mechanical Engineering Graduate
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
