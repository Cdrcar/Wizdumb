import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../utils/queries";

const CoursePage = () => {
  const { courseName } = useParams();

  const { loading, error, data } = useQuery(QUERY_COURSES);

  const [selectedModule, setSelectedModule] = useState(null);
  console.log('Selected Module:', selectedModule);
  const [isModuleSelected, setIsModuleSelected] = useState(false);

  useEffect(() => {
    if (data) {
      const course = data.getCourses.find(course => course.name.toLowerCase() === courseName.toLowerCase());
      console.log('Course:', course);

      setSelectedModule(null);
      setIsModuleSelected(false);
    }
  }, [data, courseName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  const course = data.getCourses.find(course => course.name.toLowerCase() === courseName.toLowerCase());

  if (!course) {
    return <div>Course Not Found</div>;
  }
  console.log('Course Resources:', course.resources);

  const selectedModuleResources = course.resources.filter(resource => resource.module.toLowerCase() === selectedModule.toLowerCase());
  console.log(selectedModuleResources);

  return (
    <>
      <div className='flex'>
        <div className="flex top-18 left-0.25 py-5 w-80 lg:w-2/3 md:w-2/3 rounded bg-sky-800 bg-opacity-80 from-sky-400 to-indigo-900 text-white shadow-lg z-40">          
          <div className='mr-1 flex flex-col items-center'>
            <div className='w-5/6 h-20 items-center justify-center text-[22px] font-bold flex'>
              <h1 className='text-black'>MODULES</h1>
            </div>
            {course.modules.map((module) => (
              <div
                className='hover:cursor-pointer shadow-lg bg-cyan-200 bg-opacity-75 rounded-xl w-72 h-24 mt-4 flex items-center'
                key={module}
                onClick={() => {
                  setSelectedModule(module);
                  setIsModuleSelected(true);
                }}
              >
                <h3 className='flex indent-2 text-black whitespace-normal font-bold items-center justify-center'>
                  <p>{module}</p>
                </h3>
              </div>
            ))}
          </div>
        </div>
        {!isModuleSelected && (
          <div>
            <h1 className='text-6xl font-bold text-center text-cyan-800 my-6'>{course.name}</h1>
            <div className='flex flex-row mx-5'>
              <div className='flex-auto'>
                <div>
                  <p className='font-bold flex text-2xl'>{course.description}</p>
                </div>
                <div className='flex-auto'>
                  <br></br>
                  <p className='font-bold flex text-2xl'>Click on the modules to explore more!</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedModule && (
          <div>           
            {selectedModuleResources.map((resources) => (
              <div key={resources._id}>
                <h2 className='text-6xl font-bold text-center text-cyan-800 my-6'>{resources.name}</h2>
                <p className='font-bold flex text-2xl'>{resources.description}</p>
                <a className='font-bold flex text-2xl' href={resources.link}>
                  Link: {resources.link}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoursePage;
