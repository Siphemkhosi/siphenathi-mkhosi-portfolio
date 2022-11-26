import { useState } from "react";

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
        <div className={classes.innerNav}>
          <div className={classes.hacker}>
            <a href="/" className={classes.Home}>
              <p className={classes.logo}>MM</p>
            </a>
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
                  className={classes.pointer}
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
                      .scrollIntoView({ block: "center", behavior: "smooth" });
                  }}
                  className={classes.pointer}
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
                      .scrollIntoView({ block: "center", behavior: "smooth" });
                  }}
                  className={classes.pointer}
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
                      .scrollIntoView({ block: "center", behavior: "smooth" });
                  }}
                  className={classes.pointer}
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


    


