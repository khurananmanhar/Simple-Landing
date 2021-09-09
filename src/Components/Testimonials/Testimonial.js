import React from 'react';
import "./Testimonial.css"

class Testimonial extends React.Component{
    render(){
        return(
            <div className="testimonial">
                <img src={this.props.image} alt={this.props.name}/>
                <p className="comment">{this.props.comment}</p>
                <hr/>
                <p className="name">{this.props.name}</p>
                <p className="testTitle">{this.props.title}</p>
            </div>
        )
    }
}
export default Testimonial