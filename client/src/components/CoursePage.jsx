import React from 'react';
import { useParams } from 'react-router-dom';
// import courses from '../constants/index.js';
import Lottie from "lottie-react";
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../utils/queries";
import { FaFire, FaPoo } from 'react-icons/fa';

const CoursePage = () => {
    const { courseName }= useParams();

    console.log('courseName:', courseName);
    const { loading, error, data } = useQuery(QUERY_COURSES);
    const courses = data?.getCourses || [];
    console.log(data);
   

    const course = courses.find(course => course.name.toLowerCase()===courseName.toLowerCase());
    console.log('course:', course);

    if (courseName === course){
        console.log("success!");
    }
  
    if (!course) {
      return <div>Course not found.</div>;
    }

    return (
      <>

        <div className="fixed top-18 left-0.25 h-screen w-56 rounded bg-sky-800 bg-opacity-80 from-sky-400 to-indigo-900 text-white shadow-lg z-40 ">
          <div className='mr-1 flex flex-col items-center'>
            <div className='w-5/6 h-20 items-center justify-center text-[22px] font-bold flex'>
              <h1 className='text-black'>MODULES</h1>
              </div>
            {course.modules.map((module) => (
            
              <div className='hover:cursor-pointer shadow-lg bg-cyan-200 bg-opacity-75 rounded-xl w-5/6 h-24 mt-4 flex items-center' key={module}>
                <h3 className='flex indent-2 text-black whitespace-normal font-bold items-center justify-center'>
                  <p>
                {module}
                </p>
                </h3>
              </div>
            ))}
            <div className='hover:cursor-pointer bg-cyan-200 rounded-xl w-5/6 h-24 mt-4 flex '>
              <h3 className='flex indent-2 items-center justify-center text-black font-bold'>video</h3></div>
          </div>
        </div>
      <div>
        <h1 className='text-6xl font-bold text-center text-cyan-800 my-6'>{course.name}</h1>
        <div className='flex flex-row'>
          <div className='flex-auto w-[50%] '>
            {/* <Lottie animationData={course.icon} className="w-full h-full object-cover rounded-xl" /> */}
          </div>
          <div className='flex-auto'>
            <div>
            <p className='font-bold mt-14 flex basis-4 text-2xl'>{course.description}</p>
            </div>
            <div className='flex-auto'>
            <br></br>
            <h3 className='font-bold text-2xl' >Modules</h3>
            {course.modules.map((module) => (
              <ol key={module[0]} className='text-black marker:text-emerald-800 list-disc'>
                <li className='cursor-pointer py-2 list-none hover:font-bold duration-500'><a href={`#${module}`} key={module}> {module}</a></li>
                
              </ol>
            ))}
            </div>
          </div>
          </div>
          
        </div>
        </>
    
    );
  };
    
export default CoursePage;
