import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';


export const Header = () => {

    const [location, setLocation] = useState('home');

    const container = useRef();

    const loc = useLocation();
    const currLoc = loc.pathname.substring(1) ? loc.pathname.substring(1) : 'home';
    useEffect(() => {
        setLocation(currLoc);
        console.log(currLoc);

    }, [loc])
    useGSAP(() => {
        container.current, {
            x: 360,
        }
    })
    const navigate = useNavigate();

    return (
        <div className='relative flex lg:p-2 xl:p-4 xl:justify-between justify-evenly items-center  ml-5 '>
            
            <div className='xl:ml-8 hidden lg:block '>
                <img src={logo} className='' />
            </div>

            <div className='font-chakra   xl:w-[45%] lg:gap-x-6  xl:gap-x-12 home
                        hidden lg:flex
            items-center '>

                <button className={`flex text-2xl gap-x-2 
                 hover:text-black hover:bg-white  ${currLoc === 'home' ? 'text-black bg-white' : ''}
                 p-4 transform duration-300   `}
                    onClick={() => { navigate('/') }}
                >
                    <i className="ri-home-8-line"></i>
                    <div className=''>
                        Home
                    </div>
                </button>
                <button className={`flex text-2xl font-bold  gap-x-2
                    ${currLoc === 'about' ? 'text-black bg-white' : ''}
                hover:text-black  hover:bg-white p-4 transform duration-300`}
                    onClick={() => { navigate('/about') }}
                >
                    <i className="ri-user-line"></i>
                    <div>About</div>
                </button>
                <NavLink className={({ isActive }) =>
                    `flex text-2xl font-bold hover:text-black hover:bg-white p-4 transform duration-300 gap-x-2 
                        ${isActive ? 'text-black bg-white' : 'text-white'}`} to='/projects'>
                    <i className="ri-profile-line"></i>
                    <div>
                        Projects
                    </div>
                </NavLink>
                <NavLink
                    to="/resume"
                    className={`flex text-2xl font-bold p-4 transform duration-300 gap-x-2 
                    ${currLoc === 'resume' ? 'bg-white text-black' : 'bg-transparent text-white'} 
                    hover:bg-white hover:text-black`}
                >
                    <i className="ri-file-text-line"></i>
                    <div>Resume</div>
                </NavLink>



            </div>
        </div>
    )
}
