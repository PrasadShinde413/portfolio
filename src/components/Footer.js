import React from 'react';
import {GrGithub, GrLinkedinOption, GrMail} from 'react-icons/gr';
import {BiSolidPhoneCall} from 'react-icons/bi';
// import { FaCredly } from 'react-icons/fa';
function Footer() {
  return (
    <div>
        <div className=' w-[screen] flex flex-row justify-evenly bg-black '>

            <div className='flex flex-row p-2 flex-wrap justify-around '>
                <a href='https://www.linkedin.com/in/prasad-shinde-95233a220' target='blank' className='text-lg flex flex-row text-violet-300 '>
<div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
    <GrLinkedinOption className='text-white'></GrLinkedinOption>
</div>

<span className='text-white ml-1 mt-[0.1rem]'>Prasad Shinde</span>
                </a>

            </div>



            <div className='flex flex-row p-2 flex-wrap justify-around '>
                <a href='prasad4shinde2003@gmail.com' target='blank' className='text-lg flex flex-row text-violet-300 '>
<div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
    <GrMail className='text-white'></GrMail>
</div>

<span className='text-white ml-1 mt-[0.1rem]'>prasad4shinde2003@gmail.com</span>
                </a>

            </div>



            <div className='flex flex-row p-2 flex-wrap justify-around '>
                <a href='//' target='blank' className='text-lg flex flex-row text-violet-300 '>
<div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
    <BiSolidPhoneCall className='text-white'></BiSolidPhoneCall>
</div>

<span className='text-white ml-1 mt-[0.1rem]'>9359418275</span>
                </a>

            </div>


            <div className='flex flex-row p-2 flex-wrap justify-around '>
                <a href='https://github.com/PrasadShinde413' target='blank' className='text-lg flex flex-row text-violet-300 '>
<div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
    <GrGithub className='text-white'></GrGithub>
</div>

<span className='text-white ml-1 mt-[0.1rem]'>GitHub</span>
                </a>

            </div>

{/* 
            <div className='flex flex-row p-2 flex-wrap justify-around '>
                <a href='https://www.credly.com/users/prasad-shinde.78de4629/badges' target='blank' className='text-lg flex flex-row text-violet-300 '>
<div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
    <FaCredly className='text-white'></FaCredly>
</div>

<span className='text-white ml-1 mt-[0.1rem]'>Credly</span>
                </a>

            </div> */}

        </div>
      
    </div>
  )
}

export default Footer
