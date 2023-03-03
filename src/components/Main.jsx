import React  from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='Main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='src\assets\kt.jpg' alt='' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Welcome I am Siya M</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 yexy-gray-800'>I'm a 
                <TypeAnimation
                    sequence={[
                    'Developer', // Types 'Dveloper'
                    2000, // Waits 1s
                    'Coder', // Deletes 'Developer' and types 'Coder'
                    2000, // Waits 2s
                    'Digital CraftsMan', // Types 'Digital' without deleting 'Coder'
                    2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaInstagram  className='cursor-pointer' size={20}/>
                    <FaLinkedinIn  className='cursor-pointer' size={20}/>
                    <FaGithub  className='cursor-pointer' size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main