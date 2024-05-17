import React from 'react';
import '../assets/css/Aboutus.css'; // You can create a separate CSS file for styling
import team2 from '../assets/images/team member.jpg'
function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to ArtNest, your online haven for artistic collaboration!</p>
      <p>Our mission is to provide a platform where artists from all around the world can come together, share their work, collaborate on projects, and inspire each other.</p>
      <p>At ArtNest, we believe that art has the power to connect people and transcend boundaries. Whether you're a painter, photographer, sculptor, or any other type of artist, you'll find a welcoming community here.</p>
      <p>Join us on this creative journey and be part of a vibrant community of artists.</p>
      
      <h2>Meet the Team</h2>
      <div className="team-member">
        <img src={team2} alt="John Doe" />
        <h3>Subashreedhar</h3>
        <p>Co-founder & CEO</p>
      </div>
      <div className="team-member">
        <img src={team2} alt="Jane Smith" />
        <h3>Vaishnav</h3>
        <p>Co-founder & Creative Director</p>
      </div>
      
      <footer>
        <p>&copy; 2023 ArtNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
