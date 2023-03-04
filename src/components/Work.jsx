import React  from 'react'
import WorkItems  from './WorkItems'

const data = [   
    {
        year: 2023,
        title: 'Freelance React, Javascript, Vue&Vite Developer',
        duration: '1 month',
        details: 'Building Web applications using JavaScript, Html&CSS, Vue, Bootstrap, TailwindCss, Vite that are API backed for greater searches on the databases and that result in ease scalability.'

    },
    {
        year: 2022,
        title: 'School & Network Project',
        duration: '1 years',
        details: 'Uitenhage airport has been upgraded to allow for the use of full-sized aircrafts. Due to poor planning, they have not yet implemented the airport’s network infrastructure. ACSA (Uitenhage) has contacted our company to remedy the situation. So I and my team with network engineering backgrounds went to work in designing and implementing network infrastructure, creating LANs, WANS, VLANs, ACLS, NATs, VPNs, Switching, Routing and Wireless Essentials, Ethernet Switch Ports etc.',

    },
    {
        year: 2022,
        title: 'CyberOps Essentials',
        duration: '1 month',
        details: 'Worked with configuring firewalls and IDSs, implemented security software, diagnosed, and troubleshoot network related problems. It is an entry-level position with technical knowledge and industry certifications.'

    },
    {
        year: 2022,
        title: 'ALX-T Data Analyst',
        duration: '3 months',
        details: 'Worked with a lot of data throughout the program to bring new and powerful insights into meeting business strategic needs and deliver value to customers'

    },
    {
        year: 2020,
        title: 'School & Software Development',
        duration: '3 years',
        details: 'Projects such as C#, Python, Html&Css',

    }

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
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