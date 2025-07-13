import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function InstitutionPage() {
  const navigate = useNavigate();

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f1f1f1, #e0e0e0)', // Full-page gradient background
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '50px 20px', // Padding for responsiveness
      }}
    >
      <Container 
        style={{ 
          maxWidth: '1000px', 
          background: '#ffffffb0', // Semi-transparent background to make text pop
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
          padding: '50px',
        }}
      >
        {/* Back Button */}
        <Box mb={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: '#000080',
              color: '#ffffff',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
          >
            Back
          </Button>
        </Box>

        <Typography 
          variant="h4" 
          style={{ 
            marginBottom: '30px', 
            fontWeight: 'bold', 
            color: '#2c387e', // Darker color for contrast
            textAlign: 'center',
            letterSpacing: '1.5px',
          }}
        >
          About Our Institution
        </Typography>
        
        {/* Introduction Section */}
        <Typography 
          variant="body1" 
          style={{ 
            marginBottom: '30px', 
            lineHeight: '1.8', 
            color: '#333', 
            fontSize: '1.1rem',
            textAlign: 'justify',
          }}
        >
          Our institution has a long-standing tradition of academic excellence and community involvement. Founded in the year 1985, we have grown to become a premier institution offering a wide range of programs that cater to the diverse needs of our students. We are committed to nurturing the talents of our students, providing them with a supportive environment that fosters intellectual growth and personal development.
        </Typography>
        
        {/* Mission and Vision Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              style={{ 
                marginBottom: '20px', 
                fontWeight: 'bold', 
                color: '#1976d2', 
              }}
            >
              Our Mission
            </Typography>
            <Typography 
              variant="body1" 
              style={{ 
                marginBottom: '30px', 
                lineHeight: '1.8', 
                color: '#333', 
                fontSize: '1rem',
                textAlign: 'justify',
              }}
            >
              Our mission is to provide a transformative educational experience, fostering a culture of innovation and excellence, preparing our students to become leaders in their respective fields. We are dedicated to equipping our students with the knowledge, skills, and values necessary to contribute positively to society.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              style={{ 
                marginBottom: '20px', 
                fontWeight: 'bold', 
                color: '#1976d2', 
              }}
            >
              Our Vision
            </Typography>
            <Typography 
              variant="body1" 
              style={{ 
                marginBottom: '30px', 
                lineHeight: '1.8', 
                color: '#333', 
                fontSize: '1rem',
                textAlign: 'justify',
              }}
            >
              Our vision is to be recognized as a leading institution for higher learning, known for our commitment to academic excellence, research, and innovation. We aim to create a dynamic and inclusive community where students are encouraged to pursue their passions and achieve their full potential.
            </Typography>
          </Grid>
        </Grid>
        
        {/* History Section */}
        <Typography 
          variant="h5" 
          style={{ 
            marginTop: '40px', 
            marginBottom: '20px', 
            fontWeight: 'bold', 
            color: '#1976d2', 
          }}
        >
          Our History
        </Typography>
        <Typography 
          variant="body1" 
          style={{ 
            marginBottom: '30px', 
            lineHeight: '1.8', 
            color: '#333', 
            fontSize: '1rem',
            textAlign: 'justify',
          }}
        >
          Since our founding, our institution has been dedicated to providing a world-class education to students from all backgrounds. Over the years, we have expanded our academic offerings, grown our campus, and strengthened our ties with the community. We continue to build on our legacy of excellence, adapting to the changing needs of society and preparing our students for the challenges of the future.
        </Typography>
        
        {/* Image Grid */}
        <Grid container spacing={3} style={{ marginTop: '50px' }}>
          <Grid item xs={12} sm={4}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Q4KLHcehojsnn2ye0IlYQE8gvsWiE7gLnUsCPBCEQxoBZMNBxECsCqvwktVP-47pgQk&usqp=CAU" // Replace with your image URL
              alt="Campus Image 1" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img 
              src="https://careermudhra.com/wp-content/uploads/sri-krishna-college-of-technology-coimbatore.jpg" // Replace with your image URL
              alt="Campus Image 2" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img 
              src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-6.jpg" // Replace with your image URL
              alt="Campus Image 3" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
