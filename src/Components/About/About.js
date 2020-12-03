import React from 'react';
import { SiHtml5, SiJavascript } from 'react-icons/si';
import { DiCss3, DiNpm  } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr'
import { SiBootstrap } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai'
import { FaGit } from 'react-icons/fa';
import classes from '../Project/Project.module.css';


const About = () =>  {

        return (
 <div>

  <div className="container">
           <div className={classes.title}>
                <h2> About  </h2> 
                <hr className={classes.underline}/>
            </div>
    <div className="row">
    <div className="col md-5">
        <img src="https://source.unsplash.com/random/700x700/?web-development" alt="" className="img-fluid rounded border border-light mb-5"/>
      </div>
      <div className="col-md-7" id="about">
        <div className="card border-info mb-3 text-center">
       
          <div className="card-header text-capitalize h3 text-dark"> about me</div>
          <div className="card-body text-primary">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora ratione, sint excepturi quaerat ab eligendi temporibus repellendus inventore odit ex repellat obcaecati dolor harum amet vel animi minima debitis </p>
    
       <a className="btn btn-outline-warning ml-4" type="btn" href="https://res.cloudinary.com/dy6qqzift/image/upload/v1605792228/odofin_Gbadamosi_201120_nkxsw4.pdf"> View Résumé</a>  
          </div>
        </div>
       
      </div>
      </div>
    
    </div>
    <div className="container">
    <h2 className="text-center text-warning mt-5">Skillset</h2>
    <hr className={classes.underline}/>
    <div className="row text-center">
 
            <div className="col-lg-12">
           <button className="p-3 btn"> <SiHtml5 style={{color: 'orangered', fontSize: '2.4rem'}}/> <br/> <p className="lead pt-3 text-uppercase">html5</p> </button>
            <button className="btn p-5"><GrReactjs style={{color: 'black', padding: "2px", background: 'rgb(39, 194, 194)', fontSize: '2.4rem'}} /><br/> <p className="lead pt-3 text-uppercase">react</p></button>
       <button className="btn p-3"><AiFillGithub style={{color: 'grey', fontSize: '2.4rem'}} /><br/> <p className="lead pt-3 text-uppercase">github</p> </button> 
            <button className="btn p-3"><FaGit style={{color: 'red', fontSize: '2.4rem'}} /><br/> <p className="lead pt-3 text-uppercase">git</p> </button>

            <button className="btn p-3"><SiBootstrap style={{color: 'blue', fontSize: '2.4rem'}} /><br/> <p className="lead pt-3 text-uppercase">bootstrap</p></button>
            <button className="btn p-3">  <SiJavascript style={{color: 'orange', fontSize: '2.4rem'}} /><br/> <p className="lead pt-3 text-uppercase">javascript</p></button>
            <button className="btn p-3">  <DiCss3 style={{color: 'rgb(45, 125, 230)', fontSize: '2.4rem'}} /><br/> <p className="lead pt-3 text-uppercase">css3</p></button>
            <button className="btn p-3"><DiNpm style={{color: 'red', fontSize: '2.4rem'}}/><br/> <p className="lead pt-3 text-uppercase">npm</p> </button>
            </div>
      </div>
    </div>
</div>
        )
}
export default About;
