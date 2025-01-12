import { configureStore, createSlice } from "@reduxjs/toolkit"
import { constants } from "perf_hooks"

const intialState = {
    login:null
}
const loginslice=createSlice({
    name:loginslice,
    initialState:intialState,
    reducers:{
        dologin(state){
           state.login=true

        }
    }
})

const store=configureStore({
    reducer:{
        loginslicy:loginslice.reducer
    }
})
export default store
export const loginaction=loginslice.actions
