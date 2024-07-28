import React from "react";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about-tenacity">
        <h3>About Tenacity</h3>
        <p>
          We are a community where students come to learn, grow, network, and
          mentor each other. At Tenacity, we believe that by bringing together a
          diverse group of students, we can create an enriching and valuable
          experience for all members.
        </p>
      </div>
      <div className="footer-section">
        <h3>Join</h3>
        <ul>
          <li>Become A Mentor</li>
          <li>Campus Representative</li>
          <li>Join The Team</li>
          <li>Partner With Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Community</h3>
        <ul>
          <li>Cohorts</li>
          <li>Workshops</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li>Privacy</li>
          <li>Code Of Conduct</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Tenacity - All Rights Reserved</p>
        <p>Made with &lt;/&gt; and &lt;3 by <span className="made_by">RVU Students </span> </p>
      </div>
    </footer>
  );
};

export default Footer;
