import React from 'react';
import './Stats.css';

const statsData = [
  { value: '40M+', label: 'developers' },
  { value: '800K+', label: 'organizations' },
  { value: '98%', label: 'of the Fortune 500' },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
