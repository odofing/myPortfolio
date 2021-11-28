import React from 'react';
import { useGlobalContext } from './context';
import { FaLightbulb } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineAlignRight } from 'react-icons/ai';
import Main from './Main';


const Home = ({toggle, dark}) => {

const {openSidebar} = useGlobalContext();
 
  return <main>
    <Main /> 
    
    <button className="sidebar-toggle" onClick={openSidebar}>
      <AiOutlineAlignRight />
    </button>
    <button  className="darkmode-toggle" onClick={toggle}>
  {dark ?  <HiOutlineLightBulb/>  : <FaLightbulb style={{color: "black"}} />}
</button>
  </main>
}

export default Home
