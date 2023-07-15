import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile-image.png";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const [completedCount, setCompletedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [courses, setCourses] = useState([]); // Placeholder for course data
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);
  const [showPlaceholders, setShowPlaceholders] = useState(false); // New state
  const [username, setUsername] = useState("");


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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "myCourses") {
      setShowPlaceholders(true);
    } else {
      setShowPlaceholders(false);
    }
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();

    e.preventDefault();
    if (searchQuery === "") {
      setCurrentSearch([]);
      return false;
    }
    setCurrentSearch(
      courses
        .filter((course) => course.title.toLowerCase().includes(searchQuery))
        .slice(0, 8)
        .map((course) => course.title)
    );
  };

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { id: "" }, 
  });

  useEffect(() => {
    if (data && data.getUser) {
      setUsername(data.getUser.username);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderPlaceholderCards = () => {
    return (
      <div className="flex flex-col justify-end ml-5">
        <div className="border rounded p-4 mb-2">Placeholder Card</div>
        <div className="border rounded p-4 mb-2">Placeholder Card</div>
        <div className="border rounded p-4 mb-2">Placeholder Card</div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 mt-10 ml-5 mr-5 center text-xl">
      <div className="">
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="profile_img"
            className="inline-block h-20 rounded-full mt-2 mr-2"
          />
          <div className="text-center ml-2">
            <div className="mb-1 mt-5">Hey, { username } &#x1F44B;</div>
            <div>Heres a breakdown of your progress</div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mx-auto space-x-4 mt-20 mb-20">
            <div
              onClick={handleCompletedIncrement}
              style={{ cursor: "pointer" }}
            >
              <span className="inline-block w-10 h-4 rounded-full bg-green-500 "></span>
              <span className="ml-2">Completed ({completedCount})</span>
            </div>
            <div
              onClick={handleInProgressIncrement}
              style={{ cursor: "pointer" }}
            >
              <span className="inline-block w-10 h-4 rounded-full bg-red-500"></span>
              <span className="ml-2">In Progress ({inProgressCount})</span>
            </div>
          </div>

          <div className="flex justify-center items-center mb-20">
            <form className="w-[500px] relative">
              <div className="relative">
                <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 p-1 rounded-full border-xl">
                  <input
                    type="search"
                    placeholder="Search Here"
                    className="w-full rounded-full p-4 bg-slate-200 text-black"
                    onChange={handleSearch}
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-cyan-300 bg-opacity-25 rounded-full mx-2">
                    Search
                  </button>
                </div>
              </div>
              {currentSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-blue-100 text-black font-bold w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 hover:pointer-cursor">
                  {currentSearch.map((search) => (
                    <span key={search}>{search}</span>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-l-2 border-gray-300 pl-5">
        <div className="flex justify-center">
          <div>
            <button
              className={`border rounded-full mt border-gray-300 p-1 pr-3 pl-3 hover:cursor-pointer hover:text-white hover:bg-rose-600 hover:border-rose-600 ${
                selectedCategory === "myCourses" ? "bg-rose-600 text-white" : ""
              }`}
              onClick={() => handleCategoryClick("myCourses")}
            >
              My Courses
            </button>
          </div>
        </div>
        {selectedCategory === "myCourses" && showPlaceholders && (
          <div className="mt-5">
            {renderPlaceholderCards()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
