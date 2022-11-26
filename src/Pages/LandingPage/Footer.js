import classes from "./LandingPage.module.css";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import linkedIn from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";
const Footer = () => {
  return (
    <>
      <div className={classes.Footer}>
        <div>
          <div>Mafa Maketela</div>
          <div>Portfolio</div>
        </div>

        <div>
          <div>00 Haasenda,</div>
          <div>Kuilsriver 7580, Cape Town</div>
        </div>

        <div>
          <div>maketelamafa2@gmail.com</div>
          <div>(+27) 71 220 8870</div>
          <div>(+27) 73 187 4276</div>
        </div>
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

        </div>
      </div>
    </>
  );
};

export default Footer;
