import React  from 'react'
import ProjectItems  from './ProjectItems'
import p1Img  from '../assets/p1.jpg'
import aislImg  from '../assets/aisl.png'
import sebuImg  from '../assets/sebu.png'
import p3Img  from '../assets/p3.jpg'
import sibuImg  from '../assets/sibu.png'
import tamiImg  from '../assets/tami.png'
import p5Img  from '../assets/p5.jpg'
import launImg  from '../assets/laun.png'
import sunnImg  from '../assets/sunn.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
          Professional skills include but are not limited to, C#, Python, React, Javacript, Html&CSS, Vue, Bootstrap, TailwindCss, SQL, ASP.NET Core, MVC, Microsoft SQL Server, Desktop/Windows and WebApp Development, Docker, Jenkins, CI/CD Switching, Routing, and Wireless Essentials, Enterprise Networking, Security, and Automation. Data Analysis, Jupyter Notebook.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={aislImg} title='AisleRoot IT(Pty Ltd)' href={''} language='Developed a company website using React, Javascript, Html&Css'/>   
            <ProjectItems img={sibuImg} title='Sibusiso & Agri' href={''} language='Creacted a Sibusiso Agriculture website for his internet customers using React, Tailwinds, Vite & Vue'/>   
            <ProjectItems img={sebuImg} title='Sebuyile Roofings' href={''} language='Creacted a Sebuyile Roofings website for his carpentry customers using React, Tailwinds, Vite & Vue'/>   
            <ProjectItems img={p3Img} title='ErrorRecording APP' href={'https://github.com/SiyabongaMavuso/error-recording-app'} language='Developed a windows desktop app for students using C#, Windowsforms, SQl database, Stored procedures'/>   
            <ProjectItems img={p1Img} title='Avatar APP' href={'https://github.com/SiyabongaMavuso/C-_MVC_Avatar_webapp'} language='C#, Javascript, Html&Css, MVC'/>   
            <ProjectItems img={launImg} title='Laundry business Website' href={''} language='Engineerd a Laundry business website for them to reach a wider client. Used React, Css, Javascript'/>   
            <ProjectItems img={sunnImg} title='Sunny Hardware' href={''} language='Engineerd a Hardware business website using React, Javascript, Tailwindscss'/>   
            <ProjectItems img={p5Img} title='PE Airport Network Simulation' href={'https://livenmmuac-my.sharepoint.com/:f:/g/personal/s223095451_mandela_ac_za/EspaZlqqD1FLq5LH4WZmAuwBQHD9cT2ljjv_0lTZ5v6jtQ?e=d3mfKI'} language='Engineerd airport’s network infrastructure'/>   
        </div>
    </div>
  );
};

export default Projects