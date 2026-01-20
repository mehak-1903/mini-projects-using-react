import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='min-h-screen w-full bg-[#f58a8a] flex items-center justify-center p-4 sm:p-6'>

      {/* Card */}
      <div className='w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-[#f58a8a]'>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white px-6 py-8'>
              <h1 className='text-3xl font-bold text-gray-800 mb-2'>Sign up.</h1>

              <div className='w-12 h-1 bg-pink-500 rounded-full ml-2 mb-6'></div>

              {/* Email */}
              <div className='mb-4'>
                <label className='text-sm text-gray-500'>First Name<span className='text-red-500 font-bold'>*</span>: </label>
                <input type="text" placeholder='First Name.' {...register("fname", { required: 'First Name is required.' }) } className='w-full border-b border-gray-300 outline-none py-2 text-sm' /><br />
                {errors.fname && <p className='text-red-500 text-xs mt-1'>{errors.fname.message}</p>}
              </div>

              {/* Password */}
              <div className='mb-4'>
                <label className='text-sm text-gray-500'>Last Name<span className='text-red-500 font-bold'>*</span>:</label>
                <input type="text" placeholder='Last Name.' {...register("lname", { required: 'Last name is required.' })} className='w-full border-b border-gray-300 outline-none py-2 text-sm'/><br />
                {errors.lname && <p className='text-red-500 text-xs mt-1'>{errors.lname.message}</p>}
              </div>

              <div className='mb-4'>
                <label className='text-sm text-gray-500'>Email<span className='text-red-500 font-bold'>*</span>:</label>
                <input type="email" placeholder='Enter email.' {...register("email", { required: 'Email is required.', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email.' } })} className='w-full border-b border-gray-300 outline-none py-2 text-sm'/><br />
                {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
              </div>

              <div className='mb-4'>
                <label className='text-sm text-gray-500'>Password<span className='text-red-500 font-bold'>*</span>:</label>
                <input type="password" placeholder='Enter password here.' {...register("password", { required: 'Password is required.' })} className='w-full border-b border-gray-300 outline-none py-2 text-sm'/><br />
                {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
              </div>
              <button type='submit' className='w-full bg-[#f26d6d] text-white py-3 rounded-xl font-semibold'>Signup.</button>
            </form>
      </div>
    </div>
  )
}


// import React from "react";
// import { useForm } from "react-hook-form";

// export default function SignupForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#f58a8a] flex items-center justify-center p-4 sm:p-6">
      
//       {/* Card */}
//       <div className="w-full max-w-md bg-[#f58a8a] rounded-2xl shadow-2xl overflow-hidden">

//         {/* Top Section */}
//         <div className="relative bg-[#f58a8a] pt-4">
//           {/* wave */}
//           <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-2xl bg-[#f58a8a"></div>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="bg-white px-6 pt-4 pb-6"
//         >
//           <h1 className="text-2xl font-bold text-gray-800 mb-6">
//             Sign up
//           </h1>

//           {/* First Name */}
//           <div className="mb-4">
//             <label className="text-sm text-gray-500">
//               First Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               {...register("fname", { required: "First name is required" })}
//               className="w-full border-b border-gray-300 outline-none py-2 text-sm"
//               placeholder="First name"
//             />
//             {errors.fname && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.fname.message}
//               </p>
//             )}
//           </div>

//           {/* Last Name */}
//           <div className="mb-4">
//             <label className="text-sm text-gray-500">
//               Last Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               {...register("lname", { required: "Last name is required" })}
//               className="w-full border-b border-gray-300 outline-none py-2 text-sm"
//               placeholder="Last name"
//             />
//             {errors.lname && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.lname.message}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="text-sm text-gray-500">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "Invalid email",
//                 },
//               })}
//               className="w-full border-b border-gray-300 outline-none py-2 text-sm"
//               placeholder="Email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label className="text-sm text-gray-500">
//               Password <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               {...register("password", { required: "Password is required" })}
//               className="w-full border-b border-gray-300 outline-none py-2 text-sm"
//               placeholder="Password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#f26d6d] text-white py-3 rounded-xl font-semibold"
//           >
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }