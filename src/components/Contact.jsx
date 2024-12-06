import React, { useState } from 'react'

const Contact = () => {
    const [formdata, setFormdata] = useState({
        name: '', email: '', content: ''
    })
    function formHandler(e) {

        const { name, value } = e.target;
        setFormdata((prev) => {
            return {
                ...prev,
                [name]: value
            };
        })
        console.log(name);

    }

    return (
        <div >
            <div className=' text-2xl  flex flex-col justify-center 
              py-2  p-10 gap-y-20
        items-center min-w-[50%]  '>
                <div className='text-[3rem] font-bold bg-slate-200 text-black p-10 rounded-xl'>Contact me .. </div>


                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(formdata);
                    setFormdata({ name: '', email: '', content: '' })
                }}
                    className='bg-custom-gradient  flex flex-col min-w-[40rem] gap-y-4 p-6 py-10' 
                >
                    <label className='w-full  flex flex-col gap-y-2  '>
                        <p className='font-semibold text-3xl '>Enter Your name :
                        </p>
                        <input
                            type='text'
                            name='name'
                            value={formdata.name}
                            onChange={formHandler}
                            placeholder='Enter namee .. '
                            className='w-full p-2 '
                        />
                    </label>
                    <label className='w-full flex flex-col gap-y-2  '>
                        <p className='font-semibold text-3xl '>Enter Email .. : :
                        </p>
                        <input
                            type='text'
                            name='email'
                            value={formdata.email}
                            onChange={formHandler}
                            placeholder='Type Your Email here ...'
                            className='p-2'
                        />
                    </label>
                    <label className='w-full flex flex-col gap-y-2  '>
                        <p className='font-semibold text-3xl '>Details :
                        </p>
                        <textarea
                            type='text'
                            name='content'
                            value={formdata.content}
                            onChange={formHandler}
                            rows={6}
                            placeholder='Type your details'
                            className='rounded-sm border-slate-40 p-2  resize-none'
                            
                        />
                    </label>

                    <button className=' bg-neutral-800 p-4 hover:bg-white font-bold text-3xl rounded-full bg-transparent hover:text-black text-white
                        transform duration-300
                    '>Send .. </button>


                </form>
            </div>
        </div>
    )
}

export default Contact