import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN_USER } from "../utils/mutations";
import Logo from "./Logo";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error: addUserError, data: addUserResponse }] = useMutation(ADD_USER);
  const [loginUser, { error: loginError }] = useMutation(LOGIN_USER);
  const handleChange = (event) => {
   
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };


  // Handles user registration and logs user in after registering
  const handleFormSubmit = async (event) => {
    
    console.log("logged")
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
      const loginResponse = await loginUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      Auth.login(loginResponse.data.loginUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-white border border-white rounded-md flex flex-col">
      <Logo />
      <div className="grid place-items-center m-20">
        <div className="max-w-sm border items-center justify-center  border-gray-300 p-6">
        <h4 className="font-black text-cyan-700  text-center text-4xl mb-4 mt-10 mx-11">Sign up</h4>
        <h6 className="mb-10">Learn on your own time from the best courses</h6>
        {addUserResponse ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="text-center">
            <label className="p-3" htmlFor="username_signup">
              Username
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              id="username"
              name="username"
              type="text"
              value={formState.username}
              placeholder="Username"
              required
              onChange={handleChange}
            ></input>
            <br></br>

            <label className="p-3" htmlFor="firstName_signup">
              First Name
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              id="firstName"
              name="firstName"
              type="text"
              value={formState.firstName}
              placeholder="First Name"
              required
              onChange={handleChange}
            ></input>
            <br></br>

            <label className="p-3" htmlFor="lastName_signup">
              Last Name
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              id="lastName"
              name="lastName"
              type="text"
              value={formState.lastName}
              placeholder="Last Name"
              required
              onChange={handleChange}
            ></input>
            <br></br>

            <label className="p-3" htmlFor="email_signup">
              Email
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              id="email"
              name="email"
              type="text"
              value={formState.email}
              placeholder="example@email.com"
              required
              onChange={handleChange}
            ></input>
            <br></br>
            <label className="p-3" htmlFor="password_signup">
              Password
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              id="password"
              name="password"
              type="password"
              value={formState.password}
              placeholder="Create password"
              required
              onChange={handleChange}
            ></input>
            {/* <br></br>
          <input
            className="m-3 p-2 border"
            type="password"
            id="confirm_signup"
            name="confirm"
            placeholder="Confirm Password"
            required

            onChange={handleChange}
          ></input> */}
            <br></br>
            <button
              className="bg-sky-400 border rounded-full text-background text-center mb-6 mt-6 hover:bg-background hover:text-white hover:cursor-pointer"
              style={{
                width: "150px",
                height: "36px",
                alignSelf: "center", 
              }}
              type="submit"
            >
              Sign up
            </button>
          </form>
        )}

{addUserError && (
            <div className="my-3 p-3 bg-danger text-white">{addUserError.message}</div>
          )}

          {loginError && (
            <div className="my-3 p-3 bg-danger text-white">{loginError.message}</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Signup;