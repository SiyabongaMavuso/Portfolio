import React  from 'react'
import WorkItems  from './WorkItems'

const data = [   
    {
        year: 2023,
        title: 'Sasol Secunda',
        duration: '3 months',
        details: 'As a brilliant technical clerk at a Sasol Plant in Secunda South Africa, facilitated seamless operations by managing documentation, data entry, and communication among departments. I ensured efficient coordination and support for plant activities.'

    },
    {
        year: 2023,
        title: 'Johannesburg Centre for Software Engineering (JCSE)',
        duration: '3 months',
        details: 'As a novice who has achieved Microsoft ERP MB920 certification with Wits University, demonstrating fundamental proficiency in utilizing Microsoft Dynamics 365 applications for effectively managing business operations and resources.'

    },
    {
        year: 2022,
        title: 'CyberOps Essentials',
        duration: '1 month',
        details: 'Worked with configuring firewalls and IDSs, implemented security software, diagnosed, and troubleshoot network related problems. It is an entry-level position with technical knowledge and industry certifications.'

    },
    {
        year: 2022,
        title: 'School & Network Project',
        duration: '3 years',
        details: 'Uitenhage airport has been upgraded to allow for the use of full-sized aircrafts. Due to poor planning, they have not yet implemented the airport’s network infrastructure. ACSA (Uitenhage) has contacted our company to remedy the situation. So I and my team with network engineering backgrounds went to work in designing and implementing network infrastructure, creating LANs, WANS, VLANs, ACLS, NATs, VPNs, Switching, Routing and Wireless Essentials, Ethernet Switch Ports etc.',

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