import React, { Component } from 'react';

let height = window.innerHeight


class Midex extends Component {  
    render() {
        return (
         
        <section className="section" style={{height:`${height}px`}}>
            <span className= "anchor" id="midex"></span>
            <div className="row">
                <div className="col-md-6 order-md-1 text-md-left">
                    
                    <img className="midex-logo"src="../assets/midex.png" atl="Midex Logo"/>
                </div>
                <div className="col-md-6 order-md-2 text-md-left">
                <h1> Midex </h1>
                    <p>The Midex Project is a self suficient trading node that regroup multiple tools into one app.
                        Wallet, DEX, NFT Creator, a Trading Bot with integretated DEFI Module. You can see Midex as your personal banker that pays real interest.
                        </p>
                </div>
            </div>
        </section>
        );
   }
  
}
  
  
  
  
  export default Midex