import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
    const config={
        line1:'Hi, My name is Kesavaram. I am a Full Stack Web Developer.  I built an responsive websites by using React.JS and TailWind CSS.',
        line2:'I am proficient in Frontend Skills like HTML5, CSS3, JavaScript, React.JS, Tailwind CSS and many more.',
        lin3:'In Backend I Know Python and Oracle.'
    }
  return (
  <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AboutImg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
       <div className='flex flex-col justify-center text-white'>       
       <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5' >{config.line1}</p>
        <p  className='pb-5'>{config.line2}</p>
        <p className='pb-5'>{config.lin3}</p>
       </div>
    </div>
  </section>
  )
}

export default About
