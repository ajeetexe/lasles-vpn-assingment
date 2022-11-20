import free from "../assets/Free.svg";
import right from "../assets/Group 1120.svg";
import classes from './OurPlan.module.css'
const OurPlan = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.heading}>Choose Your Plan</h2>
      <p className={classes.desc}>
        Let's choose that is best for you and explore it happily and
        cheerfullly.
      </p>
      <div className={classes.flexContainer}>
        <div className={classes.part1}>
          <img src={free} alt="free" />
          <h4>Free Plan</h4>
          <p>
            <img src={right} alt="correct sign" /> Unlimited Bandwidth
          </p>
          <p>
            <img src={right} alt="correct sign" /> Encrypted Connection
          </p>
          <p>
            <img src={right} alt="correct sign" /> No Traffic Logs
          </p>
          <p>
            <img src={right} alt="correct sign" /> Works on All Devices
          </p>
          <h3>Free</h3>
          <button>Select</button>
        </div>
        <div className={classes.part2}>
          <img src={free} alt="free" />
          <h4>Standard Plan</h4>
          <p>
            <img src={right} alt="correct sign" /> Unlimited Bandwidth
          </p>
          <p>
            <img src={right} alt="correct sign" /> Encrypted Connection
          </p>
          <p>
            <img src={right} alt="correct sign" /> Yes Traffic Logs
          </p>
          <p>
            <img src={right} alt="correct sign" /> Works on All Devices
          </p>
          <p>
            <img src={right} alt="correct sign" /> Connect Anywhere
          </p>
          <h3>$9 / mo</h3>
          <button>Select</button>
        </div>
        <div className={classes.part3}>
          <img src={free} alt="free" />
          <h4>Premium Plan</h4>
          <p>
            <img src={right} alt="correct sign" /> Unlimited Bandwidth
          </p>
          <p>
            <img src={right} alt="correct sign" /> Encrypted Connection
          </p>
          <p>
            <img src={right} alt="correct sign" /> Yes Traffic Logs
          </p>
          <p>
            <img src={right} alt="correct sign" /> Works on All Devices
          </p>
          <p>
            <img src={right} alt="correct sign" /> Connect Anywhere
          </p>
          <p>
            <img src={right} alt="correct sign" /> Get New Features
          </p>
          <h3>$12 / mo</h3>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
};

export default OurPlan;
