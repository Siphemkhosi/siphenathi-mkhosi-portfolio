import React, { Component } from 'react'
import classes from "./LandingPage.module.css";
import VotingFingerprintSystem from "../../Assets/Images/votingFingerprintSystem.jpg";
import musicPlayer from "../../Assets/Images/MusicPlayer.jpg";
import Cinema from "../../Assets/Images/cinema.jpg";

export default class Section3 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       typeOfApp: "android app"
    }
  }
  
  render() {
    return (
      <>
        <div className={classes.Section3}>
          <div className={classes.aboutHeadingText}> portfolio</div>
          <div className={classes.divider}></div>
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <img
                src={VotingFingerprintSystem}
                alt="fingerprint voting system app"
              />
              <div>
                <div className={classes.projectName}>
                  Fingerprint Voting System
                </div>
                <div className={classes.typeOfProject}>
                  {this.state.typeOfApp}
                </div>
                <div className={classes.moreAboutProject}>
                  Lorem Ipsum dolor Lorem Ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </div>
                <div className={classes.myButton}>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <img src={Cinema} alt="cinema app" />
              <div>
                <div className={classes.projectName}>Cinema</div>
                <div className={classes.typeOfProject}>
                  {this.state.typeOfApp}
                </div>
                <div className={classes.moreAboutProject}>
                  Lorem Ipsum dolor Lorem Ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </div>
                <div className={classes.myButton}>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <img src={musicPlayer} alt="music player app" />
              <div>
                <div className={classes.projectName}>Music Player</div>
                <div className={classes.typeOfProject}>
                  {this.state.typeOfApp}
                </div>
                <div className={classes.moreAboutProject}>
                  Lorem Ipsum dolor Lorem Ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </div>
                <div className={classes.myButton}>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
