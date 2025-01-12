import React,{useContext} from "react";
import { Authcontext } from "./context/Auth-context";
import { Navigate, useNavigate } from "react-router-dom";
const Header = () => {
  const usecontext=useContext(Authcontext)
  const navigate=useNavigate()
  const loggedin=usecontext.isloged
   
  const clickhandler=()=>{
    usecontext.logout()
    navigate('/')
  }
  const profilehandler=()=>{
    navigate("/profile")

  }
  const loginhandler=()=>{
    navigate("/auth")
  }
    return (
      <header className="bg-blue-600 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* App Name */}
          <h1 className="text-2xl font-bold text-white">React Auth</h1>
  
          {/* Buttons */}
          <div className="flex space-x-4">
            <button onClick={loginhandler} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Login
            </button>
            {
              loggedin &&<button onClick={profilehandler} className="bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-gray-100 transition">
              Profile
            </button>

            }
            {
              loggedin&&<button onClick={clickhandler} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Logout
            </button>
            }
            
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  