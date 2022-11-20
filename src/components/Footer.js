import logo from "../assets/Logo.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/Twitter.svg";
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.part1}>
        <img src={logo} alt="logo" width={100} />
        <p>
          <span>LaslesVPN</span> is a private virtual networks that has unique
          features and has high security.
        </p>
        <div>
          <img src={facebook} alt="facebook" width={32}/>
          <img src={twitter} alt="twitter" width={32} />
          <img src={instagram} alt="instagram" width={32} />
        </div>
        <p>
          &copy;2020Lasles<span>VPN</span>
        </p>
      </div>
      <div className={classes.part2}>
        <h4>Product</h4>
        <p>Download</p>
        <p>Pricing</p>
        <p>Locations</p>
        <p>Server</p>
        <p>Countries</p>
        <p>Blog</p>
      </div>
      <div className={classes.part3}>
        <h4>Engage</h4>
        <p>LaslesVPN</p>
        <p>FAQ</p>
        <p>Tutorials</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className={classes.part4}>
        <h4>Earn Money</h4>
        <p>Affiliate</p>
        <p>Become Partner</p>
      </div>
    </div>
  );
};

export default Footer;
