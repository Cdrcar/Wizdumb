import React from 'react';
import Logo from './Logo';

const Login = () => {
    const message = "Welcome back";
    return (
        <div className='grid flex'>
            <Logo message={message} />
            <div className="grid place-items-center m-20">
                <form>
                    <label className='p-3' for='email_or_username_login'>Email</label><br></br>
                    <input className='m-3 p-2 border' type='text' id='email_or_username_login' name='email_or_username_login' placeholder='Email' required></input><br></br>
                    <label className='p-3' for='password_login'>Password</label><br></br>
                    <input className='m-3 p-2 border' type='text' id='password_login' name='password_login' placeholder='Password' required></input><br></br>
                    <button className='bg-sky-400 border rounded-full text-background text-center mb-2 hover:bg-background hover:text-white hover:cursor-pointer'
                    style={{
                        width: '150px',
                        height: '36px',
                    }}>Login</button>
                </form>
            </div>
        </div>

    )

};

export default Login;