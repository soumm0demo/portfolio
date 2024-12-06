import React from 'react'
import img from '../components/import/TechImport.jsx'
import IconCard from './IconCard.jsx'

const Skills = () => {
    return (
        <div className=''>
            <div className='relative flex flex-col gap-y-6  mx-auto items-center mt-4  '>
                {/* professional skill ..  */}

                <div className='text-center text-[4.4rem] font-bold '>Professional skills ... </div>


                <div className=' mt-10 grid grid-cols-4 gap-x-4 gap-y-[4rem]  min-w-[60%]'>
                    <IconCard src={img.c} />
                    <IconCard src={img.cpp} />
                    <IconCard src={img.java} />
                    <IconCard src={img.js} />
                    <IconCard src={img.rec} />
                    <IconCard src={img.tailwind} />
                    <IconCard src={img.git} />
                    <IconCard src={img.mongo} />
                </div>


            </div>

            <div className='mt-4 flex flex-col gap-y-8 justify-center items-center'>
                <div className='text-center text-[4.4rem] font-bold' >Tools I use .. </div>
                <div className='flex gap-x-14 '>
                    <img src={img.ubuntu} className='w-[6rem] h-[6rem ] hover:scale-125 transfrom duration-300   ' />
                    <img src={img.vscode} className='w-[6rem] h-[6rem ] hover:scale-125  transfrom duration-300 ' />
                    <img src={img.sublime} className='w-[6rem] h-[6rem ] hover:scale-125  transfrom duration-300 ' />

                </div>
            </div>




            .
        </div>
    )
}

export default Skills