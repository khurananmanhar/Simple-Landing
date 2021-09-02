import React from 'react';
import "./Service.css"
class Service extends React.Component {
    render() {
        return (
            <div className="serviceContainer">
                <img src={this.props.img} alt={this.props.title} />
                <p className='title'>{this.props.title}</p>
                <p className="desc">{this.props.description}</p>
                <p className="more">Read More</p>
            </div>
        )
    }
}
export default Service