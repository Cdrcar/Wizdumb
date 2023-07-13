import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../utils/queries";
import { useSelector, useDispatch } from 'react-redux'


const CoursePage = () => {
  
    const { courseName } = useParams();
    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();
  
    const { loading, error, data } = useQuery(QUERY_COURSES);
    console.log(data)
  
    useEffect(() => {
      if (data) {
        dispatch({ type: 'courses/setCourses', payload: data?.getCourses || [] });
      }
    }, [data, dispatch]);
  
    const course = courses.find(
      (course) => course.name.toLowerCase() === courseName.toLowerCase()
    );
  
    if (!course) {
      return <div>Course Not Found</div>; 
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
            <p className='font-bold flex basis-4 text-2xl'>{course.description}</p>
            </div>
            <div className='flex-auto'>
            <br></br>
              <p className='font-bold flex basis-4 text-2xl'>Click on the modules to explore more!</p>
            </div>
          </div>
          </div>
          
        </div>
        </>
    
    );
  };

    
export default CoursePage;
