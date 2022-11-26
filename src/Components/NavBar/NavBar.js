import { useState } from "react";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import linkedIn from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
import classes from "../../Pages/LandingPage/LandingPage.module.css";


const NavBar = ( {onQuery}) => {
  const [colorChange, setColorchange] = useState(false);
  const [onPagesHover, setOnPagesHover] = useState(0);

  const scrollTocomponent = (ComponentName) => {
    onQuery(ComponentName);
  }
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
          <a
            href="https://www.facebook.com/profile.php?id=100086971557256"
            target={"_blank"}
          >
            <img
              src={facebook}
              alt="facebook icon"
              className={classes.socialMediaIcon}
            />
          </a>

          <div className={classes.divider}></div>

          <a
            href="https://wa.me/+27712208870/?text=Hello Mafa, I have been directed by the portfolio."
            target={"_blank"}
          >
            <img
              src={whatsapp}
              alt="whatsapp icon"
              className={classes.socialMediaIcon}
            />
          </a>

          <div className={classes.divider}></div>
          <a
            href="https://www.linkedin.com/in/mafa-maketela-b8b8981b8/"
            target={"_blank"}
          >
            <img
              src={linkedIn}
              alt="linkedin icon"
              className={classes.socialMediaIcon}
            />
          </a>

          <div className={classes.divider}></div>
          <a href="https://www.instagram.com/mafa_maketela" target={"_blank"}>
            <img
              src={instagram}
              alt="instagram icon"
              className={classes.socialMediaIcon}
            />
          </a>

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
              <div>
                <label
                  onClick={() => {
                    document
                      .getElementById("Home")
                      .scrollIntoView({ block: "start", behavior: "smooth" });
                  }}
                >
                  Home
                </label>
              </div>
              <div
                className={
                  onPagesHover === 1
                    ? classes.Line2
                    : onPagesHover === -1
                    ? classes.Line1
                    : classes.Line3
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
              <div>
                <label
                  onClick={() => {
                    document
                      .getElementById("About")
                      .scrollIntoView({ block: "end", behavior: "smooth" });
                  }}
                >
                  About
                </label>
              </div>
              <div
                className={
                  onPagesHover === 2
                    ? classes.Line2
                    : onPagesHover === -2
                    ? classes.Line1
                    : classes.Line3
                }
              ></div>
            </div>

            <div
              onMouseEnter={() => {
                setOnPagesHover(3);
              }}
              onMouseLeave={() => {
                setOnPagesHover(-3);
              }}
            >
              <div>
                <label
                  onClick={() => {
                    document
                      .getElementById("Portfolio")
                      .scrollIntoView({ block: "end", behavior: "smooth" });
                  }}
                >
                  Portfolio
                </label>
              </div>
              <div
                className={
                  onPagesHover === 3
                    ? classes.Line2
                    : onPagesHover === -3
                    ? classes.Line1
                    : classes.Line3
                }
              ></div>
            </div>

            <div
              onMouseEnter={() => {
                setOnPagesHover(4);
              }}
              onMouseLeave={() => {
                setOnPagesHover(-4);
              }}
            >
              <div>
                <label
                  onClick={() => {
                    document
                      .getElementById("Contact")
                      .scrollIntoView({ block: "end", behavior: "smooth" });
                  }}
                >
                  Contact
                </label>
              </div>
              <div
                className={
                  onPagesHover === 4
                    ? classes.Line2
                    : onPagesHover === -4
                    ? classes.Line1
                    : classes.Line3
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


    


