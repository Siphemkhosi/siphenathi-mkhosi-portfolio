import classes from "./LandingPage.module.css";
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section4 = () => {

    return (
      <>
        <div className={classes.Section4}>
          <div className={classes.aboutHeadingText}> contact</div>
          <div className={classes.divider}></div>
          <div className={classes.formContainer}>
            <div className={classes.formSibling}>
              <div className={classes.glassEffect}>
                <div className={classes.textContainer}>
                  <div>
                    <Typewriter
                      options={{
                        strings: ["Get in touch with Mafa Maketela."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <form className={classes.Section4Form}>
              <div className={classes.info}>
                Please fill out the form on this section to contact with me. Or
                call between 9:00 a.m. and 4:00 p.m. Monday through Friday.
              </div>
              <input placeholder="Email"></input>
              <input placeholder="Name"></input>
              <textarea placeholder="Message"></textarea>
              <div className={classes.formButton}>
                <button type="submit" onClick={()=>{toast("message sent.", {
                  position: toast.POSITION.BOTTOM_CENTER,
                });}}>send message</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default Section4;
