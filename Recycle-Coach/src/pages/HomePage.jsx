/* 
Name: Shailendra Kumar Karki
Student id: 8895277
Email: skarki5277@conestogac.on.ca
 */
import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaPoll, FaBook, FaBell, FaExclamationTriangle } from 'react-icons/fa';

function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: 'Collection Calendar',
      icon: <FaCalendarAlt size={40} />,
      description:
        "Never miss a pick-up day ever again. You can officially remove the words 'you forgot to take out the trash' from your vocabulary with our calendar tool. Need a reminder the day before? We’ve got you covered.",
    },
    {
      id: 2,
      title: 'What Goes Where Search Tool',
      icon: <FaSearch size={40} />,
      description: 'Find out how to dispose of or recycle any item properly using our search tool.',
    },
    {
      id: 3,
      title: 'Quizzes & Polls',
      icon: <FaPoll size={40} />,
      description: 'Test your recycling knowledge and learn fun facts about recycling with our quizzes and polls.',
    },
    {
      id: 4,
      title: 'Learning Modules',
      icon: <FaBook size={40} />,
      description: 'Access educational content to improve your recycling habits.',
    },
    {
      id: 5,
      title: 'Notifications & Reminders',
      icon: <FaBell size={40} />,
      description: 'Get notifications and reminders about your recycling schedule.',
    },
    {
      id: 6,
      title: 'Problem Reporting',
      icon: <FaExclamationTriangle size={40} />,
      description: 'Report any recycling issues in your area directly through the app.',
    },
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature((prevFeature) => (prevFeature?.id === feature.id ? null : feature));
  };

  return (
    <div className="home">
      <section className="banner">
        <h1>Welcome to Recycle Coach</h1>
        <p>Helping you recycle right and keep the planet green!</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features">
        <h2>Why Choose Recycle Coach?</h2>
        <div className="feature-list1">
          <div className="feature-item1">
            <img src="/images/search.svg" alt="Search Materials" />
            <h3>Material Lookup</h3>
            <p>Search and learn how to properly recycle everyday items.</p>
          </div>
          <div className="feature-item1">
            <img src="/images/guide.webp" alt="Recycling Guides" />
            <h3>Educational Resources</h3>
            <p>Access guides and tutorials to improve your recycling habits.</p>
          </div>
          <div className="feature-item1">
            <img src="/images/community.webp" alt="Community Support" />
            <h3>Community Support</h3>
            <p>Join a network of environmentally conscious individuals.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div>
            <h3>50,000+</h3>
            <p>Items recycled properly</p>
          </div>
          <div>
            <h3>1M+</h3>
            <p>Users educated</p>
          </div>
          <div>
            <h3>200+</h3>
            <p>Local partners</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Make a Difference?</h2>
        <button className="cta-button">Start Now</button>
      </section>

      <section className="interactive-features">
        <h2>
          Find the info you need, <span>when you need it</span>
        </h2>
        <div className="interactive-container">
          <div className="feature-list">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-item ${selectedFeature?.id === feature.id ? 'active' : ''}`}
                role="button"
                tabIndex="0"
                onClick={() => handleFeatureClick(feature)}
                onKeyDown={(e) => e.key === 'Enter' && handleFeatureClick(feature)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <button className="click">{selectedFeature?.id === feature.id ? '−' : '+'}</button>
              </div>
            ))}
          </div>

          <div className="feature-details">
            {selectedFeature ? (
              <>
                <h3>{selectedFeature.title}</h3>
                <p>{selectedFeature.description}</p>
                <div>{selectedFeature.icon}</div>
              </>
            ) : (
              <p>Select a feature to see details here.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
