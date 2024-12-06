import React from 'react'
import about_avatr from '../assets/about-avatar.png'
import about_avatr2 from '../assets/about-avatar2.png'
import Skills from './Skills'

export const About = () => {
    return (
        <div className='relative w-full h-full'>
            <div className='flex p-10 mx-auto justify-evenly  relative '>
                <img src={about_avatr2} className='max-w-[500px] mt-20 
                    transfrom translate-y-[-2rem] shadow-[10px_10px_30px_#434343] rounded-lg
                ' />
                <div className='max-w-[50%]  flex flex-col gap-y-8'>
                    <div className='text-center text-[3.5rem] font-bold '>Know about me  .. </div>
                    <div className=' text-center max-w-[90%] ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusantium dolores officiis temporibus, voluptates quibusdam, nemo delectus dignissimos dolorem libero laboriosam consequuntur quia sunt earum non ani
                        mi suscipit amet. Ipsa.
                    </div>

                </div>
            </div>

            <Skills/>

        </div>
    )
}
