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
         <div className="col-md-6 m-auto" key={id}>
           <div className="card border-warning mb-5 text-center">
             <div className="card-header text-capitalize h3 text-dark bg-warning">{title}</div>
             <div className="card-body">
             <p className="lead card-text">{quote}</p>
             <div className="d-flex justify-content-between"> 
            <p>Reading Time: {readTime}</p>
            <a href={read} rel="noopener noreferrer" target="_blank" className="btn btn-outline-warning text-center">Read Blog </a>
          <a href={tweet} rel="noopener noreferrer" target="_blank">Tweet It<FaTwitter style={{fontSize: '2.5rem', paddingLeft: '10px',}}/> </a>  </div>
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
