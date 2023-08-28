import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'
import { GET_LOCAL_TOKEN, USER_TOKEN } from '../constant'




export const context=createContext()

const initialState={
 name:"kapil",
 age:3,
 logInDashBoardScreen:0,
 ShowPage:"HOME",
 isRegisterApiLoading:false,
 isVerifyApiLoading:false,
 isUserLoggedIn:(localStorage.getItem(USER_TOKEN)!=null && localStorage.getItem(USER_TOKEN).length>5)?true:false,
 innerHeight:window.innerHeight
}

const GlobalContext = ({children}) => {
   const[state, dispatch]= useReducer(reducer ,initialState);
  
  useEffect(() => {
     dispatch({
        type:GET_LOCAL_TOKEN,
        payload:(localStorage.getItem(USER_TOKEN)!=null && localStorage.getItem(USER_TOKEN).length>5)?true:false
      })
  }, [localStorage.getItem(USER_TOKEN)]);
    

  return (
    <context.Provider value={{...state, dispatch}}>
        {children}
    </context.Provider>
  )
}

export default GlobalContext