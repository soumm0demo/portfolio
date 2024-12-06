import React from 'react'
import data from '../components/data/data.js'
import { SingleProject } from './import/SingleProject.jsx';
import project from '../assets/projects/project.png'

const Projects = () => {
  const projectdata = data;


  return (
    <div className='flex flex-col  mx-auto items-center  gap-y-[3rem] pt-0 p-10'>
      <div className='flex justify-center items-center gap-x-4'>
        <i className="text-[8rem] ri-rocket-fill"></i>

        <div className='flex flex-col '>

          <p className='text-[3rem] font-semibold  '> My Recent work .. </p>
          <p className='text-[2rem] font-medium'>Here are few projects .. i am learning .. </p>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-x-10 gap-y-10 max-w-[1000px]'>
        {
          projectdata.map((i) => {
            return (<SingleProject content={i} />

            )
          })
        }
      </div>

    </div>
  )
}

export default Projects