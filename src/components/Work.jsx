import React  from 'react'
import WorkItems  from './WorkItems'

const data = [   
    {
        year: 2024,
        title: 'Project underway',
        duration: '1 month',
        details: 'Build a relativley small nextjs & .net microservice wepapp api, Where each service will hanlde a dedictaed fuction in our application. Also have a serivce with rest based api crud operation. and a services to handle search functionality. Dfferent services use thier own Databses, Postgres and Mongo DB used in both for exceptional functionality. With the benefit of deploying our service independtly, Git/Github is our chosen and utilized version control with the peace of mind that we make changes , deploy independently of the other service.'

    },
    {
        year: 2024,
        title: 'L1 Network Engineer (FSO) HCL Tech',
        duration: '7 months',
        details: 'As an L1 Network Engineer, I implement and maintain complex network infrastructure using RIP, OSPF, BGP, EIGRP, VLAN, STP, VPN, ACLs, and NAT. I configure switches, routers, firewalls, and load balancers, manage network security with TACACS, and DHCP Snooping, optimize performance with QoS and Cisco QOS, and monitor network health using Solarwinds, and Cisco Prime.'

    },
    {
        year: 2023,
        title: 'Feild Support Enigneer (FSE) iOCO EOH',
        duration: '7 months',
        details: 'As a day-to-day IT support engineer at Sasol plant, I troubleshoot desktop related issues, maintain software systems crucial for production, and ensure seamless operations for clients. From resolving hardware malfunctions to optimizing software efficiency, I am the go-to expert for keeping technology aligned with the plants demanding requirements, ensuring uninterrupted workflows. Proactively monitoring incidents with ticket tracking system.'

    },
    

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