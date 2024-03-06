import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Style } from '../utils/Style';
import { technologies,services } from '../constants';
// import {motion} from "framer-motion";
import './style.css';


function OverView() {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3 ' id='OverView'>
            <span className={Style.sectionHeadText} >
                Introduction
            </span>
            <hr className='w-[35%]'></hr>
            <div className={Style.sectionText}>
            A Tech enthusiast and aspiring Information Technology Engineer 
            with Highly-motivated Personality, desire to take on new challenges.
            Strong worth ethic, adaptability and exceptional interpersonal skills.
            Adept at working effectively unsupervised and quickly mastering new skills
            </div>

        </div>
            <div className='flex flex-wrap justify-center '>
                {services.map ((services)=>(
                    <div>
                        <Tilt
                            key={services.icon}
                            className='parallax-effect-glare-scale '
                            perspective={500}
                            glareColor="fed7aa"
                            glareEnable={true}
                            glareMaxOpacity={0.50}
                            sale={1.02}
                            gyrocscope={true} >
                                <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                                    <img className='h-[100px] w-[100px] ' src={services.icon} alt={services.title} />
                                    <div className='m-5 text-violet-500'>
                                        {services.title}
                                    </div>
                                </div>

                            </Tilt> 
                        </div>
                ))
                }

            </div>
      
      <div className='flex flex-wrap justify-center items-center'>
        {technologies.map((technology)=>(
            <div
            key={technology.name}
            className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400
            hover:shadow-orange-300 '
            >
                <img className='p-2' src={technology.icon} alt={technology.name} style={{ width: '100px', height: '100px' }} />
                <div className='text-violet-600 justify-center flex'>
                    {technology.name}
                    </div>

                </div>
        ))}

      </div>
    </div>
  )
}

export default OverView

