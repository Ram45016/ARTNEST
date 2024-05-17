import React, { useState } from 'react';
import '../../assets/css/feedback.css'; // Import your CSS file
import { Feedback } from '../services/Api';
import { useNavigate } from 'react-router';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    useremail: '',
    fullname: '',
    description: '',
  });
  const navigate=useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await Feedback(formData);
    console.log(response);
    navigate("/Homepage")
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="useremail">Email:</label>
          <input
            type="email"
            id="useremail"
            name="useremail"
            value={formData.useremail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
