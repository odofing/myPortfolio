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
        <div className={classes.foot}>
  <div className={classes.footer}>
        <p> Happy {newDay}!  &copy; {year} </p>
      </div>
        </div>
    )
}

export default Footer;
