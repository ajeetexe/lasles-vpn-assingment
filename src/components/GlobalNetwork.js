import global from "../assets/Huge Global.svg";
import mask1 from "../assets/Mask Group (1).svg";
import mask2 from "../assets/Mask Group (2).svg";
import mask3 from "../assets/Mask Group (3).svg";
import mask4 from "../assets/Mask Group (4).svg";
import mask from "../assets/Mask Group.svg";
import classes from './GlobalNetwork.module.css'

const GlobalNewtwork = () => {
  return (
    <div className={classes.main}>
      <h3 style={{'textAlign':'center','fontSize':'xx-large'}}>Huge Global Network</h3><h3 style={{'textAlign':'center','fontSize':'xx-large'}}>of Fast VPN</h3>
      <p style={{'textAlign':'center','marginBottom':'2rem'}}>
        See <span style={{'fontWeight':'bolder'}}>LaslesVPN</span> everywhere to make it easier for you when you
        move locations.
      </p>
      <img className={classes.global} src={global} alt="global" width={900}/>
      <div className={classes.mask}>
        <img src={mask} alt="Netflix" />
        <img src={mask1} alt="reddit" />
        <img src={mask2} alt="amazon" />
        <img src={mask3} alt="discord" />
        <img src={mask4} alt="spotify" />
      </div>
    </div>
  );
};

export default GlobalNewtwork;
