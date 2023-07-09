import React, { useState } from "react";

const Profile = () => {
  const [fullName, setFullName] = useState("Lewis Hamilton");
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [topSkills, setTopSkills] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
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

  const handleSaveChanges = () => {
    // Handle saving changes
    // TODO: send the updates to the server
    console.log("Saving changes...");
    console.log("Full Name:", fullName);
    console.log("About Me:", aboutMe);
    console.log("Location:", location);
    console.log("Top Skills:", topSkills);
  };

  const handleProfilePhotoUpload = (e) => {
    //TODO
  };

  return (
    <div className="max-w-xl mx-auto">
      <div>
        <h2 className="text-3xl font-medium mt-8 mb-8">Edit my profile</h2>
        <div className="mb-4">
          {/* Full Name */}
          <h3 className="text-xl font-light mb-4">Introduction</h3>
          <label htmlFor="fullName" className="block mb-3 font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Edit
        </button> */}
        </div>

        {/* Profile Photo */}
        <div className="mb-8">
          <label htmlFor="profilePhoto" className="block mb-4 font-bold">
            Profile Photo
          </label>
          <div className="flex items-center">
            {/* Placeholder for profile photo */}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-2">
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
      </div>

      {/* Details about you */}
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
  );
};

export default Profile;
