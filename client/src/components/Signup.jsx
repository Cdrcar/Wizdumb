import React from "react";
import Logo from "./Logo";

const Signup = () => {
  return (
    <div className="grid flex">
      <Logo />
      <div className="grid place-items-center m-20">
        <form>
          <label className="p-3" for="username_signup">
            Username
          </label>
          <br></br>
          <input
            className="m-3 p-2 border"
            type="text"
            id="username_signup"
            name="username_signup"
            placeholder="Username"
            required
          ></input>
          <br></br>
          <label className="p-3" for="email_signup">
            Email
          </label>
          <br></br>
          <input
            className="m-3 p-2 border"
            type="text"
            id="email_signup"
            name="email_signup"
            placeholder="Email"
            required
          ></input>
          <br></br>
          <label className="p-3" for="password_signup">
            Password
          </label>
          <br></br>
          <input
            className="m-3 p-2 border"
            type="text"
            id="password_signup"
            name="password_signup"
            placeholder="Password"
            required
          ></input>
          <br></br>
          <input
            className="m-3 p-2 border"
            type="text"
            id="confirm_signup"
            name="confirm_signup"
            placeholder="Confirm Password"
            required
          ></input>
          <br></br>
          <button
            className="bg-sky-400 border rounded-full text-background text-center mb-2 hover:bg-background hover:text-white hover:cursor-pointer"
            style={{
              width: "150px",
              height: "36px",
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
