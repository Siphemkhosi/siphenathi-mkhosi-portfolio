import React, { Component} from 'react';
import classes from './LandingPage.module.css';
import backgroundImage from '../../Assets/Images/bgpic_2.jpg';

export default class Section1 extends Component {
  render() {
    return (
      <>
        <div className={classes.flexContainer}>
          <div className={classes.flexItem2}>
            <img
              src={backgroundImage}
              alt="MAFA MAKETELA"
              className={classes.myBackgroundImage}
            />
          </div>
            <div className={classes.flexItem1}>
            <div className={classes.myName}> MAFA MAKETELA</div>
            <div className={classes.softText}>Web & Android app developer</div>
          </div>
        </div>
      </>
    );
  }
}
