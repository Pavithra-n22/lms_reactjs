// HomePage.js
import React from 'react';
import lottie from 'lottie-web';

import { useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';

/*const slides = [
  { id: 1, title: 'Welcome to Our Learning Platform', description: 'Discover a world of knowledge and skills.' },
  { id: 2, title: 'Explore Diverse Courses', description: 'Unlock your potential with our range of courses.' },
  { id: 3, title: 'Join Us Today!', description: 'Start your learning journey with us.' },
];*/

const HomePage = () => {
  // Make sure the dependency array is correct here

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    /* slidesToShow: 1,
    slidesToScroll: 1,*/
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <div className="site-name">KNOWP</div>
          <div className="header-links">
            <Link to="/about">About Me</Link>
            <Link to="/course">Go to Course Page</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </header>

      <img className="full-screen-gif" src={process.env.PUBLIC_URL + '/W7gE.gif'} alt="Animated GIF" />
      
      <div className="text-content">
        <h1>KNOWP</h1><center>Your Gateway to Knowledge and Learning!</center>

<p>Embark on a journey of discovery and empowerment with KNOWP, where knowledge meets passion.
i believe in the transformative power of learning and aim to provide you with a platform that not only imparts knowledge but sparks curiosity,
  fosters creativity, and encourages continuous growth.</p>
      </div>

  
      <div id="lottie-animation"></div>
     


      <footer className="footer">
        <p>&copy; Designed By pavithra ;)</p>
      </footer>
    </div>
  );
};

export default HomePage;
