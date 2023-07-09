import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../constants/index.js';
import Lottie from "lottie-react";

const CoursePage = () => {
    const { courseName }= useParams();

    console.log('courseName:', courseName);

    const course = courses.find(course => course.name.toLowerCase()===courseName.toLowerCase());
    console.log('course:', course);

    if (courseName === course){
        console.log("success!");
    }
  
    if (!course) {
      return <div>Course not found.</div>;
    }

    return (
      <div>
        <h1 className='text-6xl font-bold text-center text-cyan-800 my-6'>{course.name}</h1>
        <div className='grid grid-cols-6 gap-4 mx-6'>
          <div className='col-start-1 col-span-3'>
            <Lottie animationData={course.icon} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className='col-span-2'>
            <p className='font-bold mt-14 flex items-center justify-center text-2xl'>{course.description}</p>
            <br></br>
            <h3 className='font-bold text-2xl' >Modules</h3>
            {course.modules.map((module) => (
              <ol key={module.One} className='text-black marker:text-emerald-800 list-disc'>
                <li className='cursor-pointer py-2 list-none hover:font-bold duration-500'><a href='#module_1'>Module One: {module.One}</a>M</li>
                <li className='cursor-pointer py-2 list-none hover:font-bold duration-500'><a href='#module_2'>Module Two:</a>. {module.Two}</li>
                <li className='cursor-pointer py-2 list-none hover:font-bold duration-500'><a href='#module_3'>Module Three:</a> {module.Three}</li>
                <li className='cursor-pointer py-2 list-none hover:font-bold duration-500'><a href='#module_4'>Module Four:</a> {module.Four}</li>
                <li className='cursor-pointer py-2 list-none hover:font-bold duration-500 '><a href='#module_5'>Module Five:</a> {module.Five}</li>
              </ol>
            ))}
          </div>
          </div>
          {course.modules.map((module) => (
            <>
            <div className='mx-6 p-4 grid grid-rows-5 flex'>
              <div>
                <h1 id='module_1' className='text-[40px] flex-wrap text-sky-500'>{module.One}</h1>
                <div div className='grid grid-cols-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut magni ex impedit mollitia, officiis dolor aliquid voluptatibus quas ratione reiciendis dicta laborum ad possimus repudiandae cupiditate asperiores labore excepturi.</p>
              </div>
              </div>
              <div>
                <h1 id='module_2' className='text-[40px] flex-wrap text-sky-500'>{module.Two}</h1>
                <div className='grid grid-cols-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut magni ex impedit mollitia, officiis dolor aliquid voluptatibus quas ratione reiciendis dicta laborum ad possimus repudiandae cupiditate asperiores labore excepturi.</p>
              </div>
              </div>
              <div>
                <h1 id='module_3' className='text-[40px] flex-wrap text-sky-500'>{module.Three}</h1>
                <div div className='grid grid-cols-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut magni ex impedit mollitia, officiis dolor aliquid voluptatibus quas ratione reiciendis dicta laborum ad possimus repudiandae cupiditate asperiores labore excepturi.</p>
                </div>
              </div>
              <div >
                <h1 id='module_4'className='text-[40px] flex-wrap text-sky-500'>{module.Four}</h1>
                <div div className='grid grid-cols-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut magni ex impedit mollitia, officiis dolor aliquid voluptatibus quas ratione reiciendis dicta laborum ad possimus repudiandae cupiditate asperiores labore excepturi.</p>
                </div>
              </div>
              <div>
                <h1 id='module_5' className='text-[40px] flex-wrap text-sky-500'>{module.Five}</h1>
                <div div className='grid grid-cols-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut magni ex impedit mollitia, officiis dolor aliquid voluptatibus quas ratione reiciendis dicta laborum ad possimus repudiandae cupiditate asperiores labore excepturi.</p>
                </div>
              </div>
              </div>
            </>
          ))}
        </div>
    
    );
  };
    
export default CoursePage;
