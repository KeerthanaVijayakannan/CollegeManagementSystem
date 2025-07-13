import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppBar, Toolbar, Typography, Container, Button, Menu, MenuItem, Grid, Paper, TextField } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const departments = [
  { name: 'B.E. Civil Engineering', icon: '🏗️', path: '/civil' },
  { name: 'B.E. Computer Science and Engineering', icon: '💻', path: '/cse' },
  { name: 'B.E. Computer Science and Engineering (AI and ML)', icon: '🤖', path: '/aiml' },
  { name: 'B.E. Computer Science and Engineering (Cyber Security)', icon: '🔒', path: '/cyber' },
  { name: 'B.E. Computer Science and Engineering (Internet of Things)', icon: '🌐', path: '/iot' },
  { name: 'B.E. Electrical and Electronics Engineering', icon: '⚡', path: '/eee' },
  { name: 'B.E. Electronics and Communication Engineering', icon: '📡', path: '/ece' },
  { name: 'B.E. Mechanical Engineering', icon: '🛠️', path: '/mech' },
  { name: 'Science and Humanities', icon: '🔬', path: '/science-humanities' },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
};

const images = [
  'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-14.jpg',
  'https://www.srikrishna.ac.in/images/Slider/Slide2.jpg',
  'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-6.jpg',
];

