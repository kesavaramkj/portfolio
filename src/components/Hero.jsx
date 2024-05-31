import React from 'react'
import HeroImg from '../assets/hero-img.JPG'
import { AiOutlineGithub} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

function Hero() {
    const config = {
        subtitle:'Im a Full-Stack Developer'
    }
  return (
    <section  className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className=' md:w-1/2 flex flex-col '>
      <h1 className='text-white text-6xl font-hero-font '>Hi,<br />Im <span className='text-black'>kesavaram</span>
        <p className='text-2xl'>{config.subtitle}</p>
      </h1>
      <div className='flex py-10'>
        <a href="https://github.com/kesavaramkj" className='pr-5  hover:text-white'> <AiOutlineGithub size={40}/> </a>
        <a href="https://www.facebook.com/profile.php?id=100012710587085&mibextid=ZbWKwL "  className='pr-5  hover:text-white'> <MdOutlineFacebook size={40}/> </a>
        <a href="https://www.linkedin.com/in/kesavaram-j-909486299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className=' hover:text-white'> <AiOutlineLinkedin size={40} /> </a>
      </div>
      </div>
        <img id='hero'  className=' md:w-1/3 ' src={HeroImg}/>
        
    </section>
  )
}

export default Hero
