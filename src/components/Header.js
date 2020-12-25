import React, { Component } from 'react';

let height = window.innerHeight


class Header extends Component {  
    render() {
        return (
         
        <section className="section" style={{height:`${height}px`}}>
            <span className= "anchor" id="home"></span>
            <div className="row">
                <div className="col-md-6 order-md-1 text-md-left">
                <h1>MadeInDreams</h1>
                <h4>We encode your dreams.</h4>
                <p>They might not be real but they can be virtual.</p>
                </div>
                <div className="col-md-6 order-md-2 d-flex justify-content-center">
                    <img src="./logo.svg" className="media" alt="MID LOGO"/>  
                </div>

            </div>
        </section>
        );
   }
}
  
  export default Header