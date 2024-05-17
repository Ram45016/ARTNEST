import React, { useState, useEffect } from 'react';
import '../../assets/css/AssetsPage.css';
import axios from 'axios';

const AssetsPage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8222/api/v1/artwork/allartworks')
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching artworks:', error);
      });
  }, []);

  return (
    <>
      <h1>SHOWCASE</h1>
    <div className="artworksContainer">
      {artworks.map((artwork, index) => (
        <div className="artworkCard" key={index}>
          <div className="artworkImage">
            <img src={artwork.file} alt={artwork.title} />
          </div>
          <div className="artworkInfo">
            <p className="artworkTitle">{artwork.title}</p>
            <div className="artworkUser" title={`Uploaded by: ${artwork.user}`}>
              <p>{artwork.user}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default AssetsPage;
