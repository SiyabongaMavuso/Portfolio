import React  from 'react'
import WorkItems  from './WorkItems'

const data = [
    {
        year: 2020,
        title: 'C# Developer',
        duration: '3 years',
        details: 'This is a web application system that requires manual cataloguing of different suppliers and saves all supplier’s details on to a centralized database. It is a web application based on Client-server architecture (3-Tier), C#, Tailwindcss, Bootstrap'

    }, 
    {
        year: 2022,
        title: 'ALX-T Data Analyst',
        duration: '1 year',
        details: 'Worked with a lot of data throughout the program to bring new and powerful insights into meeting business strategic needs and deliver value to customers'

    }, 
    {
        year: 2022,
        title: 'CyberOps Associate',
        duration: '1 year',
        details: 'Worked with configuring firewalls and IDSs, implemented security software, diagnosed, and troubleshoot network related problems. It is an entry-level position with technical knowledge and industry certifications'

    }, 
    {
        year: 2023,
        title: 'React Developer',
        duration: '3 years',
        details: 'Movies searching web application backed by IMBD developer API. This application is create using JavaScript, Html&CSS. The API runs all the searches on the database and the results are shown to the web interface for the user'

    }

]
const Work = () => {
  return (
    <div id='Work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItems 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                />
            ))}
    </div>
  );
};

export default Work