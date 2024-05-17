import React, { useState, useEffect } from 'react';
import '../../assets/css/YourWorks.css'; 
import axios from 'axios'; // Import Axios for making API requests
import ReactModal from 'react-modal';

const YourWorks = () => {
  const [userActivities] = useState([
    {
      id: 1,
      activity: 'Posted a new artwork',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      activity: 'Received 10 likes on your artwork',
      timestamp: '5 days ago',
    },
    {
      id: 3,
      activity: 'Received 35 likes on your artwork',
      timestamp: '10 days ago',
    },
  ]);

  const [userWorks, setUserWorks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('id'); 

    if (userId) {
      axios.get(`http://localhost:8222/api/v1/artwork/userartworks/${userId}`)
        .then((response) => {
          setUserWorks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching artworks:', error);
        });
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    const userId = localStorage.getItem('id'); 
    if (title && description && url) {
      axios.post('http://localhost:8222/api/v1/artwork/saveartwork', { title, description, file: url, userId })
        .then((response) => {
          console.log('Artwork saved:', response.data);
          setUserWorks([...userWorks, response.data]);
          setTitle('');
          setDescription('');
          setUrl('');
          closeModal();
        })
        .catch((error) => {
          // Handle errors
          console.error('Error saving artwork:', error);
        });
    }
  };

  return (
    <div className="your-works">
      <h1>Your Works</h1>

      <div className="activities">
        <h2>Activities</h2>
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
        <h2 className="title-yourWorks">Your Artworks</h2>
        <div className="artwork-list">
          {userWorks.map((work, index) => (
            <div key={index} className="artwork">
              <img src={work.file} alt={work.title} />
            </div>
          ))}
        </div>
        <div className="add-artwork">
          <button onClick={openModal}>Add Artwork</button>
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Artwork"
      >
        <h2>Add Artwork</h2>
        <form>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </ReactModal>
    </div>
  );
};

export default YourWorks;