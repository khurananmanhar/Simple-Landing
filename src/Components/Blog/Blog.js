import React from 'react';
import "./Blog.css"

class Blog extends React.Component {
    render() {
        return (
            <div className="blogContainer">
                <img src={this.props.image} alt={this.props.title} className="blogImage" />
                <div className="textContainer">
                    <p className="blogTitle">{this.props.title}</p>
                    <p className='desc'>{this.props.caption}</p>
                </div>
            </div>
        )
    }
}
export default Blog