import React from 'react';
import Tilt from "react-parallax-tilt";
import { courses } from '../constants/index';
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';


const Course = ({
    name,
    description,
    icon,
    modules,
}) => {
    const history = useNavigate();

  const handleClick = () => {
    history(`course/${name}`);
  };
    return (
        <div>
        <Tilt 
            tiltMaxAngleY={10}
            tiltMaxAngleX={10}
            perspective={1000}>
            
            <div className='hover:cursor-pointer mx-6 rounded-2xl border-slate-600 border-2 p-2 sm:w-[360px] xs:w-[250px] m-5'
            onClick={handleClick}>
               
                <div className='flex justify-evenly items-center flex-col'>
                    <div className='relative w-full h-[230px] rounded-xl bg-gradient-to-r from-sky-100 to-cyan-200'>
                         <Lottie animationData={icon} className="w-full h-full object-cover rounded-xl" />
                    </div > 
                    <div className='m-2 p-2'>
                        <div>
                            <h3 className='text-black font-bold flex flex-wrap md:text-[22px] sm:text-[14px] xs:text-[10px] '>{name}</h3>
                            <p className='mt-2 text-black text-[18px] flex flex-wrap md:text-[16px] sm:text-[10px] xs:text-[8px] text-[30px]'>{description}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        
        </Tilt>
        </div>
    )
  
} ; 

export default Course;