import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Logo from './Logo';

import Auth from "../utils/auth";

const Login = () => {
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
    console.log(formState);

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.loginUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='grid flex'>
      <Logo />
      <div className="grid place-items-center m-20">
        <div className="max-w-sm border items-center justify-center  border-gray-300 p-16">
          <h4 className="font-black text-cyan-700 text-center text-4xl mb-6 mt-10 mx-11">Log in</h4>
          <form onSubmit={handleFormSubmit}>
            <label className='pb-3'>Email</label><br></br>
            <input
              className='mb-4 p-2 border'
              type='text'
              id='email'
              name='email'
              placeholder="example@email.com"
              required
              onChange={handleChange}
            ></input><br></br>
            <label className='pb-3' htmlFor='password'>Password</label><br></br>
            <input
              className='mb-4 p-2 border'
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              required
              onChange={handleChange}
            ></input><br></br>
            <button
              className="bg-sky-400 border rounded-full text-background text-center mb-6 mt-6 hover:bg-background hover:text-white hover:cursor-pointer"
              style={{
                width: "150px",
                height: "36px",
                alignSelf: "center",
              }}
              type="submit"
            >
              Log in
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