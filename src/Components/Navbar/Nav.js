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
                    <a href="#" className="current">Home</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Testimonials</a>
                </div>
            </div>
        )
    }

}
export default Nav