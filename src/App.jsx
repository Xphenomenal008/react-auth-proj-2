import { Navigate, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/header";
import Profile from "./components/profile";

import Home from "./components/Home";
import Authcontextprovider, { Authcontext } from "./components/context/Auth-context";
import { useContext } from "react";
import NotFound from "./components/Notfound";

  
function App() {
  const context=useContext(Authcontext)
   const loggedin=context.isloged
    
  return (
    <>
     
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
       
     <Route path="/auth" element={<Form/>}></Route>
       
      {
        loggedin && <Route path="/profile" element={<Profile></Profile>}></Route>
      }
       <Route path="*" element={<NotFound></NotFound>}></Route>
      
    </Routes>
     
    </>
  );
}

export default App;
