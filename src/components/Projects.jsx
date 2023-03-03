import React  from 'react'
import ProjectItems  from './ProjectItems'
import a1Img  from '../assets/a1.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Web Application to add favourite avatar characters using MVC C# ASP.Net and Html&CSS. This is a ASP.NET CORE MVC web application system that requires manual cataloguing of different Avatar characters and saves all fighter’s details on to a centralized database</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={a1Img} title='C#-app'/>   
            <ProjectItems img={a1Img} title='C#-app'/>   
            <ProjectItems img={a1Img} title='C#-app'/>   
            <ProjectItems img={a1Img} title='C#-app'/>   
        </div>
    </div>
  );
};

export default Projects