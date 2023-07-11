import React from "react";
import Logo from "./Logo";

const Login = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const message = "Welcome back!";
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center mt-10"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white border border-white rounded-md flex flex-col mt-20">
        <button
          className="text-xl border border-white rounded-full hover:border hover:rounded-full hover:cursor-pointer font-extralight hover:bg-sky-400 hover:bg-opacity-10 place-self-end mt-2 mr-2 pl-4 pr-4 pt-2 pb-[-10px] transition ease-in-out duration-200"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="w-[320px]">
          <Logo />
        </div>
        <p className="text-center text-lg">{message}</p>
        <div className="grid place-items-center m-10">
          <form>
            <label className="p-3" for="email_or_username_login">
              Email
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              type="text"
              id="email_or_username_login"
              name="email_or_username_login"
              placeholder="Email"
              required
            ></input>
            <br></br>
            <label className="p-3" for="password_login">
              Password
            </label>
            <br></br>
            <input
              className="m-3 p-2 border"
              type="text"
              id="password_login"
              name="password_login"
              placeholder="Password"
              required
            ></input>
            <br></br>
            <button
              className="mt-5 bg-sky-400 border border-sky-400 text-white rounded-full text-background text-center mb-2 hover:bg-white hover:text-sky-400 hover:cursor-pointer hover:border-sky-400 ml-6"
              style={{
                width: "150px",
                height: "36px",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
