import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import mafa from '../../Assets/Images/mafa2.jpg';
export default class Section2 extends Component {
  render() {
    return (
      <>
        <div className={classes.Section2}>
          <div className={classes.flexContainerSection2}>
            <div className={classes.mafaPic}>
              <img src={mafa} alt="mafa maketela" />
            </div>
            <div className={classes.aboutMafa}>
              <div className={classes.aboutHeadingText}>
                About
              </div>
              <div className={classes.divider}></div>
              <div className={classes.infoAboutMafa}>
                <div className={classes.infoAboutMafa1}>
                  Lorem Ipsum dolor Lorem Ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. C/O
                  https://placeholder.com/text/lorem-ipsum/
                </div>
              </div>
              <div className={classes.myButton}>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
