import React from 'react'
import { FaTimes, FaHome, FaUser, 
  FaFolderOpen, FaBloggerB } from 'react-icons/fa';
  import { MdContactPhone } from 'react-icons/md';
import {  useGlobalContext } from '../context';
import Socials from '../Socials';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  
  return <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">

      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className="links" onClick={closeSidebar}>
          <li> <Link to="/"> <FaHome /> Home</Link> </li>
          <li><Link to="/about"><FaUser /> About</Link></li>
           <li> <Link to="/projects"> <FaFolderOpen /> Projects</Link> </li>
            <li> <Link to="/contact"> <MdContactPhone />Contact</Link> </li>
        </ul>
        <Socials />
    </aside>
}

export default Sidebar
