import React, { Component } from 'react';

let height = (window.innerHeight - 100) + "px"


class Contact extends Component {  
    render() {
        return (
         
        <section  className="section" style={{height:`${height.toString()}`}}>
                 <span className= "anchor" id="contact"></span>
             <h1>Contact</h1>
         
                    <div className="row contact-widget">
                        <div className="col-12 col-lg-4 section-heading">
                       
                            <p className="text-white">We will be glad to assist you witn all inquiries related to our projects or custom DevOps services</p>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="mb-3">
                                <form name="contact" method="post" action="../mail.php">
                                    <div className="form-group form-inline">
                                        <label className="sr-only" htmlFor="inputName">Name</label>
                                        <input type="text" name="name" className="form-control w-100" id="inputName" placeholder="Name" required="" />
                                    </div>
                                    <div className="form-group form-inline">
                                        <label className="sr-only" htmlFor="inputEmail">Email</label>
                                        <input type="email" name="email" className="form-control w-100" id="inputEmail" placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="inputMessage">Message</label>
                                        <textarea name="message" className="form-control" id="inputMessage" rows="5" placeholder="Message" required=""></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-custom px-3 py-2">Send</button>
                                </form>
            </div>
           
                </div>
                </div>
              

         
        </section>
        );
   }
  
}
  
  
  
  
  export default Contact