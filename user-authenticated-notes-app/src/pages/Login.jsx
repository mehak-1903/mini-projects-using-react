import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import SignupForm from './SignupForm';

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-[#f58a8a]'>

      {/* Card */}
      <div className='w-full max-w-md rounded-2xl shadow-2xl overflow-hidden bg-[#f58a8a]'>

        {/* Form */}
        {showSignUp ? ( <SignupForm /> ) : (

        <form onSubmit={handleSubmit(onSubmit)} className='bg-white px-6 py-8'>
          <h1 className='text-3xl text-gray-800 font-bold mb-2'>Login.</h1>

          <div className='w-12 h-1 rounded-full bg-pink-500 ml-2 mb-6'></div>

          {/* Email */}
          <div className='mb-4'>
            <label className='text-gray-500 text-sm'>Email<span className='text-red-500 font-bold'>*</span>:</label>
            <input type="email" placeholder='Enter your email' {...register('email', { required: 'Email is required.', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email.' } })} className='w-full border-b border-gray-300 outline-none py-2 text-sm' /><br />
            {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label className='text-gray-500 text-sm'>Password<span className='text-red-500 font-bold'>*</span>: </label>
            <input type="password" placeholder='Enter your password here' {...register('password', { required: 'Password is required.' })} className='w-full border-b border-gray-300 outline-none py-2 text-sm' /><br />
            {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
          </div>

          {/* Button */}
          <button type='submit' className='w-full text-white rounded-xl py-3 bg-[#f58a8a] font-semibold'>Login.</button>

          <p className='text-center text-xs text-gray-500 mt-4'>Don't have an account?<span className='text-[#f26d6d] font-semibold cursor-pointer' onClick={() => setShowSignUp(true)}>Sign up</span></p>
        </form>
        )}
      </div>
    </div>
  )
}