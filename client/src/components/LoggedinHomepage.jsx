import React, { useState } from "react";
import profileImg from "../assets/profile-image.png";

const LoggedinHomepage = () => {
  const [completedCount, setCompletedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [courses, setCourses] = useState([]); // Placeholder for course data

  const handleCompletedIncrement = () => {
    setCompletedCount((prevCount) => prevCount + 1);
  };

  const handleInProgressIncrement = () => {
    setInProgressCount((prevCount) => prevCount + 1);
  };

  // Placeholder function to add course to the data
  const handleAddCourse = () => {
    const newCourse = { id: courses.length + 1, title: "New Course" }; // Example course data
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 ml-5 mr-5">
      <div>
        <div className="flex items-center">
          <img src={profileImg} alt="profile_img" className="inline-block h-10 rounded-full" />
          <div className="ml-2">
            <div>Username</div>
            <div>Location</div>
          </div>
        </div>

        <div className="ml-2">
          <div>Hey, Username! &#x1F44B;</div>
          <div>Heres a breakdown of your progress</div>
          <div className="flex space-x-4">
            <div onClick={handleCompletedIncrement} style={{ cursor: "pointer" }}>
              <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
              <span className="ml-2">Completed ({completedCount})</span>
            </div>
            <div onClick={handleInProgressIncrement} style={{ cursor: "pointer" }}>
              <span className="inline-block w-4 h-4 rounded-full bg-red-500"></span>
              <span className="ml-2">In Progress ({inProgressCount})</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="mb-4">
          <div className="mr-5">In Progress</div>
          {courses
            .filter((course) => {
              /* Add your condition to filter in-progress courses */
            })
            .map((course) => (
              <div key={course.id} className="border rounded p-4 mb-2">
                {/* Placeholder course information */}
                In Progress Course
              </div>
            ))}
        </div>

        <div>
          <div className="mr-5">Completed</div>
          {courses
            .filter((course) => {
              /* Add your condition to filter completed courses */
            })
            .map((course) => (
              <div key={course.id} className="border rounded p-4 mb-2">
                {/* Placeholder course information */}
                Completed Course
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-end">
        <div>
          <div>View All</div>
          {/* Display all courses here */}
          {courses.map((course) => (
            <div key={course.id} className="border rounded p-4 mb-2">
              {/* Placeholder course information */}
              All Course
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggedinHomepage;
