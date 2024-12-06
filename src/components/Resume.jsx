import React from 'react'

import resume from '../assets/resume/s_resume.pdf';
import { useNavigate } from 'react-router-dom';
import  resumeicon  from '../assets/resume/resume-icon.png'

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center mx-auto justify-center gap-x-10 '>
      <img src={resumeicon} className=' w-[14rem] h-[14rem] '/>
      <div className=' min-w-[30%] p-10 flex flex-col  gap-y-20  justify-center items-center '>
        <div className='flex flex-col  justify-center items-center gap-y-10'>
          <p className='text-[3rem] font-bold '>Resume ! </p>
          <a href={resume} download="soummojit-resume.pdf" target='blank'
            className='min-w-[50%] rounded-sm text-xl font-semibold text-center hover:scale-110 p-4 bg-white text-black  duration-300 transform'>Click Here to Download</a>

        </div>

        <button className=' max-w-[90%] bg-white text-black text-xl font-semibold text-center  p-4 rounded-sm
          hover:scale-110 duration-300 transform 
        w-full '
          onClick={() => {
            navigate('/contact')
          }}
        >Contact me .. </button>
      </div>
    </div>
  )
}

export default Resume