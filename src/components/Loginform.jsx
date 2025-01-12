import React, { useRef } from "react";
import { use } from "react";
const LoginForm = (prop) => {
const emailref=useRef();
const passref=useRef()

const submithandler=(e)=>{
  e.preventDefault()

  const email=emailref.current.value
  const pass=passref.current.value
  
  prop.getdatafromlogin(email,pass)
  emailref.current.value = "";
  passref.current.value = "";
}
  

    return (
      <div className="flex items-center justify-center  bg-gray-100">
        <form onSubmit={submithandler} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>
  
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              ref={emailref}
              
            />
          </div>
  
          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              ref={passref}
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default LoginForm;
  