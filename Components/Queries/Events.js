import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function Events() {
  const navigate = useNavigate();

  const events = [
    // Events data (same as before)
    { date: '9 Aug', title: 'Hands on Training', description: 'Hands on Training on EdgeCam Software', department: 'MECH', brochureLink: '#', bgColor: '#ffffff' },
    { date: '9 Aug', title: 'Department Association', description: 'Inauguration Ceremony of CSE Department Association.', department: 'CSE', brochureLink: '#', bgColor: '#ff5252' },
    { date: '29 Jul', title: 'Film Acting Workshop', description: 'Aura Club organizes film acting workshop', department: 'WORKSHOP', brochureLink: '#', bgColor: '#ffffff' },
    { date: '24 Jul', title: 'Just Startup', description: 'Description for Just Startup event', department: 'EVENT', brochureLink: '#', bgColor: '#ffffff' },
    { date: '23 Jul', title: 'Women Empowerment', description: 'Description for Women Empowerment event', department: 'EVENT', brochureLink: '#', bgColor: '#ff5252' },
    { date: '19 Jul', title: 'Developing Right Entrepreneurial Spirit', description: 'Guest lecture on entrepreneurial spirit', department: 'GUEST LECTURE', brochureLink: '#', bgColor: '#ffffff' },
    { date: '18 Jul', title: 'Tech Fest 2024', description: 'Annual tech fest with competitions, workshops, and guest lectures.', department: 'FEST', brochureLink: '#', bgColor: '#ffffff' },
    { date: '15 Jul', title: 'Artificial Intelligence Seminar', description: 'Seminar on AI and its applications in various industries.', department: 'SEMINAR', brochureLink: '#', bgColor: '#ff5252' },
    { date: '12 Jul', title: 'Cultural Day', description: 'Celebrating diverse cultures with performances and exhibitions.', department: 'CULTURAL', brochureLink: '#', bgColor: '#ffffff' },
    { date: '10 Jul', title: 'Hackathon 2024', description: '24-hour coding marathon with exciting challenges and prizes.', department: 'HACKATHON', brochureLink: '#', bgColor: '#ffffff' },
    { date: '8 Jul', title: 'Blockchain Workshop', description: 'Hands-on workshop on blockchain technology and its applications.', department: 'WORKSHOP', brochureLink: '#', bgColor: '#ffffff' },
    { date: '5 Jul', title: 'Machine Learning Bootcamp', description: 'Intensive bootcamp covering key ML concepts and techniques.', department: 'BOOTCAMP', brochureLink: '#', bgColor: '#ff5252' },
  ];

  return (
    <Container style={{ marginTop: '40px' }}>
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

      {/* Events Grid */}
      <Grid container spacing={4}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                backgroundColor: event.bgColor,
                border: `2px solid ${event.bgColor === '#ff5252' ? '#ff5252' : '#000080'}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 'bold', color: '#000080' }}>
                  {event.date}
                </Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold', margin: '10px 0' }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '10px' }}>
                  {event.description}
                </Typography>
                <Typography variant="caption" style={{ color: '#ff5252', fontWeight: 'bold' }}>
                  {event.department}
                </Typography>
              </CardContent>
              <Button
                href={event.brochureLink}
                style={{
                  margin: '10px',
                  color: '#000080',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  alignSelf: 'flex-start',
                }}
              >
                Brochure
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
