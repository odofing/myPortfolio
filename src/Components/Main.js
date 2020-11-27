import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Projects from './Project/Project';
import About from './About/About';
import Error from './Error';

const Main = () => (
         
        <Switch> 
        <Route exact path="/">  <Homepage/> </Route>
        <Route path="/about"> <About /> </Route>
        <Route path="/projects"> <Projects /></Route>
        <Route path="/blog"> <Blog /></Route>
        <Route path="/contact"> <Contact /> </Route>
        <Route path="*">  <Error/> </Route> 
        </Switch>
        
)

export default Main;
