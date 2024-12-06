import React from 'react'
import { NavLink } from 'react-router-dom';
import bgimage from '../../assets/project-bg.jpg'

export const SingleProject = (props) => {
  const data = props.content;

  return (
    <div className=' shadow-custom relative  p-4 flex flex-col gap-y-2
     min-h-[450px] min-w-[100px] hover:scale-110 transfrom duration-300  rounded-lg bg-custom-gradient bg-opacity-60'>
      <div><img src={data.img} /></div>
      <div className='text-xl font-bold'>{data.title}</div>
      <div className=' max-w-[80%]'>{data.description}</div>
      <div className='flex justify-evenly items-center'>
        <a href={data.github} target='blank' className='bg-white p-2 rounded hover:bg-black hover:text-white text-black  transform duration-200 flex justify-center items-center text-xl font-semibold ' >GitHub  </a>
        <a href={data.live} target='blank' className='bg-white p-2 rounded text-black hover:bg-black hover:text-white transform duration-200 min-w-[4rem] flex justify-center items-center text-xl font-semibold '  > link </a>

      </div>
    </div>
  )
}
