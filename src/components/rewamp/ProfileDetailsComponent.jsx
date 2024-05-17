import React, { useState, useEffect } from 'react';


const ProfileDetailsComponent = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [editedProfile, setEditedProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const userId=localStorage.getItem('id');
   

  useEffect(() => {
    // Fetch user profile details from the backend API
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:8222/api/v1/artist-profiles/user-profiles/{userId}'); // Replace {userId} with the actual user ID
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data); // Set the user profile data in state
          setEditedProfile(data); // Set the edited profile data initially to the fetched profile
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile(); // Invoke the fetch function
  }, []);

  const handleEdit = () => {
    setEditedProfile(userProfile); // Set the edited profile to the fetched profile data
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8222/api/v1/artist-profiles/update-profile/{profileId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProfile),
      });

      if (response.ok) {
        setUserProfile(editedProfile); // Update the displayed profile with the edited data
        setEditMode(false); // Exit edit mode
      } else {
        console.error('Failed to update user profile');
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          {!editMode ? (
            <div className="view-profile">
              <p><strong>Name:</strong> {userProfile.name}</p>
              <p><strong>Background:</strong> {userProfile.background}</p>
              <p><strong>Skills:</strong> {userProfile.skills}</p>
              <p><strong>Portfolio:</strong> {userProfile.portfolio}</p>
              <p><strong>Areas of Interest:</strong> {userProfile.areasOfInterest}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          ) : (
            <div className="edit-profile">
              <h2>Edit Profile</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editedProfile.name}
                  onChange={handleChange}
                />
                 <label>Background:</label>
            <input name="background" value={editedProfile.background} onChange={handleChange} />

            <label>Skills:</label>
            <input name="skills" value={editedProfile.skills} onChange={handleChange} />

            <label>Portfolio:</label>
            <input type="text" name="portfolio" value={editedProfile.portfolio} onChange={handleChange} />

            <label>Areas of Interest:</label>
            <tinput name="areasOfInterest" value={editedProfile.areasOfInterest} onChange={handleChange} />
                {/* Add other fields for editing */}
                <button type="submit">Save</button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileDetailsComponent;
