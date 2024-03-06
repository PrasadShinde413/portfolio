import React from 'react'
import profile from '../assessts/profile.png'
import { Style } from '../utils/Style'
import Resume from '../assessts/Resume.pdf'
import {TiArrowDownOutline} from "react-icons/ti"
import '../App.css'

function About() {
  return (
    <div className='flex flex-wrap justify-center item-center mt-10 p-10 ' id='Home' >

        <div className='flex-1 py-4 mx-6'>
            <span className={Style.heroHeadText}>
                Hi I'm <span className='text-orange-600'>
                    Prasad
                </span>
                <br/>
                    <span className={Style.heroSubText}>
                        I am Web Developer &
                        <br/>
                        React Developer
                    </span>
            </span>
            <br/>
            <div className='w-[14rem]'>
                <a
                href={Resume}
                download="Resume" 
                target='blank'
                rel ="noreferrer">
                    <div className='p-4 mt-2 wt-[13rem] rounded-xl text-orange-500 flex justify-center border-2 
                    border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 '>
                        <TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500'></TiArrowDownOutline>
                        Resume

                    </div>

                </a>

            </div>

        </div>
      <div className='flex flex-wrap'>
        <img src={profile} alt='profile' className='element object-contain p-4 mt-20 rounded-full mx-6' />


      </div>

    </div>
  )
}

export default About
