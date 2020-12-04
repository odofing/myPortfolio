import React from 'react';
import Socials from '../Socials';

function Contact() {
    return (
      <div>
    <section className="mt-5" >
    <div className="container" >
      <div className="row " >
        <form action="/contact" method="post" name="contact" className="col-lg-12">
        <input type="hidden" name="form-name" value="contact" />
          <div className="card p-4  bg-light">
          <h2 className="card-title text-center text-warning">Get In Touch</h2>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                 <input type="text" className="form-control" placeholder="Name" name="name" required/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="email"className="form-control" name="e-mail" placeholder="Email" required/>
                  </div>
                </div>
                </div> 
              </div>
              
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning btn-block text-dark">SUBMIT </button>
                  </div>
                </div>
            </div>
        </form>
       
      </div>
      </div>
      
  </section>
  <Socials />
  </div>
    )
}

export default Contact;
