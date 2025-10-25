import React from 'react';
import './TrustedBy.css';

import microsoft from '../assets/microsoft.svg';
import salesforce from '../assets/salesforce.svg';
import atlassian from '../assets/atlassian.svg';
import paypal from '../assets/paypal.svg';
import okta from '../assets/okta.svg';
import shopify from '../assets/shopify.svg';
import cisco from '../assets/cisco.svg';
import docusign from '../assets/docusign.svg';

const logos = [
  { src: microsoft, alt: 'Microsoft' },
  { src: salesforce, alt: 'Salesforce' },
  { src: atlassian, alt: 'Atlassian' },
  { src: paypal, alt: 'PayPal' },
  { src: okta, alt: 'Okta' },
  { src: shopify, alt: 'Shopify' },
  { src: cisco, alt: 'Cisco' },
  { src: docusign, alt: 'DocuSign' },
];

const TrustedBy = () => {
  return (
    <section className="trusted-by-section">
      <h2 className="trusted-by-title">Trusted by more than 40 million developers and 98% of the Fortune 500</h2>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="company-logo" />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
