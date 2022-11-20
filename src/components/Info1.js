import illustration1 from "../assets/Illustration 1.svg";
import location from "../assets/Group 1215.svg";
import user from "../assets/Group 1216.svg";
import server from "../assets/Group 1217.svg";
import classes from './Info1.module.css'
const Info1 = () => {
  return (
    <div className={classes.main}>
      <div className={classes.flexContainer}>
        <div className={classes.part1}>
          <h1>
            Want anything to be</h1><h1>easy with <span className={classes.brand}>LaslesVPN.</span>
          </h1>
          <p>
            Provide a network for all needs with ease and fun using{" "}
            <span className={classes.brand}>LaslesVPN</span> discover intresting features from us.
          </p>
          <button>Get Started</button>
        </div>
        <div className={classes.part2}>
          <img src={illustration1} alt="illustration" width={600}/>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <div className={classes.flexContainer}>
          <div className={classes.img}>
            <img src={user} alt="user" width={16} />
          </div>
          <div>
            <h3>90+</h3>
            <p>Users</p>
          </div>
        </div>
        <div className={classes.flexContainer}>
          <div className={classes.img}>
            <img src={location} alt="location" width={16} />
          </div>
          <div>
            <h3>30+</h3>
            <p>Locations</p>
          </div>
        </div>
        <div className={classes.flexContainer}>
          <div className={classes.img}>
            <img src={server} alt="server" width={16} />
          </div>
          <div>
            <h3>50+</h3>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info1;
