import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter,  } from 'react-icons/fa';
 import { GrInstagram } from 'react-icons/gr';
 


function Socials() {
    return (
        <div>
             <ul className="socials-icons mt-4 font-weight-bold justify-content-center justify-content-lg-between">
        <li>
          <a href="https://twitter.com/g_odofin"rel="noopener noreferrer" target="_blank"><FaTwitter /> </a>
          
        </li>
        <li>
          <a href="mailto:odofing@gmail.com"rel="noopener noreferrer" target="_blank"><FiMail /> </a>
          
        </li>
        <li>
          <a href="https://www.linkedin.com/in/odofing"rel="noopener noreferrer"target="_blank"><FaLinkedin /> </a>
          
        </li>
        <li>
          <a href="https://github.com/odofing"rel="noopener noreferrer" target="_blank"><FaGithub /> </a>
          
        </li>
    
        <li>
          <a href="https://www.instagram.com/g_odofin/" rel="noopener noreferrer" target="_blank"><GrInstagram /> </a>
          
        </li>
        </ul>
        </div>
    )
}

export default Socials
