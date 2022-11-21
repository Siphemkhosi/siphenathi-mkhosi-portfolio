import { useState } from "react";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import linkedIn from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
import classes from "../../Pages/LandingPage/LandingPage.module.css";
import logo from "../../Assets/Images/logo.jpg";
import    "./NavBarLines.css";


const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [onPagesHover, setOnPagesHover] = useState(0);

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
            <div
              onMouseEnter={function () {
                setOnPagesHover(1);
              }}
              onMouseLeave={function () {
                setOnPagesHover(-1);
              }}
            >
              <div>Home</div>
              <div
                className={
                  onPagesHover === 1
                    ? "Line2"
                    :onPagesHover === -1 ? "Line1" : "Line3"
               
                }
              ></div>
            </div>

            <div
              onMouseEnter={() => {
                setOnPagesHover(2);
              }}
              onMouseLeave={() => {
                setOnPagesHover(-2);
              }}
            >
              <div>About</div>
              <div
                className={
                  onPagesHover === 2
                    ? "Line2"
                    :onPagesHover === -2 ? "Line1" : "Line3"
                      
                }
              ></div>
            </div>

            <di
              onMouseEnter={() => {
                setOnPagesHover(3);
              }}
              onMouseLeave={() => {
                setOnPagesHover(-3);
              }}
            >
              <div>Portfolio</div>
              <div
                className={
                  onPagesHover === 3
                    ? "Line2"
                    :onPagesHover === -3 ? "Line1" : "Line3"
                      
                }
              ></div>
            </di>

            <div
              onMouseEnter={() => {
                setOnPagesHover(4);
              }}
              onMouseLeave={() => {
                setOnPagesHover(-4);
          
              }}
            >
              <div>contact</div>
              <div
                className={
                  onPagesHover === 4
                    ? "Line2"
                    :onPagesHover === -4 ? "Line1" : "Line3"
                    }
                
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;


    


