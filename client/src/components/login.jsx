import React from 'react';
import Logo from './Logo';

const Login = () => {
    return (
        <div className='grid flex'>
            <Logo />
            <div className="grid place-items-center m-20">
            <div className='flex h-96 w-96 flex items-center justify-center border-slate-300 border-2 shadow-lg rounded-lg'>
                    <form>
                        <label className='pb-3' for='email_or_username_login'>Email</label><br></br>
                        <input className='mb-3 p-2 border' type='text' id='email_or_username_login' name='email_or_username_login' placeholder='Email' required></input><br></br>
                        <label className='pb-3' for='password_login'>Password</label><br></br>
                        <input className='mb-3 p-2 border' type='text' id='password_login' name='password_login' placeholder='Password' required></input><br></br>
                        <button className='self-end bg-sky-400 border rounded-full text-background text-center mb-2 hover:bg-background hover:text-white hover:cursor-pointer'
                            style={{
                                width: '150px',
                                height: '36px',
                            }}>Login</button>
                    </form>
                </div>

            </div>
        </div>

    )

};

export default Login;