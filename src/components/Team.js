import React, { Component } from 'react';

let height = window.innerHeight


class Team extends Component {  
    render() {
        return (
         
        <section  className="section" style={{height:`${height}px`}}>
            <span className= "anchor" id="team"></span>
              <h1> The Team </h1>

              <div className="row">
              
                <div className="col-md-4 order-md-1 d-flex justify-content-center">
                   <div className = "member ">
                     <h2>Ian Dorion</h2>
                     <h3>CEO of MadeInDreams</h3>
                     <div className="text-center">
                     <img className="avatar" src="./assets/avatar/ceo.png" />
                     </div>
                     <p className="profile" >Developer since 1995.</p>
                   </div>
                </div>

            </div>
         
        </section>
        );
   }
  
}
  
  
  
  
  export default Team