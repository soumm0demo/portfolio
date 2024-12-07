
import React, { useEffect, useState } from "react";
import hiicon from '../assets/hello-bank-svgrepo-com.svg'
import PhraseAnimation from "./PhraseAnimation";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate() ; 

  const texts = ["software developer", "frontend developer", 'ui/ux designer'];


  return (
    <div className="w-full min-h-full relative ">
      <div className="flex  flex-row items-center xl:justify-evenly justify-center md:gap-x-10 mt-10 
                    overflow-hidden
      ">
        <div className="flex flex-col   gap-y-[2rem]  min-w-[35%] ">
          <div className="flex flex-col justify-start
                items-center  xl:mt-[-14rem] ml-[-10rem] " >
            <div className="text-[4rem] uppercase font-semibold flex   "><img src={hiicon} className="w-[5rem]" /> <p>there </p> </div>
            <p className="text-[2rem] uppercase  mt-[-1rem]">i'm soummojit chattopadhyay</p>

          </div>

          <div className="mt-2 min-w-[100%]">
          <PhraseAnimation/>
          </div>
        </div>
        {/* side bar */}
        <div className="flex flex-col w-[38%] p-4 xl:p-16 gap-y-14 items-center 
            mr-[-4rem]
        ">
          <div className="flex flex-col gap-y-4">
            <div className=" text-3xl xl:text-5xl font-extrabold ">Let me Introduce .. </div>
            <p className="max-w-[85%] text-xl font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum similique maiores possimus accusantium. Facere itaque cum dolor inventore debitis!
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-5xl font-extrabold ">Projects</p>
            <p className=" text-xl font-medium ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, explicabo! Quia et veritatis modi reiciendis delectus. Esse porro beatae laborum reprehenderit doloremque dolorum expedita ut?</p>
          </div>
          <button className="px-4 rounded-2xl font-semibold w-full h-16 hover:text-black text-white bg-gray-600 hover:bg-white p-4 transform duration-300  text-center
           text-3xl flex justify-center items-center py-10 "
            onClick={()=>{
              navigate('/contact')
            }}
           >
            contact mee ..
          </button>
        </div>



      </div>


    </div>


  )
}

export default Home; 
