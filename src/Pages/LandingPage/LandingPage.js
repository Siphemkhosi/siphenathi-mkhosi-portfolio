
import classes from './LandingPage.module.css';
import React, { Component } from 'react'
import Section1 from './Section1';
import Section2 from "./Section2";
import Section3 from './Section3';

export default class LandingPage extends Component {
  render() {
      return (
        <>
          <div className={classes.landingPage}>
            <div>
              <Section1 />
            </div>
            <div>
              <Section2 />
            </div>
            <div>
              <Section3 />
            </div>
          </div>
        </>
      );
  }
}
