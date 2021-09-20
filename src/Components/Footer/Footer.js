import React from 'react';
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footerContainer">
                <div className='footerSection'>
                    <p className="footerNameTitle">Simple</p>
                    <p>Simple.Landing@gmail.com</p>
                    <p>647-982-0821</p>
                </div>
                <div className='footerSection'>
                <p className="footerTitle">Get In Touch</p>
                    <p>Don’t miss any updates of our new templates and extensions!</p>
                    <input type="text" placeholder="Email Here"/>
                    <br/>
                    <button>Subscribe</button>
                </div>
                <div className='footerSection'>
                <p className="footerTitle">Our Guidelines</p>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Discover</p>
                </div>
                <div className='footerSection'>
                <p className="footerTitle">Contact</p>
                    <p>518 Schmeler Neck
Bartlett. Illinois</p>
                </div>
            </div>
        )
    }
}
export default Footer 