import {useState, React } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { login } from "../reducers/authReducer";
import Logo from "./Logo";
import Auth from "../utils/auth";

const Login = ({ isVisible, onClose }) => {

  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Form state:', formState);
  
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });
  
  
      if (data?.loginUser?.token) {
        console.log('User sucessfully authenticated!', data.loginUser.user.email);
        localStorage.setItem('email', data.loginUser.user.email);
        Auth.login(data.loginUser.token);
      } else {
        console.log('Authentication failed!');
      }
    } catch (e) {
      console.error('Login error:', e);
    }
  };
  
  
  
  if (!isVisible) return null;
  const message = "Welcome back!";
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white border border-white rounded-md flex flex-col mt-20">
        <button
          className="text-xl border border-white rounded-full hover:border hover:rounded-full hover:cursor-pointer font-extralight hover:bg-sky-400 hover:bg-opacity-10 place-self-end mt-2 mr-2 pl-4 pr-4 pt-2 pb-2 transition ease-in-out duration-200"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="w-[320px]">
          <Logo />
        </div>
        <p className="text-center text-lg">{message}</p>
        <div className="grid place-items-center m-10">
          <form onSubmit={handleFormSubmit}>
            <label className="p-3" htmlFor="email_or_username_login">
              Email
            </label>
            <br></br>
            <input
              className='mb-4 p-2 border'
              type='text'
              id='email'
              name='email'
              placeholder="example@email.com"
              required
              onChange={handleChange}
            ></input>
            <br></br>
            <label className="p-3" htmlFor="password_login">
              Password
            </label>
            <br></br>
            <input
               className='mb-4 p-2 border'
               type='password'
               id='password'
               name='password'
               placeholder='Password'
               required
               onChange={handleChange}
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
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
