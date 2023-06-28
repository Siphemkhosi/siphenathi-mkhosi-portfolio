import classes from "./LandingPage.module.css";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import linkedIn from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
const Footer = () => {
  return (
    <>
      <div className={classes.FooterContainer}>
        <div className={classes.Footer}>
          <div>
            <div>Siphenathi Mkhosi</div>
            <div>Portfolio</div>
          </div>

          <div>
            <div>Robert Sobukwe</div>
            <div>Bellville UWC-CAMPUS</div>
          </div>

          <div>
            <div>siphemkhosi7@gmail.com</div>
            <div>(+27) 71 057 1638</div>
            <div> </div>
          </div>
          <div className={classes.iconLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=100086971557256"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                src={facebook}
                alt="facebook icon"
                className={classes.socialMediaIcon}
              />
            </a>

            <div className={classes.divider}></div>

            <a
              href="https://wa.me/+27710571638/?text=Hello Siphe, I have been directed by the portfolio."
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                src={whatsapp}
                alt="whatsapp icon"
                className={classes.socialMediaIcon}
              />
            </a>

            <div className={classes.divider}></div>
            <a
              href=""
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                src={linkedIn}
                alt="linkedin icon"
                className={classes.socialMediaIcon}
              />
            </a>

            <div className={classes.divider}></div>
            <a
              href="https://www.instagram.com/mafa_maketela"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                src={instagram}
                alt="instagram icon"
                className={classes.socialMediaIcon}
              />
            </a>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.copyRights}>
          <h1>
            ©Copyrights 2022 All rights reserved, Designed by Mafa Maketela.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
