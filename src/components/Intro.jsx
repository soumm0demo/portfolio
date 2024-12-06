import React from 'react'
import avatar from '../assets/avatar.svg'

const Intro = () => {
    return (
        <div className='mt-20 flex flex-col justify-center items-center gap-y-20 '>
            <div className='uppercase text-4xl font-extrabold'>Let Me IntroDuce My self ... </div>
            <div className='flex justify-between w-[60%] items-center '>
                <div className='flex flex-col gap-y-6'>
                    <p>I fell in love with programming and I have at least learnt something, I think…</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tenetur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, distinctio!</p>
                </div>
                <div><img  src={avatar} /></div>
            </div>
        </div>
    )
}

export default Intro