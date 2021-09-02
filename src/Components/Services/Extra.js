import React from 'react';
import digi from './Portfolio-rafiki.svg'
import digi2 from './Social media-pana.svg'
import "./Extra.css"

class ExtraServices extends React.Component {
    render() {
        const extras = [
            {
                title: "We Offer a Full Range of Digital Marketing Services!",
                desc: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
                image: digi
            },
            {
                title: "Leading Digital Agency for Business Solution.",
                desc: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
                image: digi2
            },

        ]
        return (
            <div>
                <div className='sepContainer'>
                    <div className="innerDiv">
                        <p className="title">{extras[0].title}</p>
                        <p className="desc">{extras[0].desc}</p>
                        <p className='more'>Read More</p>
                    </div>
                    <img src={extras[0].image} />
                </div>
                <div className='sepContainer'>
                <img src={extras[1].image} />
                    <div className="innerDiv">
                        <p className="title">{extras[1].title}</p>
                        <p className="desc">{extras[1].desc}</p>
                        <p className='more'>Read More</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ExtraServices