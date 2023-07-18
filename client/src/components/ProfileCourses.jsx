import React from "react";
import icons from "../constants/index";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import AuthService from "../utils/auth";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { REMOVE_SAVED_COURSE } from "../utils/mutations";
import { FaMinus } from "react-icons/fa";

const Course = ({ name, description, icon, _id }) => {
  const auth = useSelector((state) => state.AuthService);

  // Check if user is logged in
  const loggedIn = AuthService.loggedIn();
  const history = useNavigate();

  // handle removal of a saved course
  const [removeSavedCourse] = useMutation(REMOVE_SAVED_COURSE);

  const handleRemoveCourse = async (event) => {
    event.stopPropagation();
    event.preventDefault(); // Prevent following the link
    window.location.reload();

    try {
      if (loggedIn) {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this course?"
        );
        if (confirmDelete) {
          const { data } = await removeSavedCourse({
            variables: { courseId: _id },
          });
          window.location.assign("/home");
          if (data) {
            // Course removed successfully
            console.log("Course removed:", data.removeSavedCourse);
            // Reload the page
          }
        }
      } else {
        console.log("User not logged in");
        // Handle user not logged in case
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  let iconName;
  const keyExists = icons.find((obj) => obj.hasOwnProperty(icon));

  if (keyExists) {
    iconName = keyExists[icon];
    console.log(iconName);
  }

  return (
    <div className="w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="relative bg-white bg-opacity-85 rounded-lg border-slate-700 border-2 p-4 h-30 w-40 flex flex-col justify-between">
        <div className="relative h-32 mb-4">
          <Lottie
            animationData={iconName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-black font-bold text-lg mb-2">{name}</h3>
          <p className="text-black text-sm">{description}</p>
        </div>
        <div>
          {loggedIn ? (
            <div
              className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-xl cursor-pointer"
              onClick={handleRemoveCourse}
            >
              <FaMinus />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
