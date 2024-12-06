import React from 'react'

const IconCard = (props ) => {
    const src = props.src ; 
  return (
    <div className='flex items-center justify-center hover:scale-110 transfrom duration-300  '>
        <img src={src}  className='w-[8rem] h-[8rem] ' />
    </div>
  )
}

export default IconCard ;