import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_COURSES, QUERY_RESOURCES } from "../utils/queries";

const CoursePage = () => {

  const { courseName } = useParams();

  const { loading: coursesLoading, error: coursesError, data: coursesData } = useQuery(QUERY_COURSES);
  const { loading: resourcesLoading, error: resourcesError, data: resourcesData } = useQuery(QUERY_RESOURCES);

  console.log(resourcesData)

  const [selectedModule, setSelectedModule] = useState(null);
  const [isModuleSelected, setIsModuleSelected] = useState(false);

  useEffect(() => {
    if (coursesData) {
      const course = coursesData.getCourses.find(course => course.name.toLowerCase() === courseName.toLowerCase());
      setSelectedModule(null);
      setIsModuleSelected(false);
    }
  }, []);

  if (coursesLoading || resourcesLoading) {
    return <div>Loading...</div>;
  }

  if (coursesError || resourcesError) {
    return <div>Error occurred while fetching data</div>;
  }

  const course = coursesData.getCourses.find(course => course.name.toLowerCase() === courseName.toLowerCase());
  console.log(course);


  const selectedModuleResources = [];
  for (const resource of resourcesData.getResources) {
    // console.log(resource.name)
    console.log('Selected Module:', selectedModule);
    console.log('Resource Name:', resource.name);
    if (resource.name === selectedModule) {

      selectedModuleResources.push(resource);
      console.log('resource matching')


    }
  }


  console.log(selectedModuleResources)
  console.log(selectedModule)

  if (!course) {
    return <div>Course Not Found</div>;
  }


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
            {selectedModuleResources.map((resource) => (
              <div key={resource._id}>
                <h2 className='text-6xl font-bold text-center text-cyan-800 my-6'>{resource.name}</h2>
                <p className='font-bold flex text-2xl'>{resource.description}</p>
                <a className='font-bold flex text-2xl' href={resource.link}>
                  Link: {resource.link}
                </a>
                {resource.video && (
                  <video width="320" height="240" controls>
                    <source src={resource.video} type="video/mp4" />
                    <source src={resource.video} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}







          </div>
        )}
      </div>
    </>
  );
};

export default CoursePage;