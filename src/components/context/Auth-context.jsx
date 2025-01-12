import { createContext, useState } from "react";

export const Authcontext=createContext({
    token:null,
    isloged:false,
    login:(token)=>{},
    logout:()=>{}
})

const Authcontextprovider=(props)=>{
    const[token,settoken]=useState(null)
    const islogedin=!!token //if empty it will return false if not then true
    const login=(token)=>{
        settoken(token)

    }
    const logout=()=>{
        settoken(null)
    }

    const values={
        token:token,
        isloged:islogedin,
        login:login,
        logout:logout
    }
    return <Authcontext.Provider value={values}>{props.children}</Authcontext.Provider>


}

export default Authcontextprovider