import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { UPDATE_USER_PROFILE } from "../utils/mutations";
import { DELETE_USER } from "../utils/mutations";
import AuthService from "../utils/auth";
import { Navigate } from "react-router-dom";

const ProfileSettings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [topSkills, setTopSkills] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [userId, setUserId] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchProfileId = async () => {
      const profileData = await AuthService.getProfile().data;
      setUserId(profileData._id);
    };
    fetchProfileId();
  }, []);

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { id: userId },
    skip: !userId,
  });

  useEffect(() => {
    const setProfile = async () => {
      const details = data?.getUser;
      setAboutMe(data?.getUser.aboutMe);
      setLocation(data?.getUser.location);
      setFirstName(data?.getUser.firstName);
      setLastName(data?.getUser.lastName);
      setTopSkills(data?.getUser.topSkills);
      setProfilePhoto(data?.getUser.profilePhoto);
    };
    setProfile();
  }, [data]);

  // Updating user details
  const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE, {
    onError: (error) => {
      console.error("Failed to save:", error);
    },
  });

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleTopSkillsChange = (e) => {
    setTopSkills(e.target.value);
  };
  const convertToBase64 = (e) => {
    console.log(e);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProfilePhoto(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  const handleSaveChanges = async () => {
    try {
      const response = await updateUserProfile({
        variables: {
          input: {
            firstName,
            lastName,
            aboutMe,
            location,
            topSkills,
            profilePhoto,
          },
        },
      });
      console.log("Changes saved", response);
      window.location.assign("/profilesettings");
    } catch (error) {
      console.error("Failed to save:", error);
    }
  };

  //Delete user

  const [deleteUser] = useMutation(DELETE_USER);

  const handleLogout = () => {
    AuthService.logout();
  };

  const handleDelete = async () => {
    try {
      const response = await deleteUser({
        variables: {
          id: userId,
        },
      });
      console.log("Profile deleted", response);
      handleLogout();
      window.location.assign("/");
    } catch (error) {
      console.error("Failed to delete profile:", error);
    }
  };
  const handleAlert = () => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      handleDelete();
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div>
        <h2 className="text-3xl font-medium mt-8 mb-8">Edit my profile</h2>
        <div className="mb-4">
          {/* Full Name */}
          <h3 className="text-xl font-light mb-4">Introduction</h3>
          <label className="block mb-3 font-bold">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            // placeholder={}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <label className="block mb-3 font-bold">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        {/* Profile Photo */}
        <div className="mb-8">
          <label htmlFor="profilePhoto" className="block mb-4 font-bold">
            Profile Photo
          </label>
          <div className="flex items-center">
            <div className="w-32 h-32 mt-5 mb-5 bg-gray-200  flex items-center justify-center mr-2">
              {profilePhoto == "" || profilePhoto == null ? (
                ""
              ) : (
                <img className="" src={profilePhoto} alt="profile" />
              )}
            </div>
            <input accept="image/" type="file" onChange={convertToBase64} />
          </div>
        </div>
        {/* About you */}
        <div className="mb-10">
          <h3 className="text-xl font-light mb-4">Details About You</h3>
          <div className="mb-4">
            <label htmlFor="aboutMe" className="block mb-1 font-bold">
              About Me
            </label>
            <textarea
              id="aboutMe"
              value={aboutMe}
              onChange={handleAboutMeChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Tell us about yourself, such as what you do, what your interests
              are, and what you hope to get out of your courses.
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-1 font-bold">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Tell us the city, state, or country you currently live in.
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="topSkills" className="block mb-1 font-bold">
              Top Skills
            </label>
            <input
              type="text"
              id="topSkills"
              value={topSkills}
              onChange={handleTopSkillsChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Tell us about your top skills (e.g., Machine Learning).
            </p>
          </div>
        </div>
        {/* Save Changes Button */}
        <button
          onClick={handleSaveChanges}
          className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded mt-4 mb-20"
        >
          Save Changes
        </button>
        {/* Delete Button */}
        <button
          onClick={handleAlert}
          className="ml-40 px-4 py-2 bg-red-700 hover:bg-red-400 text-white rounded mt-4 mb-20"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};
export default ProfileSettings;
