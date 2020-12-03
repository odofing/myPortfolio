import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import classes from './Project.module.css';
import data from './data';

const Project = () => {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect (() => {
    const lastIndex = people.length - 1;
    if (index < 0 ) {
        setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 6000);
    return () => clearInterval(slider)
  }, [index])

        return (
           <section >
            <div className={classes.title}>
                <h2> Projects  </h2> 
                <hr className={classes.underline}/>
            </div>
             <div  className={classes.sectionCenter}>
                 {people.map((person, personIndex) => {
                     const {id, name, title, quote, image, webpage, source } = person;

                     let position = 'nextSlide';
                     if (personIndex === index) {
                         position = 'activeSlide';
                     }

                     if (personIndex === index -1 || (index === 0 && personIndex === people.length - 1)) {
                         position = 'lastIndex';
                     }

                     return (
                          <article className={position} key={id}>
                         <img src={image} alt={name} className={classes.personImg}/>
                        
                        <h4>{name}</h4>
                        <p className={classes.title}>{title}</p>
                        <p className={classes.text}>{quote}</p>
                        <div className="btn">
                        <a href={source} type="button" className="btn btn-outline-warning ">Source Code</a>
                         <a href={webpage} type="button" className="btn btn-outline-warning ml-4 ">Webpage</a>
                        </div>
                     </article>
                     )
                 })}
                 <button className={classes.prev} onClick={() => setIndex(index - 1)}> <FiChevronLeft /> </button>
                 <button className={classes.next} onClick={() => setIndex(index + 1)}> <FiChevronRight /></button>
             </div>
             {/* <footer className="footer">
               <div className="container">
               <p className="lead">hello world</p>
               </div>
                 </footer> */}
           </section>
        )
    }
export default Project;

