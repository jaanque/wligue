import React from 'react';
import './Resources.css';
import resource1 from '../assets/resource1.png';
import resource3 from '../assets/resource3.png';

const resourcesData = [
  {
    image: resource1,
    title: 'The True Cost of API Chaos',
    description: 'Learn how API sprawl, lack of governance, and poor quality can cost you.',
    link: 'Read the report',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    title: "The Developer's Guide to AI-Ready APIs",
    description: 'Build high-quality, secure, and scalable APIs that are ready for AI.',
    link: 'Get the guide',
  },
  {
    image: resource3,
    title: 'The 90-day AI Readiness Playbook',
    description: 'A step-by-step guide to get your APIs ready for the AI-powered future.',
    link: 'Download the playbook',
  },
];

const Resources = () => {
  return (
    <section className="resources-section">
      <div className="resources-container">
        {resourcesData.map((resource, index) => (
          <div key={index} className="resource-card">
            <img src={resource.image} alt={resource.title} className="resource-image" />
            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
              <a href="#" className="resource-link">{resource.link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
