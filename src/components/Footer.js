import React, { Component } from 'react';
import './footer.css';

let height = window.innerHeight



class Team extends Component {  
    render() {
        return (
         
        <section id="team" className="section footer" style={{height:`${height/2}px`}}>
            <div className="tag">Photo by Ian Dorion</div>
            <div className="social">
                <a href="mailto:admin@madeindreams.ca" target="_blank"   rel="noreferrer"><img src="./assets/social/email.png" alt="email link" className="social-logo" /></a>
                <a href="https://twitter.com/MadeInDreamsCA" target="_blank"   rel="noreferrer"><img src="./assets/social/twitter.png" alt="twitter link" className="social-logo" /></a>
                <a href="https://www.reddit.com/user/madeindreams" target="_blank"   rel="noreferrer"><img src="./assets/social/reddit.png" alt="reddit link" className="social-logo" /></a>
                <a href="https://github.com/Madeindreams" target="_blank"   rel="noreferrer"><img src="./assets/social/github.png" alt="github link" className="social-logo" /></a>
                <a href="https://discord.gg/BXxFRksjDM" target="_blank"  rel="noreferrer"><img src="./assets/social/discord.png" alt="discord link" className="social-logo" /></a>
                <a href="https://www.youtube.com/channel/UCntyjq5ZN5tiMUx29F1UF1Q" target="_blank"  rel="noreferrer"><img src="./assets/social/youtube.png" alt="youtube link" className="social-logo" /></a>
            </div>
            <div className="donatemsg">Donate to idecentralize.eth</div>
            <div className="donate text-center"> 
    
                <div id="btc" className="crypto">
                    <img src="./assets/crypto/bitcoin-btc-logo.png" alt="donate bitcoin"/>
                </div>
                <div className="crypto">
                    <img src="./assets/crypto/ethereum-eth-logo.png" alt="donate ethereum" />
                </div>
            </div>
            <div className="ssl-logo">
                <a href="https://sectigo.com/trust-seal">
                    <img className="ssl-img" src="https://sectigo.com/images/seals/sectigo_trust_seal_sm_2x.png" alt="Protected by Sectigo SSL"  />
                </a>
            </div>

        </section>
        );
   }
  
}
  
  
  
  
  export default Team