import logo from '../assets/Logo.svg'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.flexContainer}>
        <div>
            <img src={logo} alt='logo' width={100}/>
        </div>
        <div>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
        </div>
        <div>
            <li className={classes.signIn}>Sign In</li>
            <li className={classes.signUp}><span className={classes.signUpPd}>Sign Up</span></li>
        </div>
    </div>
  )
};

export default Header;
