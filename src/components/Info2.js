import illustration2 from "../assets/Illustration 2.svg";
import right from "../assets/Group 1120.svg";
import classes from "./Info2.module.css"
const Info2 = () => {
  return (
    <div className={classes.flexContainer}>
      <div className={classes.part}>
        <img src={illustration2} alt="illustration" width={600}/>
      </div>
      <div className={classes.part2}>
        <h2>We Provide Many</h2><h2> Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div>
          <p>
            <img src={right} alt="correct symbol" /> Powerfull online
            protection.
          </p>
        </div>
        <div>
          <p>
            <img src={right} alt="correct symbol" /> Internet without borders.
          </p>
        </div>
        <div>
          <p>
            <img src={right} alt="correct symbol" /> Supercharged VPN.
          </p>
        </div>
        <div>
          <p>
            <img src={right} alt="correct symbol" /> No specific time limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info2;
