import React, { useState } from 'react';
import Header from './Header';
import bg from '../assets/Netflix_background.jpg';

const Login = () => {

    const[IsSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!IsSignInForm);
    };

  return (
    <div>
        <Header />
        <div>
            <img className='absolute'
            src= {bg}/>
        </div>

        <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80'> 
            <h1 className='font-bold text-3xl text-white py-4'> 
                {IsSignInForm ? "Sign In" : "Sign Up" }
            </h1>

            {!IsSignInForm && (
                <input 
                type='text' 
                placeholder='Full Name' 
                className='p-4 my-4 bg-gray-700 w-full'
                />
            )}

            <input 
            type='text' 
            placeholder='Email Address' 
            className='p-4 my-4 bg-gray-700 w-full'
            />
            
            <input 
            type='password' 
            placeholder='password' 
            className='p-4 my-4 bg-gray-700 w-full'
            /> 
            <button
            className='p-4 my-4 bg-red-700 w-full rounded-lg'> {IsSignInForm ? "Sign In" : "Sign Up"}
            </button>          

            <p onClick={toggleSignInForm} 
            className='py-4 cursor-pointer'>
                {IsSignInForm ? "New to Netflix? Sign Up Now!" : "Already registered? Sign In Now..."}
                
            </p> 
        </form>
    </div>
  );
};

export default Login