import React from 'react';
import Service from './Service';

class Services extends React.Component{
    render(){
        const services = [
            {
                title:"Speed Optimisation",
                desc:"Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
                img:'https://www.bootstrapdash.com/demo/simple/images/Group12.svg',
            },
            {
                title:"SEO and Backlinks",
                desc:"Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
                img:'https://www.bootstrapdash.com/demo/simple/images/Group7.svg',
            },
            {
                title:"Content Marketing",
                desc:"Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
                img:'https://www.bootstrapdash.com/demo/simple/images/Group5.svg',
            }
        ]
        return services.map(service => {
            return (
                <Service title={service.title}  img={service.img} description={service.desc} />
            )
        })
    }
}
export default Services