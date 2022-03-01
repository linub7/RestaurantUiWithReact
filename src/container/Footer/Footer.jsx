import { FooterOverlay, Newsletter } from '../../components/index';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">10 Main Street Boston MA</p>
          <p className="p__opensans">+1 123456789</p>
          <p className="p__opensans">+1 987654321</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="gericht" />
          <p className="p__opensans">
            The best way to find yourself in the service of others
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday - Friday: 10.00am - 2:00 am</p>
          <p className="p__opensans">Saturday - Sunday: 10.00am - 3:00 am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
