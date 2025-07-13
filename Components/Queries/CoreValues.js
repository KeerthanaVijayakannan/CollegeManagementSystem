import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CoreValues() {
  const navigate = useNavigate();

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #e0f7fa, #80deea)', // Full-page gradient background
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 20px', // Padding for responsiveness
      }}
    >
      <Container 
        style={{ 
          maxWidth: '900px', 
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
            color: '#004d40', // Darker color for contrast
            textAlign: 'center',
            letterSpacing: '1.5px',
          }}
        >
          Our Core Values
        </Typography>
        <Typography 
          variant="body1" 
          style={{ 
            marginBottom: '20px', 
            lineHeight: '1.8', 
            color: '#004d40', 
            fontSize: '1.1rem',
            textAlign: 'justify',
          }}
        >
          At our institution, we are committed to a set of core values that shape our culture, guide our actions, and reflect what we stand for. These values are at the heart of everything we do, from our academic programs to our community engagement.
        </Typography>
        
        {/* Core Values Sections */}
        {[
          { title: 'Integrity', description: 'We act with honesty and adhere to the highest standards of moral and ethical values and principles through our personal and professional behavior.' },
          { title: 'Excellence', description: 'We strive for excellence in all that we do, embracing a culture of continuous improvement and setting high standards for ourselves and our community.' },
          { title: 'Respect', description: 'We treat each other with dignity and respect, embracing diversity and fostering an inclusive environment where everyone is valued.' },
          { title: 'Innovation', description: 'We encourage creativity and innovation, seeking out new ideas and approaches to meet the changing needs of our community and the world.' },
          { title: 'Social Responsibility', description: 'We are committed to making a positive impact on society through our actions and decisions, contributing to the greater good and serving our community with compassion and dedication.' },
        ].map((value, index) => (
          <React.Fragment key={index}>
            <Typography 
              variant="h6" 
              style={{ 
                marginTop: '40px', 
                fontWeight: '600', 
                color: '#00796b', 
                textTransform: 'uppercase',
                background: 'linear-gradient(to right, #26a69a, #00796b)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {value.title}
            </Typography>
            <Typography 
              variant="body1" 
              style={{ 
                marginBottom: '20px', 
                lineHeight: '1.8', 
                color: '#004d40', 
                fontSize: '1.1rem',
                textAlign: 'justify',
              }}
            >
              {value.description}
            </Typography>
          </React.Fragment>
        ))}

        {/* Image Grid at the Bottom */}
        <Grid 
          container 
          spacing={3} 
          style={{ 
            marginTop: '50px', 
          }}
        >
          <Grid item xs={12} sm={4}>
            <img 
              src="https://skcet.ac.in/wp-content/uploads/2023/12/ECE7.jpg" // Replace with your image URL
              alt="Integrity" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img 
              src="https://images.collegedunia.com/public/college_data/images/campusimage/1683877463IMG-20230428-WA0021.jpg?mode=stretch" // Replace with your image URL
              alt="Excellence" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img 
              src="https://skcet.ac.in/wp-content/uploads/2024/03/nasscom-image-1.jpg" // Replace with your image URL
              alt="Respect" 
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
