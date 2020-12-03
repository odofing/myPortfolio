import React from 'react'
import { FaTimes, FaHome, FaUser, 
  FaFolderOpen, FaBloggerB } from 'react-icons/fa';
  import { MdContactPhone } from 'react-icons/md';
import {  useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter,  } from 'react-icons/fa';
 import { GrInstagram } from 'react-icons/gr';


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  
  return <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">

     {/* <button className="text-center text-warning border-0 bg-none"> <h4>OdofinG</h4> </button>  */}
     
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className="links">
          <li> <Link to="/"> <FaHome /> Home</Link> </li>
          <li><Link to="/about"><FaUser /> About</Link></li>
           <li> <Link to="/projects"> <FaFolderOpen /> Projects</Link> </li>
           <li> <Link to="/blog"><FaBloggerB /> Blog</Link> </li>
            <li> <Link to="/contact"> <MdContactPhone />Contact</Link> </li>
        </ul>
        <ul className="socials-icons">
        <li>
          <a href="https://twitter.com/g_odofin"rel="noopener noreferrer" target="_blank"><FaTwitter /> </a>
          
        </li>
        <li>
          <a href="mailto:odofing@gmail.com"rel="noopener noreferrer" target="_blank"><FiMail /> </a>
          
        </li>
        <li>
          <a href="https://www.linkedin.com/in/odofin-gbadamosi-414a1472/"rel="noopener noreferrer"target="_blank"><FaLinkedin /> </a>
          
        </li>
        <li>
          <a href="https://github.com/odofing"rel="noopener noreferrer" target="_blank"><FaGithub /> </a>
          
        </li>
    
        <li>
          <a href="https://www.instagram.com/g_odofin/" rel="noopener noreferrer" target="_blank"><GrInstagram /> </a>
          
        </li>
        </ul>
    </aside>
}

export default Sidebar
