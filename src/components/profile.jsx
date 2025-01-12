import { useContext, useRef } from "react";
import { Authcontext } from "./context/Auth-context";

const Profile = () => {
  const context=useContext(Authcontext)
  const pass=useRef()


  const submithandler=(e)=>{
    e.preventDefault()
    const entredavlue=pass.current.value
    const pSS=async()=>{
    const ap=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDN2gqb4j1CXVGul5pufb47eRUfifBnc40',{
        method:'POST',
        body:JSON.stringify({
          idToken:context.token,
          password:entredavlue,
          returnSecureToken:false

        }),
        headers:{
          'Content-Type':'application/json',
        }
})
const data=await ap.json()
console.log(data)
pass.current.value=""
alert("your password has been chnaged sucessfully")
    }
pSS()
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form  onSubmit={submithandler}  className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Change Password</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
            New Password:
          </label>
          <input
            type="password"
            id="username"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your new password"
            ref={pass}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Profile;