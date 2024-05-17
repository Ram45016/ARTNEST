import React, { useState } from 'react';
import '../assets/css/UploadPage.css';
import Header from './Header';
import Footer from './Footer'

function UploadPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [userWorks, setUserWorks] = useState([]); // Updated userWorks state

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a delay for file upload (replace with actual upload logic)
    setTimeout(() => {
      const newWork = {
        id: userWorks.length + 1, // Generate a unique ID
        title: title,
        imageUrl: URL.createObjectURL(file), // Display uploaded image
      };

      // Update userWorks with the new work
      setUserWorks([...userWorks, newWork]);

      // Reset form fields after submission
      setTitle('');
      setDescription('');
      setFile(null);
    }, 1000); // Simulated 1-second delay for upload

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Selected File:', file);
  };

  return (
    <div>
    <div className="upload-page">
      <h1>Upload Your Artwork</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            required
            ></textarea>
        </div>
        <div className="form-group">
          <label>Choose File</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            />
        </div>
        <button type="submit">Upload</button>
      </form>
      </div>
            </div>
  );
}

export default UploadPage;