export default function LandingPageCMS() {
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAboutUsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const scrollToNextSection = () => {
    scroll.scrollMore(window.innerHeight, {
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  const sectionStyles = {
    container: {
      padding: '60px 0', // Consistent padding for all sections
      textAlign: 'center',
    },
    paper: {
      padding: '30px', // Consistent padding inside cards
      textAlign: 'center',
      height: '100%', // Make sure the paper elements have uniform height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    admissionsCard: {
      padding: '20px',
      textAlign: 'center',
      color: 'white',
      background: '#1e3a8a', // Specific color for admissions cards
    },
    icon: {
      fontSize: '50px',
    },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation Bar */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        style={{ background: 'white' }}
      >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <img src="https://static.vecteezy.com/system/resources/previews/021/996/239/non_2x/university-logo-design-vector.jpg" alt="logo" style={{ height: '50px', marginRight: '10px' }} />
        
          <Typography variant="h6">
         
          </Typography>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button
              aria-controls={open ? 'about-us-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleAboutUsClick}
            >
              About Us
            </Button>
            <Menu
              id="about-us-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'about-us-button',
              }}
              PaperProps={{
                style: {
                  background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
                },
              }}
            >
              <MenuItem onClick={() => { handleClose(); navigate('/institution'); }} style={{ color: 'white' }}>
                Institution
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/management'); }} style={{ color: 'white' }}>
                Management
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/principal'); }} style={{ color: 'white' }}>
                Principal
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/vision-mission'); }} style={{ color: 'white' }}>
                Vision and Mission
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/core-values'); }} style={{ color: 'white' }}>
                Core Values
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate('/events'); }} style={{ color: 'white' }}>
                Events
              </MenuItem>
            </Menu>
            <Button onClick={() => navigate('/academics')}>Academics</Button>
            <ScrollLink to="admissions" smooth={true} duration={500}>
              <Button>Admissions</Button>
            </ScrollLink>
            <ScrollLink to="departments" smooth={true} duration={500}>
              <Button>Departments</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button>Contact</Button>
            </ScrollLink>
            <Button onClick={() => navigate('/dash')}>Features</Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '20px' }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section with Carousel */}
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <div
                style={{
                  height: '100vh',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Container>
                  <Typography variant="h3" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    Welcome to Ed Folio
                  </Typography>
                  <div style={{ marginTop: '50px', cursor: 'pointer' }} onClick={scrollToNextSection}>
                  <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPP0TdzpZTpl2aBeEfuRnnjUCSTPrZ0GMudA&s"
                  alt="scroll down"
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }} // Keeps the image circular
                />
                  </div>
                </Container>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Academics Section */}
      <section id="academics" style={sectionStyles.container}>
        <Container>
          <Typography variant="h4" style={{ marginBottom: '40px' }}>
            Academics
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} style={sectionStyles.paper}>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>
                  Undergraduate Programs
                </Typography>
                <Typography>
                  Explore our wide range of undergraduate programs that prepare students for a successful career.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} style={sectionStyles.paper}>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>
                  Postgraduate Programs
                </Typography>
                <Typography>
                  Our postgraduate programs are designed to enhance the knowledge and skills required in your profession.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} style={sectionStyles.paper}>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>
                  Research Programs
                </Typography>
                <Typography>
                  Engage in cutting-edge research with our Ph.D. programs and contribute to the future of technology.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Admissions Section */}
      <section id="admissions" style={sectionStyles.admissions}>
  <Container>
    <Typography variant="h4" style={{ marginBottom: '40px', textAlign: 'center' }}>
      Brochure
    </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt="Brochure 2023 - 2024"
              style={{ width: '40px', marginBottom: '-10px', marginRight: '10px' }}
            />
            Brochure 2023 - 2024
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt="Cutoff Marks 2023 - 2024"
              style={{ width: '40px', marginBottom: '-10px', marginRight: '10px' }}
            />
            Cutoff Marks 2023 - 2024
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    <Grid container spacing={3} style={{ marginTop: '40px' }}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#0e3055', color: 'white' }}>
          <Typography variant="h6" style={{ marginBottom: '10px' }}>
            College – SKCT
          </Typography>
          <Typography variant="body1">
            <strong>Address</strong>
            <br />
            Sri Krishna College of Technology,
            <br />
            Kovaipudur,
            <br />
            Coimbatore – 641 042.
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            <strong>Contact Us</strong>
            <br />
            0422-2984567
            <br />
            0422-2984568
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            <strong>E-Contact</strong>
            <br />
            info@skct.edu.in
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#0077c0', color: 'white' }}>
          <Typography variant="h6" style={{ marginBottom: '10px' }}>
            Administrative Trust Office
          </Typography>
          <Typography variant="body1">
            <strong>Address</strong>
            <br />
            VLB & Sri Krishna Trust,
            <br />
            Kovaipudur,
            <br />
            Coimbatore – 641 042.
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            <strong>Contact Us</strong>
            <br />
            0422-2984545
            <br />
            0422-2984549
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            <strong>E-Contact</strong>
            <br />
            info@skct.edu.in
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
</section>


      {/* Departments Section */}
      <section id="departments" style={sectionStyles.container}>
        <Container>
          <Typography variant="h4" style={{ marginBottom: '40px' }}>
            Departments
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {departments.map((department, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} style={sectionStyles.paper}>
                  <Typography variant="h6" style={{ marginBottom: '10px' }}>
                    <span style={sectionStyles.icon}>{department.icon}</span> {department.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                    onClick={() => navigate(department.path)}
                  >
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" style={sectionStyles.container}>
        <Container>
          <Typography variant="h4" style={{ marginBottom: '40px' }}>
            Contact Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={sectionStyles.paper}>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>
                  General Inquiry
                </Typography>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}
                >
                  Send Message
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
  <Paper elevation={3} style={{
    padding: '20px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  }}>
    <Typography variant="h6" style={{
      marginBottom: '15px',
      color: '#1e3a8a',
      fontWeight: 600,
    }}>
      Visit Us
    </Typography>
    <Typography style={{
      marginBottom: '10px',
      lineHeight: '1.6',
      color: '#555',
    }}>
      Sri Krishna College of Technology<br />
      Kovaipudur, Coimbatore - 641 042.<br />
      Tamil Nadu, India
    </Typography>
    <Typography style={{
      marginTop: '10px',
      marginBottom: '20px',
      lineHeight: '1.6',
      color: '#555',
    }}>
      Phone: <a href="tel:+914222984567" style={{
        color: '#1e3a8a',
        textDecoration: 'none',
        fontWeight: '500',
      }}>0422-2984567</a><br />
      Email: <a href="mailto:info@skct.edu.in" style={{
        color: '#1e3a8a',
        textDecoration: 'none',
        fontWeight: '500',
      }}>info@skct.edu.in</a>
    </Typography>
    <Typography style={{
      marginBottom: '20px',
      lineHeight: '1.6',
      color: '#555',
    }}>
      <strong>Office Hours:</strong><br />
      Monday to Friday: 9:00 AM - 5:00 PM<br />
      Saturday: 10:00 AM - 2:00 PM<br />
      Sunday: Closed
    </Typography>
    <Typography style={{
      marginBottom: '20px',
      lineHeight: '1.6',
      color: '#555',
    }}>
      <strong>Connect with Us:</strong><br />
      Follow us on social media for the latest updates and news:
    </Typography>
    <div style={{ marginBottom: '20px' }}>
      <a href="https://www.facebook.com/skctofficial/" target="_blank" rel="noopener noreferrer" style={{
        marginRight: '10px',
        color: '#1e3a8a',
        textDecoration: 'none',
        fontWeight: '500',
      }}>Facebook</a>
      <a href="https://www.linkedin.com/school/skctofficial/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{
        marginRight: '10px',
        color: '#1e3a8a',
        textDecoration: 'none',
        fontWeight: '500',
      }}>LinkedIn</a>
      <a href="https://www.instagram.com/skct__official/" target="_blank" rel="noopener noreferrer" style={{
        marginRight: '10px',
        color: '#1e3a8a',
        textDecoration: 'none',
        fontWeight: '500',
      }}>Instagram</a>
    </div>
    <Button
      variant="contained"
      color="primary"
      style={{
        marginTop: '20px',
        backgroundColor: '#1e3a8a',
        color: '#fff',
        textTransform: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
      }}
      onClick={() => window.open('https://www.google.com/maps/place/Sri+Krishna+College+Of+Technology/@10.9276065,76.9258276,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMjC8YZy4pXQLEaSXQncn8BDc9HqPYjcxS_LZfH!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMjC8YZy4pXQLEaSXQncn8BDc9HqPYjcxS_LZfH%3Dw203-h152-k-no!7i4624!8i3468!4m7!3m6!1s0x3ba85b823c4ca3d5:0x23416a992879b7c4!8m2!3d10.9276015!4d76.9257675!10e5!16s%2Fg%2F11xjs80l_?entry=ttu', '_blank')}
    >
      Get Directions
    </Button>
  </Paper>
</Grid>
          
          </Grid>
        </Container>
      </section>
    </div>
  );
}
