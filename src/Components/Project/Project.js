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
    }, 9000);
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
                     const {id, name, quote, image, webpage, source, desc } = person;

                     let position = 'nextSlide';
                     if (personIndex === index) {
                         position = 'activeSlide';
                     }

                     if (personIndex === index -1 || (index === 0 && personIndex === people.length - 1)) {
                         position = 'lastSlide';
                     }

                     return (
                          <article className={position} key={id}>
                          <h4 className="pb-3">{name}</h4>
                         <img src={image} alt={name} className={classes.personImg}/>
                         <p className="lead text-warning">{desc}</p>
                        <p className={classes.text}>{quote}</p>
                        <div className="btn pt-3">
                        <a href={source} type="button" className="btn btn-outline-warning ">Source Code</a>
                         <a href={webpage} type="button" className="btn btn-outline-warning ml-4 ">Webpage</a>
                        </div>
                     </article>
                     )
                 })}
                
                 <button className={classes.prev} onClick={() => setIndex(index - 1)}> <FiChevronLeft /> </button>
                 <button className={classes.next} onClick={() => setIndex(index + 1)}> <FiChevronRight /></button>
             </div>
           </section>
        )
    }
export default Project;

