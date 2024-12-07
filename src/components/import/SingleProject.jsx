import React from 'react'
import { NavLink } from 'react-router-dom';
import bgimage from '../../assets/project-bg.jpg'

export const SingleProject = (props) => {
  const data = props.content;

  return (
    <div className=' shadow-custom relative  p-4 flex flex-col gap-y-2
      lg:max-h-[350px] lg:max-w-[350px]
    xl:min-h-[450px] xl:min-w-[400px] hover:scale-110 transfrom duration-300  rounded-lg bg-custom-gradient bg-opacity-60'>
      <div className='flex justify-center items-center  lg:w-[75%] xl:w-[100%]'><img src={data.img} className=' ' /></div>
      <div className='text-xl font-bold'>{data.title}</div>
      <div className=' max-w-[80%]'>{data.description}</div>
      <div className='flex justify-evenly items-center'>
        <a href={data.github} target='blank' className='bg-white p-2 rounded hover:bg-black hover:text-white text-black  transform duration-200 flex justify-center items-center text-xl font-semibold ' >GitHub  </a>
        <a href={data.live} target='blank' className='bg-white p-2 rounded text-black hover:bg-black hover:text-white transform duration-200 min-w-[4rem] flex justify-center items-center text-xl font-semibold '  > link </a>

      </div>
    </div>
  )
}
