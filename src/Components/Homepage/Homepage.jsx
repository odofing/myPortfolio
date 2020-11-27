import React from 'react';
import classes from './Homepage.module.css';
import { FaGithub, FaLinkedin, FaTwitter,  } from 'react-icons/fa';
 import { GrInstagram } from 'react-icons/gr';
 import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaRegSmile } from 'react-icons/fa';


const Landing = () => {
    return (
        <div> 
        <div className={classes.center}>
            <h4>I'm </h4>
        <h1 className={classes.name}>Gbadamosi</h1>
        <h6 className="text-capitalize">a frontend web developer and tech enthusiast <FaRegSmile style={{color: 'yellow', fontSize: '1.4rem', paddingLeft: '5px'}} /> </h6>
        <ul className=" mt-4"  >
        <li > <Link to="/contact" type="button" className="btn btn-outline-warning">Hire Me</Link> </li>
        {/* <li> <a className="btn btn-outline-warning ml-4" type="btn" href="https://res.cloudinary.com/dy6qqzift/image/upload/v1605792228/odofin_Gbadamosi_201120_nkxsw4.pdf"> View Resumé</a></li>
         style={{marginLeft: "15%", marginTop: '7%'}} 
         style={{ marginLeft: '80px'}} */}
        </ul>
        <ul className="social-icons">
        <li>
          <a href="mailto:odofing@gmail.com"rel="noopener noreferrer" target="_blank"><FiMail /> </a>
          
        </li>
        <li>
          <a href="https://twitter.com/g_odofin" rel="noopener noreferrer" target="_blank"><FaTwitter /> </a>
          
        </li>
        
        <li>
          <a href="https://www.linkedin.com/in/odofin-gbadamosi-414a1472/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> </a>
          
        </li>
        <li>
          <a href="https://github.com/odofing" target="_blank"rel="noopener noreferrer"><FaGithub /> </a>
          
        </li>

        <li>
          <a href="https://www.instagram.com/g_odofin/" target="_blank" rel="noopener noreferrer"><GrInstagram /> </a>
          
        </li>
        </ul>
        {/* <Socials /> */}
        </div>
       
        </div>
        
    )
}

export default Landing;
