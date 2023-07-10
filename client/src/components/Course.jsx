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
            
            <div className='hover:cursor-pointer bg-gradient-to-r from-sky-100 to-cyan-200 mx-6 rounded-lg border-slate-600 border-2 p-5 sm:w-[360px] xs:w-[250px] m-5'
            onClick={handleClick}>
               
                <div className='flex justify-evenly items-center flex-col'>
                    <div className='relative w-full h-[230px]'>
                         <Lottie animationData={icon} className="w-full h-full object-cover rounded-xl" />
                    </div > 
                    <div className='m-2 p-6'>
                        <div className=''>
                            <h3 className='text-black font-bold flex flex-wrap md:text-[22px] sm:text-[14px] xs:text-[10px] '>{name}</h3>
                            <p className='mt-2 text-black text-[18px] flex flex-wrap md:text-[16px] sm:text-[10px] xs:text-[8px] text-[30px]'>{description}</p>
                        </div>

                        <div className='mt-4'>
                            <h4 className='font-bold text-black md:text-[20px] sm:text-[14px] xs:text-[10px]'>Modules:</h4>
                            {modules.map((module) => (
                                <ol key={module.One} className='text-black marker:text-emerald-800 list-disc'>
                                    <li className='cursor-pointer hover:text-xl'>{module.One}</li>
                                    <li className='cursor-pointer hover:text-xl'>{module.Two}</li>
                                    <li className='cursor-pointer hover:text-xl'>{module.Three}</li>
                                    <li className='cursor-pointer hover:text-xl'>{module.Four}</li>
                                    <li className='cursor-pointer hover:text-xl'>{module.Five}</li>
                                </ol>
                            ))}
                        </div>

                    </div>
                </div>
                
            </div>
        
        </Tilt>
        </div>
    )
  
} ; 

export default Course;