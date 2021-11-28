import React from 'react'
import { SiHtml5, SiJavascript } from 'react-icons/si'
import { DiCss3, DiNpm } from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import { SiBootstrap } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { FaGit } from 'react-icons/fa'
import classes from '../Project/Project.module.css'

const About = () => {
  return (
    <div>
      <div className='container'>
        <div className={classes.title}>
          <h2> About </h2>
          <hr className={classes.underline} />
        </div>
        <div className='row'>
          <div className='col md-4'>
            <img
              src='https://source.unsplash.com/random/700x700/?web-development'
              alt=''
              className='img-fluid rounded border border-light mb-5'
            />
          </div>
          <div className='col-md-8' id='about'>
            <a
              className='btn btn-outline-warning ml-4'
              type='btn'
              rel='noopener noreferrer'
              target='_blank'
              href='https://res.cloudinary.com/dy6qqzift/image/upload/v1616255452/odofin_gbadamosi_20032021_z5kgjy.pdf'
            >
              {' '}
              View Résumé
            </a>
            <h2 className='text-center text-warning mt-5'>Skillset</h2>
            <hr className={classes.underline} />
            <div className='row text-center'>
              <div className='col-lg-12'>
                <button className='p-3 btn'>
                  <SiHtml5 style={{ color: 'orangered', fontSize: '2.4rem' }} />{' '}
                  <br />
                  <p className='lead pt-3 text-capitalize'>html5</p>{' '}
                </button>

                <button className='btn p-3'>
                  <DiCss3
                    style={{ color: 'rgb(45, 125, 230)', fontSize: '2.4rem' }}
                  />
                  <br />
                  <p className='lead pt-3 text-capitalize'>css3</p>
                </button>

                <button className='btn p-3'>
                  <SiBootstrap
                    style={{
                      background: 'white',
                      color: 'rgb(66, 23, 116)',
                      fontSize: '2.4rem',
                    }}
                  />
                  <br />
                  <p className='lead pt-3 text-capitalize'>bootstrap</p>
                </button>

                <button className='btn p-3'>
                  <GrReactjs
                    style={{
                      color: 'black',
                      background: 'rgb(39, 194, 194)',
                      fontSize: '2.4rem',
                    }}
                  />
                  <br />
                  <p className='lead pt-3 text-capitalize'>react</p>
                </button>

                <button className='btn p-3'>
                  <AiFillGithub style={{ color: 'grey', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>github</p>{' '}
                </button>

                <button className='btn p-3'>
                  <FaGit style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>git</p>{' '}
                </button>

                <button className='btn p-3'>
                  {' '}
                  <SiJavascript
                    style={{ color: 'orange', fontSize: '2.4rem' }}
                  />
                  <br />
                  <p className='lead pt-3 text-capitalize'>javascript</p>
                </button>

                <button className='btn p-3'>
                  <DiNpm style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>npm</p>{' '}
                </button>
                <button className='btn p-3'>
                  <DiNpm style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>Redux</p>{' '}
                </button>
                <button className='btn p-3'>
                  <DiNpm style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>NodeJs</p>{' '}
                </button>
                <button className='btn p-3'>
                  <DiNpm style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>ExpressJS</p>{' '}
                </button>
                <button className='btn p-3'>
                  <DiNpm style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>MongoDB</p>{' '}
                </button>
                <button className='btn p-3'>
                  <DiNpm style={{ color: 'red', fontSize: '2.4rem' }} />
                  <br />
                  <p className='lead pt-3 text-capitalize'>NextJs</p>{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
