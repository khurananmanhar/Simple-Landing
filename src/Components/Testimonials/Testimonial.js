import React from 'react';
import "./Testimonial.css"

class Testimonial extends React.Component{
    render(){
        return(
            <div className="testimonial">
                <img src={this.props.image} alt={this.props.name}/>
                <p>{this.props.comment}</p>
                <hr/>
                <p>{this.props.name}</p>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default Testimonial