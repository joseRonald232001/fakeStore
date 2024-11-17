import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">
            We are a company committed to bringing the best solutions for you. Follow us on social media to stay updated.
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__socials">
            <a href="https://facebook.com" className="footer__social-icon">Facebook</a>
            <a href="https://twitter.com" className="footer__social-icon">Twitter</a>
            <a href="https://instagram.com" className="footer__social-icon">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
