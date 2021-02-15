import React from 'react'
import classes from './footer.module.css';

const Footer = () =>  {

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      // get day
      const date = new Date();
      const day = date.getDay();
        const newDay = days[day];
        console.log(newDay)

     // get year
     const year = date.getFullYear();
        console.log(year)
    return (
        <div>
  <div className={classes.footer}>
        <h6> <b> Happy {newDay}!  &copy; {year} </b> </h6>
      </div>
        </div>
    )
}

export default Footer;
