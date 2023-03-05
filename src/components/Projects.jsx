import React  from 'react'
import ProjectItems  from './ProjectItems'
import p1Img  from '../assets/p1.jpg'
import p2Img  from '../assets/p2.jpg'
import p3Img  from '../assets/p3.jpg'
import p4Img  from '../assets/p4.jpg'
import p5Img  from '../assets/p5.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
          Professional skills include but are not limited to, C#, Python, React, Javacript, Html&CSS, Vue, Bootstrap, TailwindCss, SQL, ASP.NET Core, MVC, Microsoft SQL Server, Desktop/Windows and WebApp Development, Docker, Jenkins, CI/CD Switching, Routing, and Wireless Essentials, Enterprise Networking, Security, and Automation. Data Analysis, Jupyter Notebook.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={p1Img} title='Avatar APP' href={'https://github.com/SiyabongaMavuso/C-_MVC_Avatar_webapp'} language='C#, Javascript, Html&Css, MVC'/>   
            <ProjectItems img={p2Img} title='Movies APP' href={'https://github.com/SiyabongaMavuso/MovieSearchReactApp'} language='Javascript, Html&Css'/>   
            <ProjectItems img={p3Img} title='ErrorRecording APP' href={'https://github.com/SiyabongaMavuso/error-recording-app'} language='C#, Windowsforms'/>   
            <ProjectItems img={p4Img} title='Suppliers APP' href={'https://github.com/SiyabongaMavuso/SupplierAssignment-3-Tier-ASP.Net'} language='C#, Asp.net, Tailwinds, Vue'/>   
            <ProjectItems img={p5Img} title='PE Airport Network Simulation' href={'https://livenmmuac-my.sharepoint.com/:f:/g/personal/s223095451_mandela_ac_za/EspaZlqqD1FLq5LH4WZmAuwBQHD9cT2ljjv_0lTZ5v6jtQ?e=d3mfKI'} language='Engineerd airport’s network infrastructure'/>   
        </div>
    </div>
  );
};

export default Projects