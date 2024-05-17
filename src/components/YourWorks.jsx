// YourWorks.js

import React, { useState } from 'react';
import '../assets/css/YourWorks.css'; // Import your CSS file for styling
import Header from './Header';
import Footer from './Footer';

const YourWorks = () => {
  // Sample data for user activities and works
  const [userActivities] = useState([
    {
      id: 1,
      activity: 'Posted a new artwork',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      activity: 'Received 10 likes on your artwork',
      timestamp: '5 day ago',
    },
    {
      id: 3,
      activity: 'Received 35 likes on your artwork',
      timestamp: '10 day ago',
    },
  ]);

  const [userWorks] = useState([
    {
      id: 1,
      title: 'Artwork 1',
      imageUrl:"https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      id: 2,
      title: 'Artwork 2',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2s7Wew8q3xXyRSvbHkIIViy9Pf-UQh8VZQ&usqp=CAU",
    },
    {
      id: 3,
      title: 'Artwork 3',
      imageUrl: "https://media.istockphoto.com/id/1357410492/photo/outer-space-fantasy.webp?b=1&s=170667a&w=0&k=20&c=Cs6L-fUOnXcr4TjWaF8O9YV-YSE88UgTBpm1q7TCTFE=",
    },
  ]);

  return (
    <div className="your-works">
      <h1>Your Works</h1>

      <div className="activities">
        <h2 >Activities</h2>
        <ul>
          {userActivities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.activity}</p>
              <span className="timestamp">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="works">
        <h2 className='title-yourWorks'>Your Artworks</h2>
        <div className="artwork-list">
          {userWorks.map((work) => (
            <div key={work.id} className="artwork">
              <img src={work.imageUrl} alt={work.title} />
              <p>{work.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourWorks;
