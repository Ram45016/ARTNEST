import React, { useState, useEffect } from 'react';
import '../assets/css/ArtistProfile.css';
import artist from '../assets/images/team member.jpg';

function ArtistProfile() {
    const [artistData, setArtistData] = useState({});
    const [showEditForm, setShowEditForm] = useState(false);

    const handleToggleEditForm = () => {
        setShowEditForm(prev => !prev);
    };

    useEffect(() => {
        // Simulate fetching artist data from the backend
        // Replace this with actual API call in your code
        fetch('/api/artist-profile')
            .then((response) => response.json())
            .then((data) => {
                setArtistData(data);
            })
            .catch((error) => {
                console.error('Error fetching artist data: ', error);
                // Display sample artist data in case of an error
                setArtistData({
                    name: 'Aria Smith',
                    title: 'Visual Artist & Illustrator',
                    about: 'Hello! I\'m Aria, a visual artist based in Los Angeles...',
                    experience: ['2015-2023: Independent Visual Artist, Los Angeles.', '2012-2015: Lead Illustrator, Artistic Studios, New York.'],
                    exhibitions: ['Solo Exhibition, Gallery Nova, London, 2020.', 'Group Exhibition, Artistic Horizons, Paris, 2019.'],
                    publications: ['"The Essence of Modern Art", Featured Artist, Art Monthly Magazine, June 2021.'],
                    education: ['Master of Fine Arts, New York Academy of Art, 2010.', 'Bachelor of Visual Arts, San Francisco State University, 2008.'],
                    skills: ['Expertise in Oil Painting, Acrylics, and Watercolor.', 'Digital Art & Illustration.'],
                    commissions: 'I\'m available for private commissions, brand collaborations, and gallery exhibitions.',
                    instagramLink: 'https://www.instagram.com/aria_smith',
                    twitterLink: 'https://www.twitter.com/aria_smith',
                    artstationLink: 'https://www.artstation.com/aria_smith',
                    testimonial1: 'Aria\'s work is breathtaking. Her ability to capture emotions in her paintings is unparalleled. A true master of her craft.',
                    testimonialAuthor1: 'Claire De Lune, Art Critic',
                    testimonial2: 'Collaborating with Aria was a delightful experience. Her professionalism and talent are evident in every piece she creates.',
                    testimonialAuthor2: 'John Doe, Author',
                });
            });
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission and update artist profile data on the backend
        // You can send the updated data to your backend API here
        // For simplicity, we'll just toggle the edit form off for this example
        handleToggleEditForm();
    };

    return (
        <div className="artist-profile">
            <section className="header-section">
                <img src={artist} alt={artistData.name} className="profile-image" />
                <div className="artist-title">
                    <h1>{artistData.name}</h1>
                    <span>{artistData.title}</span>
                </div>
            </section>

            <button className="edit-profile-button" onClick={handleToggleEditForm}>
                Edit Profile
            </button>

            {showEditForm ? (
                <div className="edit-profile-overlay">
                    <button className="close-edit-form" onClick={handleToggleEditForm}>✕</button>
                    <section className="edit-profile-form">
                        <h2>Edit Profile</h2>
                        <form onSubmit={handleFormSubmit}>
                            {/* Name */}
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" defaultValue={artistData.name} />
                            </div>

                            {/* Title */}
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" defaultValue={artistData.title} />
                            </div>

                            {/* About Me */}
                            <div className="form-group">
                                <label>About Me:</label>
                                <textarea defaultValue={artistData.about}></textarea>
                            </div>

                            {/* Experience */}
                            <div className="form-group">
                                <label>Experience:</label>
                                <textarea defaultValue={artistData.experience.join('\n')}></textarea>
                            </div>

                            {/* Exhibitions */}
                            <div className="form-group">
                                <label>Exhibitions:</label>
                                <textarea defaultValue={artistData.exhibitions.join('\n')}></textarea>
                            </div>

                            {/* Publications */}
                            <div className="form-group">
                                <label>Publications:</label>
                                <textarea defaultValue={artistData.publications.join('\n')}></textarea>
                            </div>

                            {/* Education */}
                            <div className="form-group">
                                <label>Education:</label>
                                <textarea defaultValue={artistData.education.join('\n')}></textarea>
                            </div>

                            {/* Skills */}
                            <div className="form-group">
                                <label>Skills:</label>
                                <textarea defaultValue={artistData.skills.join('\n')}></textarea>
                            </div>

                            {/* Commissions & Collaborations */}
                            <div className="form-group">
                                <label>Commissions & Collaborations:</label>
                                <textarea defaultValue={artistData.commissions}></textarea>
                            </div>

                            {/* Social Media Links */}
                            <div className="form-group">
                                <label>Instagram:</label>
                                <input type="url" defaultValue={artistData.instagramLink} />
                            </div>

                            <div className="form-group">
                                <label>Twitter:</label>
                                <input type="url" defaultValue={artistData.twitterLink} />
                            </div>

                            <div className="form-group">
                                <label>ArtStation:</label>
                                <input type="url" defaultValue={artistData.artstationLink} />
                            </div>

                            <button type="submit">Save Changes</button>
                        </form>
                    </section>
                </div>
            ) : (
                // Display artist data
                <>
                    <section className="about-section">
                        <h2>About Me</h2>
                        <p>{artistData.about}</p>
                    </section>

                    <section className="experience-section">
                        <h2>Experience:</h2>
                        <ul>
                            {artistData.experience && artistData.experience.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="exhibitions-section">
                        <h2>Exhibitions:</h2>
                        <ul>
                            {artistData.exhibitions && artistData.exhibitions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="publications-section">
                        <h2>Publications:</h2>
                        <ul>
                            {artistData.publications && artistData.publications.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="education-section">
                        <h2>Education:</h2>
                        <ul>
                            {artistData.education && artistData.education.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="skills-section">
                        <h2>Skills:</h2>
                        <ul>
                            {artistData.skills && artistData.skills.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="commissions-section">
                        <h2>Commissions & Collaborations:</h2>
                        <p>{artistData.commissions}</p>
                    </section>

                    <section className="testimonials-section">
                        <h2>Testimonials:</h2>
                        <blockquote>
                            "{artistData.testimonial1}"
                            <footer>- {artistData.testimonialAuthor1}</footer>
                        </blockquote>

                        <blockquote>
                            "{artistData.testimonial2}"
                            <footer>- {artistData.testimonialAuthor2}</footer>
                        </blockquote>
                    </section>

                    <section className="social-media-section">
                        <h2>Connect with Me</h2>
                        <ul className="social-media-links">
                            <li><a href={artistData.instagramLink}>Instagram</a></li>
                            <li><a href={artistData.twitterLink}>Twitter</a></li>
                            <li><a href={artistData.artstationLink}>ArtStation</a></li>
                        </ul>
                    </section>
                </>
            )}
        </div>
    );
}

export default ArtistProfile;
