import React from 'react';
import "./Intro.css"

class Intro extends React.Component {
    render() {
        return (
            <div className="introContainer">
                <h1>Search engine optimization & Marketing.</h1>
                <p>Landing is a simple template with a creative design</p>
                <div>
                    <button className="btnRed">Get Started</button>
                    <button className="btnGreen">Learn More</button>
                </div>
                <div className='introImg'>
                <img src="https://www.bootstrapdash.com/demo/simple/images/Group171.svg" alt="Team Illustration"/>
                </div>
            </div>
        )
    }
}
export default Intro