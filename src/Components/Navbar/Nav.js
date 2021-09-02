import React from 'react';
import './Nav.css'
class Nav extends React.Component{
    render(){
        return(
            <div className='navContainer'>
                <div>
                    <p>Landing</p>
                </div>
                <div>
                    <a href="#root" className="current">Home</a>
                    <a href="#root">About</a>
                    <a href="#root">Blog</a>
                    <a href="#root">Testimonials</a>
                </div>
            </div>
        )
    }

}
export default Nav