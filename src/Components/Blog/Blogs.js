import React from 'react';
import Blog from './Blog';
import image1 from "./Mobile Marketing-pana.svg"
import image2 from "./Website Creator-bro.svg"
import image3 from "./Pair programming-bro.svg"
import image4 from "./Software engineer-cuate.svg"


class Blogs extends React.Component{
    render(){
        const blogs=[
            {
                title:"Online Marketing",
                caption:"Lorem Ipsum",
                image:image1,
            },
            {
                title:"Web Designing",
                caption:"Lorem Ipsum",
                image:image2,
            },
            {
                title:"Web Development",
                caption:"Lorem Ipsum",
                image:image3,
            },
            {
                title:"Softwate Development",
                caption:"Lorem Ipsum",
                image:image4,
            }
        ]
        return blogs.map(blog=>{
            return <Blog image={blog.image} title={blog.title} caption={blog.caption}/>
        })
    }
}
export default Blogs