import React from 'react'
import './Contact.css';
import linkedin from '../images/LinkedIn.png';
import insta from '../images/instagram.png';
import x from '../images/twitter.png';

function Contact() {
  return (
    <div>
        <div className='cont_container' id='contact'>
            <div className="spacer cont_bg_layer"></div>
            <div className="under_container">
            <div className="can_cont">
              <p>Thank You for giving your time !</p>
              <p>You can Contact me via:</p>
            </div>
            <div className="contact_container">
                
                  <a className="card_link" href="https://www.linkedin.com/in/vaibhav-sharma-94a9bb242" target="_blank" rel="noreferrer"><div className="linkedin_card cards"><img src={linkedin} alt='LinkedIn' /><p className="tx">Linkedin</p></div></a>
                  
                
                  <a className="card_link" href="https://www.instagram.com/vaibhav.sharma_me/" target="_blank" rel="noreferrer"><div className="insta_card cards"><img src={insta} alt='Instagram' width={100} /><p className="tx">Instagram</p></div></a>
                  
                
                  <a className="card_link" href="https://twitter.com/Vaibhav01707485" target="_blank" rel="noreferrer"><div className="x_card cards"><img src={x} alt='X' width={100} /><p className="tx">X</p></div></a>
                  
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
