import { useState } from "react";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import linkedIn from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
import classes from "../../Pages/LandingPage/LandingPage.module.css";
import logo from "../../Assets/Images/logo.jpg";


const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  }
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className={colorChange ? classes.colorChange : classes.navBar}>
        <div className={classes.iconLinks}>
          <img
            src={facebook}
            alt="facebook icon"
            className={classes.socialMediaIcon}
          />
          <div className={classes.divider}></div>
          <img
            src={whatsapp}
            alt="whatsapp icon"
            className={classes.socialMediaIcon}
          />
          <div className={classes.divider}></div>
          <img
            src={linkedIn}
            alt="linkedin icon"
            className={classes.socialMediaIcon}
          />
          <div className={classes.divider}></div>
          <img
            src={instagram}
            alt="instagram icon"
            className={classes.socialMediaIcon}
          />
          <div className={classes.divider}></div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.innerNav}>
          <div className={classes.hacker}>
            <p className={classes.logo}>MM</p>
          </div>

          <div className={classes.pages}>
            <div>Home</div>
            <div>About</div>
            <div>Portfolio</div>
            <div>contact</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;


    


