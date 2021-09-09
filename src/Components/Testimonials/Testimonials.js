import React from 'react';
import Testimonial from './Testimonial';

class Testimonials extends React.Component{
    render(){
        const testimonials = [
            {
                name:'Sophia Lambert',
                title:'Software Developer',
                comment:'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
                image:'https://www.bootstrapdash.com/demo/simple/images/face2.jpg',
            },
            {
                name:'Tony Martinez',
                title:'Marketing Manager',
                comment:'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
                image:'https://www.bootstrapdash.com/demo/simple/images/face1.jpg',
            },
            {
                name:'Cody Armstrong',
                title:'Accountant',
                comment:'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.',
                image:'https://www.bootstrapdash.com/demo/simple/images/face3.jpg',
            }
        ]
        return testimonials.map(testimonial=>{
            return <Testimonial name={testimonial.name} title={testimonial.title} comment={testimonial.comment} image={testimonial.image}/>
        })
    }
}
export default Testimonials