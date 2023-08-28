export const reducer=(state,action)=>{
      
   switch (action.type) {
      case "LOGIN_TAB":
         return{...state,logInDashBoardScreen:0}
      case "REGISTER_TAB":
      return{...state,logInDashBoardScreen:1}
      case "HOME":
      return{...state,ShowPage:"HOME"}
      case "REFERRAL":
         return{...state,ShowPage:"REFERRAL"}
      case "ACCOUNT":
          return{...state,ShowPage:"ACCOUNT"}
      case "PROMOTION":
         return{...state,ShowPage:"PROMOTION"}
      case "WALLET":
         return{...state,ShowPage:"WALLET"}
      case "REGISTER_API_STARTLOADING":
         return{...state,isRegisterApiLoading:true} 
      case "REGISTER_API_STOPLOADING":
         return{...state,isRegisterApiLoading:false}            
      case "VERIFY_API_STARTLOADING":
         return{...state,isVerifyApiLoading:true}    
      case "VERIFY_API_STOPLOADING":
         return{...state,isVerifyApiLoading:false}
      case "GET_LOCAL_TOKEN":
         return{...state,isUserLoggedIn:action.payload}
      
      default :
         return{state}
   }
}