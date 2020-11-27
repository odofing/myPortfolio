import React from 'react';


function Contact() {
    return (
    <section id="order" className="mt-5 bg-green" >
    <div className="container" >
      <div className="row " >
        <form action="POST" data-netlify="true" className="col-lg-12">
          <div className="card p-4  bg-light">
          <h3 class="card-title text-center text-warning">Get In Touch</h3>
            <div className="card-body">
             
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                 <input type="text" className="form-control" name="full-name" id="Name" placeholder="Name" required/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input type="email" className="form-control" name="e-mail" id="email" placeholder="Email" required/>
                  </div>
                </div>
                </div> 
              </div>
              
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea className="form-control" id="instructions" placeholder="Message" required></textarea>
                  </div>
                </div>
               
              <div className="col-lg-12" id="field">
                  <div data-netlify-recaptcha="true" className="form-group">
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
    )
}

export default Contact;