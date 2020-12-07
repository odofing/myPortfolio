import React from 'react';
import Blogs from './Blogs';
import { FaTwitter } from 'react-icons/fa';
import classes from '../Project/Project.module.css';

const  Blog = () =>  {
    
        return (
            <section >
            <div className={classes.title}>
                <h2> Blogs </h2> 
                <hr className={classes.underline}/>
            </div>
     <div>
    {Blogs.map((blog) => {
      const {id, title, quote, tweet, readTime, read} = blog;

return (     <div className="row"> 
         <div className="col-md-5 m-auto" key={id}>
           <div className="card border-secondary mb-5 text-center">
             <div className="card-header text-capitalize h3 text-dark bg-none">{title}</div>
             <div className="card-body bg-warning">
             <p className="lead card-text">{quote}</p>
             <p>Reading Time: {readTime}</p>
             <div className="d-flex justify-content-around"> 
            <a href={read} rel="noopener noreferrer" target="_blank" className="btn text-dark btn-outline-secondary text-center">Read Blog </a>
          <a href={tweet} rel="noopener noreferrer" target="_blank">Tweet It<FaTwitter style={{fontSize: '2.5rem', padding: '10px'}}/> </a>  </div>
             </div>
           </div>
           </div>
         </div>
         
     ) })}
  </div>
         
           </section>
        )
    }

export default Blog;
