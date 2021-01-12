import React from 'react';
import { SiHtml5, SiJavascript } from 'react-icons/si';
import { DiCss3, DiNpm  } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr'
import { SiBootstrap, SiRedux } from 'react-icons/si';
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
        <div className="card-header text-capitalize h3 text-dark"> about</div>
          <div className="card-body text-primary">
          <table class="table table-bordered">
  <tbody>
    <tr>
      <th scope="row">Name:</th>
      <td>Odofin Gbadamosi Lekan</td>
    </tr>

    <tr>
      <th scope="row">Gender:</th>
      <td>Male</td>
    </tr>

    <tr>
      <th scope="row">Degree:</th>
      <td>M.Sc</td>
    </tr>

    <tr>
      <th scope="row">Programming Language:</th>
      <td>Javascript</td>
    </tr>

    <tr>
      <th scope="row">Role:</th>
      <td>Frontend Web Developer (React)</td>
    </tr>

  </tbody>
</table>
    
       <a className="btn btn-outline-warning ml-4" type="btn" href="https://res.cloudinary.com/dy6qqzift/image/upload/v1608107294/odofin_gbadamosi_16122020_iqcwap.pdf"> View Résumé</a>  
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
           <button className="p-3 btn"> 
           <SiHtml5  style={{color: 'orangered', fontSize: '2.4rem'}}/> <br/>
            <p className="lead pt-3 text-capitalize">html5</p> </button>

            <button className="btn p-3"> 
             <DiCss3 style={{color: 'rgb(45, 125, 230)', fontSize: '2.4rem'}} /><br/>
              <p className="lead pt-3 text-capitalize">css3</p></button>

              <button className="btn p-3"><SiBootstrap 
            style={{background: 'white', color: 'rgb(66, 23, 116)', fontSize: '2.4rem'}} /><br/>
             <p className="lead pt-3 text-capitalize">bootstrap</p></button>

            <button className="btn p-3">
              <GrReactjs  style={{color: 'black', background: 'rgb(39, 194, 194)', fontSize: '2.4rem'}} /><br/>
             <p className="lead pt-3 text-capitalize">react</p></button>

       <button className="btn p-3">
         <AiFillGithub   style={{color: 'grey', fontSize: '2.4rem'}} /><br/>
        <p className="lead pt-3 text-capitalize">github</p> </button> 

            <button className="btn p-3"><FaGit 
            style={{color: 'red', fontSize: '2.4rem'}} /><br/>
             <p className="lead pt-3 text-capitalize">git</p> </button>

            <button className="btn p-3">  <SiJavascript 
            style={{color: 'orange', fontSize: '2.4rem'}} /><br/> 
            <p className="lead pt-3 text-capitalize">javascript</p></button>


            <button className="btn p-3">
              <DiNpm style={{color: 'red', fontSize: '2.4rem'}}/><br/> 
              <p className="lead pt-3 text-capitalize">npm</p> </button>

            {/* <button className="btn p-3">
            <SiRedux style={{color: 'purple', fontSize: '2.4rem'}}/><br/>
             <p className="lead pt-3 text-uppercase">Redux</p> </button> */}
            </div>
      </div>
    </div>
</div>
        )
}
export default About;
