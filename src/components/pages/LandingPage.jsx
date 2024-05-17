import React from 'react';
import '../../assets/css/LandingPage.css'; // Updated CSS file name
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/images/arttt.jpg';
import img2 from '../../assets/images/createart.jpg';
import img3 from '../../assets/images/showcase.jpg';
import img4 from '../../assets/images/connect.jpg';
import { Carousel } from 'react-responsive-carousel';

const featuresData = [
    {
        img: img2,
        title: "Create Art Together",
        description: "Collaborate with artists worldwide on creative projects."
    },
    {
        img: img3,
        title: "Showcase Your Work",
        description: "Display your art portfolio and gain recognition."
    },
    {
        img: img4,
        title: "Connect with Artists",
        description: "Connect, chat, and exchange ideas with fellow artists."
    }
];

const Feature = ({ img, title, description }) => (
    <div className="feature">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

const ArtCarousel = () => (
    <Carousel className="carousel" autoPlay interval={3000} infiniteLoop showThumbs={false}>
        <div>
            <img src={img1} alt="Artistic Collaboration" />
        </div>
        <div>
            <img src={img2} alt="Create Art Together" />
        </div>
        <div>
            <img src={img3} alt="Showcase Your Work" />
        </div>
    </Carousel>
);

const CallToAction = () => (
    <section className="cta">
        <h2>Join ArtNest Today</h2>
        <button className="btn">Sign Up Now</button>
    </section>
);

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ArtNest</h1>
          <p>Your Online Artistic Collaboration Platform</p>
          <button className="btn">Get Started</button>
        </div>
        <ArtCarousel />
      </section>

      <section className="features">
        {featuresData.map((feature, index) => (
            <Feature key={index} {...feature} />
        ))}
      </section>

      <CallToAction />
    </div>
  );
};

export default LandingPage;
