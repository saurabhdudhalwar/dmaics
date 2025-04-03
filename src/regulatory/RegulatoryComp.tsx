import React from 'react';
import './RegulatoryComp.css';

const RegulatoryComp: React.FC = () => {
  return (
    <div className="regulatory-container">
      <p className="regulatory-description">
        Our Regulatory team consists of highly qualified personnel engaged in providing data required as per the
        Regulatory Guidelines of the different countries. Our Regulatory Team can provide a complete support to
        register the Products.
      </p>

      <div className="regulatory-services">
        <ul>
          <li>ACTD Dossiers</li>
          <li>CTD Dossiers</li>
          <li>Dossiers as per specific Guideline of all countries</li>
          <li>Bio-Equivalence Studies with GLP certified clinical centers (BE Study)</li>
        </ul>
        <ul>
          <li>Pharmacokinetic Studies</li>
          <li>Drug master Files (DMF)</li>
          <li>Site Master File</li>
          <li>Electronic Submission of Dossiers with all supporting documents</li>
        </ul>
      </div>

      <h3>We can also provide you</h3>
      <p className="regulatory-extra">
        Certificate of Pharmaceutical Product (as per WHO), Free Sale Certificates, Certificate of Origin, Halal
        Certificates, Kosher Certificates, TSE-BSE Certificates.
      </p>
    </div>
  );
};

export default RegulatoryComp;
