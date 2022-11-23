import React, { Component } from 'react'
import classes from "./LandingPage.module.css";
import VotingFingerprintSystem from "../../Assets/Images/votingFingerprintSystem.jpg";
import musicPlayer from "../../Assets/Images/MusicPlayer.jpg";
import Cinema from "../../Assets/Images/cinema.jpg";

export default class Section3 extends Component {
  render() {
    return (
      <>
        <div className={classes.Section3}>
          <div className={classes.aboutHeadingText}> portfolio</div>
          <div className={classes.divider}></div>
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <img src={VotingFingerprintSystem} />
              <div>text</div>
            </div>
            <div className={classes.card}>
              <img src={Cinema} />
              <div>text</div>
            </div>
            <div className={classes.card}>
              <img src={musicPlayer} />
              <div>text</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
