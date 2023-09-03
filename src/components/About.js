import React from 'react'
import './About.css';
// import about_bg from '../images/about_bg.png';

function About() {
  return (
    <div className='abt_container' id='about'>
      <div className='spacer bg_layer'></div>
      
      <div className="about_container">
        <div className="head">
            <h1 className="abt_head">ABOUT</h1>
            <br />
            <br />
        </div>
        
        <div className="body">
            <p>Hey, My name is Vaibhav and I am a Computer Science and Engineering undergraduate at SRM Institute of Science and Technology with specialisations in Artificial Intelligence and Machine Learning.</p>
            <br />
            <br />
            <p>My interests are in making User Interfaces and building logics and on the personal level I am interested in video editing.</p>
            <br />
            <br />
            <p>Much of my programming experience is in C++, Python, Java, React Js, Flutter, so i have done work with making user interfaces as well as tried a hand in back-end.</p>
        </div>
      </div>

    </div>
  )
}

export default About
