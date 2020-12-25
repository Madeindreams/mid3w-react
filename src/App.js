import React from 'react';




import Header from './components/Header';
import Midex from './components/Midex';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
window.addEventListener("resize", myFunction);

function myFunction() {
    window.location.reload();
  }
  
function App() {
  return (
    <div className="container main">
      
    <Header />
    <Midex />
    <Team />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
