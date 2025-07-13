import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function VisionMissionPage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header Image */}
      <div style={{ position: 'relative', height: '250px' }}>
        <img
          src="https://gyaanarth.com/wp-content/uploads/2022/07/bd1.gif" // Replace with your header image URL
          alt="Vision and Mission"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" style={{ fontWeight: 'bold', color: 'white' }}>
            Vision and Mission
          </Typography>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <Container style={{ marginTop: '40px' }}>
        <Grid container spacing={0}>
          {/* Vision Section */}
          <Grid item xs={12} md={6} style={{ backgroundColor: '#0e2846', padding: '40px' }}>
            <Typography variant="h4" style={{ color: 'white', marginBottom: '20px' }}>
              Vision
            </Typography>
            <Typography variant="body1" style={{ color: 'white', fontSize: '1.1rem' }}>
              Sri Krishna College of Technology aspires to be recognized as one of the pioneers in
              imparting world-class technical education through technology-enabled innovative
              teaching learning processes with a focus on research activities to cater to societal
              needs.
            </Typography>
          </Grid>

          {/* Mission Section */}
          <Grid item xs={12} md={6} style={{ backgroundColor: '#166bbd', padding: '40px' }}>
            <Typography variant="h4" style={{ color: 'white', marginBottom: '20px' }}>
              Mission
            </Typography>
            <Typography variant="body1" style={{ color: 'white', fontSize: '1.1rem' }}>
              To be recognized as a center of excellence in science, engineering, and technology
              through effective teaching and learning processes by providing a conducive learning
              environment. To foster research and development with creative and entrepreneurial
              skills by means of innovative applications of technology. Accomplish the expectations
              of society and industry by nurturing the students to be competent professionals with
              integrity.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Back Button */}
      <Box mt={4} textAlign="center">
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#1976d2',
            color: '#ffffff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Back
        </button>
      </Box>
    </div>
  );
}
