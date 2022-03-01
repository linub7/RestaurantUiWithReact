import './Newsletter.css';
import { SubHeading } from '../../components/index';

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title={'Newsletter'} />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss Latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter Your Email" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
