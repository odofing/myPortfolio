import React from 'react';
import classes from './Homepage.module.css';
import { FaGithub, FaLinkedin, FaTwitter,  } from 'react-icons/fa';
 import { GrInstagram } from 'react-icons/gr';
 import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div> 
        <div className={classes.center}>
            <h3 className="text-capitalize font-weight-bold">I'm </h3>
        <h1 className={classes.name}>Gbadamosi</h1>
        <h6 className="text-capitalize font-weight-bold">a frontend web developer and tech enthusiast. </h6>
        <ul className=" mt-4"  >
        <li > <Link to="/contact" type="button" className="btn btn-outline-warning pl-4 pr-4">Hire Me</Link> </li>
        </ul>
        <ul className="social-icons">
        <li className="p-2">
          <a href="mailto:odofing@gmail.com"rel="noopener noreferrer" target="_blank"><FiMail /> </a>
          
        </li>
        <li className="p-2">
          <a href="https://twitter.com/g_odofin" rel="noopener noreferrer" target="_blank"><FaTwitter /> </a>
          
        </li>
        
        <li className="p-2">
          <a href="https://www.linkedin.com/in/odofin-gbadamosi-414a1472/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> </a>
          
        </li>
        <li className="p-2">
          <a href="https://github.com/odofing" target="_blank"rel="noopener noreferrer"><FaGithub /> </a>
          
        </li>

        <li className="p-2">
          <a href="https://www.instagram.com/g_odofin/" target="_blank" rel="noopener noreferrer"><GrInstagram /> </a>
          
        </li>
        </ul>
        </div>
       
        </div>
        
    )
}

export default Landing;
