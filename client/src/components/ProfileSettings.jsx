import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { UPDATE_USER_PROFILE } from "../utils/mutations";
import AuthService from "../utils/auth";

const ProfileSettings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [topSkills, setTopSkills] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [userId, setUserId] = useState(null);

  const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE);

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
      console.log(data?.getUser.aboutMe);
      setLocation(data?.getUser.location);
    };
    setProfile();
  }, []);

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
  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };
  // const handleSaveChanges = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await updateUserProfile({
  //       variables: {
  //         input: {
  //           id: userId,
  //           firstName,
  //           lastName,
  //           aboutMe,
  //           location,
  //           topSkills,
  //           profilePhoto: profilePhoto || undefined,
  //         },
  //       },
  //     });
  //     console.log("Changes saved", response);
  //   } catch (error) {
  //     console.error("Failed to save:", error);
  //   }
  // };

  const handleSaveChanges = () => {
    // Handle saving changes
    // TODO: send the updates to the server
    console.log("Saving changes...");
    console.log("Full Name:", firstName);
    console.log("Full Name:", lastName);
    console.log("About Me:", aboutMe);
    console.log("Location:", location);
    console.log("Top Skills:", topSkills);
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
            <div className="w-32 h-32 bg-gray-200  flex items-center justify-center mr-2">
              Photo
            </div>
            <input
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleProfilePhotoUpload}
              className="hidden"
            />
            <label
              htmlFor="profilePhoto"
              className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded cursor-pointer"
            >
              Upload Photo
            </label>
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
      </div>
    </div>
  );
};

export default ProfileSettings;
