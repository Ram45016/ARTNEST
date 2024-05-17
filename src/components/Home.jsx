import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/images/arttt.jpg';
import img2 from '../assets/images/createart.jpg';
import img3 from '../assets/images/showcase.jpg';
import img4 from '../assets/images/connect.jpg';
import hImg1 from '../assets/images/Jan-Business_team_4.jpg';
import hImg2 from '../assets/images/4529196.jpg';
import hImg3 from '../assets/images/54950.jpg';
import { Carousel } from 'react-responsive-carousel';

const featuresData = [
    {
        img: img2,
        title: "Create Art Together",
        description: "Collaborate with artists worldwide on creative projects.",
        link: "/project"
    },
    {
        img: img3,
        title: "Showcase Your Work",
        description: "Display your art portfolio and gain recognition.",
        link: "/your-works"
    },
    {
        img: img4,
        title: "Connect with Artists",
        description: "Connect, chat, and exchange ideas with fellow artists.",
        link: "/project"
    }
];

const Feature = ({ img, title, description, link }) => (
    <Link to={link} className="feature" style={{ textDecoration: 'none' }}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </Link>
);

const ArtCarousel = () => (
    <Carousel className="carousel" autoPlay interval={3000} infiniteLoop showThumbs={false}>
        <div>
            <img src={hImg1} alt="Artistic Collaboration" />
        </div>
        <div>
            <img src={hImg2} alt="Create Art Together" /> 
        </div>
        <div>
            <img src={hImg3} alt="Showcase Your Work" />
        </div>
    </Carousel>
);

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to ArtNest</h1>
                    <p>An Online Artistic Collaboration Platform</p>
                </div>
                <ArtCarousel />
            </section>

            <section className="features">
                {featuresData.map(feature => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </section>
        </div>
    );
};

export default Home;
