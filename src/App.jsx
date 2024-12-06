
import 'remixicon/fonts/remixicon.css';
import './App.css'
import Home from './components/Home'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { gsap } from "gsap";
import { useEffect, useState } from 'react';
import { About } from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';




function App() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX + 30,
        y: e.clientY + 30,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02
      });
    });
  }, []);

  return (
    <div className='home-bg   font-chakra h-screen '>

      <div className='w-full h-full '>
      <Routes>
          <Route path="/" element={
            <div className='transfrom duration-300'>
              {!show && <div className='  bg-slate-900 text-white  
                  flex items-center justify-center  gap-x-10 text-xl font-semibold
              h-14'>
                <div> Under construction ..  </div>
                <button className='bg-white text-black w-20 h-8 px-2 ' onClick={() => { setshow(true) }}>ok</button>
              </div>

              }
              <Header />
              <Home />
            </div>} >
          </Route>

          <Route path="/about" element={<>
            {!show && <div className='  bg-slate-900 text-white  
                  flex items-center justify-center  gap-x-10 text-xl font-semibold
              h-14'>
                <div> Under construction ..  </div>
                <button className='bg-white text-black w-20 h-8 px-2 ' onClick={() => { setshow(true) }}>ok</button>
              </div>

              }
            <Header  />
            <About />
          </>}></Route>
          <Route path="/projects" element={<>
            {!show && <div className='  bg-slate-900 text-white  
                  flex items-center justify-center  gap-x-10 text-xl font-semibold
              h-14'>
                <div> Under construction ..  </div>
                <button className='bg-white text-black w-20 h-8 px-2 ' onClick={() => { setshow(true) }}>ok</button>
              </div>

              }
            <Header />
            <Projects/>
          </>}></Route>
          <Route path="/resume" element={<>
            {!show && <div className='  bg-slate-900 text-white  
                  flex items-center justify-center  gap-x-10 text-xl font-semibold
              h-14'>
                <div> Under construction ..  </div>
                <button className='bg-white text-black w-20 h-8 px-2 ' onClick={() => { setshow(true) }}>ok</button>
              </div>

              }
            <Header />
            <Resume/>

          </>}></Route>

          <Route path='/contact' element={
            <div>
              {!show && <div className='  bg-slate-900 text-white  
                  flex items-center justify-center  gap-x-10 text-xl font-semibold
              h-14'>
                <div> Under construction ..  </div>
                <button className='bg-white text-black w-20 h-8 px-2 ' onClick={() => { setshow(true) }}>ok</button>
              </div>

              }
                <Header/>
                <Contact/>

            </div>
          }></Route>

        </Routes>

        <div className="absolute">
        <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
        <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
        <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
        <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
        <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      </div>

     
      </div>

      
    </div>
  )
}

export default App
