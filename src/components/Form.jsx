import React, { useEffect, useState } from 'react';
import LoginForm from './Loginform';
import RegisterForm from './Resiterform';
import {useContext} from "react"
import {Authcontext} from "./context/Auth-context"
import Loading from "./Loading"
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
   
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);
  const[regInput,setregInput]=useState(null)
   
  const usecontext=useContext(Authcontext)
  const navigate=useNavigate()

  const handleClick = () => {
    setLogin(!login);
  };

  
  const getdata=(email,pass)=>{
     //data is comming in a object format
    setregInput({
      email:email,
      pass:pass
    })
  }

  const getdatafromlogin=(email,pass)=>{
      //data is comming in a object format
      setregInput({
        email:email,
        pass:pass
      })
  
  }



  useEffect(()=>{
    if(regInput){

      let url
      if(login){
         url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
      }else{
      url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    }
    setLoading(true)
    fetch(url,{
      method:"POST",
      body:JSON.stringify({
        email:regInput.email ,
        password:regInput.pass,
        returnSecureToken:true
        }),
        headers:{ 
          "Content-Type":"application/json"
          }
    
    }).then(async (res)=>{
    if(res.ok){
      setLoading(false)
      return res.json();
    
    }else{
      const data = await res.json();
       alert("wrong information")
    
    }
    
    }).then((data)=>{
      setLoading(false)
       
      usecontext.login(data.idToken)
      navigate("/")


    })
    


    }
   
  },[regInput])
  






  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      {
          loading &&<Loading></Loading>
         }
        {
          !loading&&( <div>
            {login ? <LoginForm getdatafromlogin={getdatafromlogin}  /> : <RegisterForm getdata={getdata} />}

        {/* Toggle Button */}
        <div className="mt-6">
          {login ? (
            <p className="text-gray-700">
              Don't have an account?{' '}
              <button
                onClick={handleClick}
                className="text-blue-600 hover:underline"
              >
                Register
              </button>
            </p>
          ) : (
            <p className="text-gray-700">
              Already have an account?
              <button
                onClick={handleClick}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
        </div>
          )

          
        }
         
         
        
        
      </div>
    </div>
  );
};

export default Form;
