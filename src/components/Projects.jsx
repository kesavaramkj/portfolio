import React from 'react'
import websiteImg1 from '../assets/Quiz-app.png'
// import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/design_portfolio_cta_screen.jpg'

const Projects = () => {
    const config = {
        projects : [
            {
                image: websiteImg1,
                description:'This Quiz Apllication is Built with HTML,CSS and JavaScript.',
                link:'https://github.com/kesavaramkj/Quiz-Apllication'
            },
            // {
            //     image: websiteImg2,
            //     description:'Food Ecommerce website like swiggy,  Built with HTML and CSS.',
            //     link:''
            // },
            {
                image: websiteImg3,
                description:'This portfolio is Built with only React.JS and Tailwind CSS.',
                link:'https://github.com/kesavaramkj/portfolio'
            },
        ]
    }
  return (
   <section  id='projects'className='flex flex-col py-20 px-5 justify-center bg-primary text-white' >
    <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
        <p>This are some of my projects.  I have built these with HTML,  CSS,  Javascript,  Tailwind CSS and React.JS</p>
        </div>
       
    </div>
    <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.projects.map((projects)=>( 
            <a href={projects.link}>
            <div className='relative'>
             <img className='h-[200px] w-[500px]' src= {projects.image}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>{projects.description}</p>
            </div>
                <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={projects.link}>View Project</a>
                </div>
            </div>
            </a>   
            ))}

        </div>
    
    </div>
   </section>
  )
}

export default Projects
