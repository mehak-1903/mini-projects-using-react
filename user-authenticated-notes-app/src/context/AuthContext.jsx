import React, { useState } from 'react'
import Login from '../pages/Login';
import SignupForm from '../pages/SignupForm';

export default function AuthContext() {
    const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    <button onClick={() => setIsLoading(true)} className='px-4 py-2 bg-green-500 text-white'>Login</button><br/>
    <button onClick={() => setIsLoading(false)} className='px-4 py-2 bg-blue-500 text-white'>SignUp</button>
    {isLoading ? <Login /> : <SignupForm />}
    </>
  )
}
