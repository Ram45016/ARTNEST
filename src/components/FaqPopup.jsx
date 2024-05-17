import React, { useState } from 'react';
import '../assets/css/FaqPopup.css';

function FaqPopup() {
  const [FaqPopups, setFaqPopups] = useState([
    {
      question: 'What is ArtNest?',
      answer:
        'ArtNest is an online platform dedicated to fostering collaboration and creativity among artists from all over the world. We provide a space where artists can showcase their work, collaborate on projects, and connect with a vibrant community of creators.',
    },
    {
      question: 'How can I join ArtNest?',
      answer:
        'Joining ArtNest is easy! Simply sign up for an account on our website. Once you\'re a member, you can explore our community, share your art, and start collaborating with other talented artists.',
    },
    {
      question: 'Is ArtNest free to use?',
      answer:
        'Yes, ArtNest offers a free membership option that allows you to access most of our features. However, we also offer premium subscription plans with additional benefits for those who want to take their artistic journey to the next level.',
    },
    {
      question: 'How can I upload my artwork?',
      answer:
        'To upload your artwork, log in to your ArtNest account and visit your profile. You\'ll find an option to upload your artwork there. Make sure to provide descriptions and tags to help other users discover your creations!',
    },
    {
      question: 'Can I collaborate with other artists on ArtNest?',
      answer:
        'Absolutely! ArtNest encourages collaboration among artists. You can connect with other members, start collaborative projects, and share your creative ideas with the community. It\'s a great way to work together and inspire one another.',
    },
  ]);

  const toggleAccordion = (index) => {
    const updatedFaqPopups = FaqPopups.map((FaqPopup, i) => {
      if (i === index) {
        return { ...FaqPopup, isOpen: !FaqPopup.isOpen };
      } else {
        return { ...FaqPopup, isOpen: false };
      }
    });
    setFaqPopups(updatedFaqPopups);
  };

  return (
    <div className="FaqPopup-container">
      <h1>Frequently Asked Questions</h1>
      <div className="FaqPopup-list">
        {FaqPopups.map((FaqPopup, index) => (
          <div className="FaqPopup-item" key={index}>
            <div
              className={`FaqPopup-question ${FaqPopup.isOpen ? 'open' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {FaqPopup.question}
              <span className="toggle-icon">&#9660;</span>
            </div>
            {FaqPopup.isOpen && <p className="FaqPopup-answer">{FaqPopup.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPopup;
