import React, { useContext, useEffect, useState } from 'react'
import mainBg from '../assets/mainBG.png'
import { Container, Grid, Typography } from '@mui/material'
import AccountPage from './AccountPage'
import { context } from '../global/GlobalContext'
import HomePage from './HomePage'
import ReferralPage from './ReferralPage'
import PromotionPage from './PromotionPage'
import WalletPage from './WalletPage'
import { USER_TOKEN } from '../constant'
import BottomNavbarr from '../components/BottomNavbarr'
import LoginRegisterMain from './LoginRegisterMain'
import TwoMinuteGame from './TwoMinuteGame'
import DrawerMui from '../components/DrawerMui'

const MainBody = () => {
    
    const {ShowPage,isUserLoggedIn}=useContext(context)
    console.log(isUserLoggedIn);
    const [open, setOpen]=useState(false);


    const Display=(ShowPage)=>{
           if(ShowPage=="HOME"){
            return(
                <HomePage setOpen={setOpen}/>
            )
           }
           if(ShowPage=="REFERRAL"){
            return(
                <ReferralPage/>
            )
           }
           if(ShowPage=="PROMOTION"){
            return(
                <PromotionPage/>
            )
           }
           if(ShowPage=="WALLET"){
            return(
                <WalletPage/>
            )
           }
           if(ShowPage=="ACCOUNT"){
            return(
                <AccountPage/>
            )
           }
          else{
            return(
                <Typography>
                    Hello this is Error
                </Typography>
            )
          }
    }


    if(isUserLoggedIn ==true){
        
            return (
                <>
                    <Container disableGutters maxWidth={'xl'}>
                        <Grid container sx={{ justifyContent: "center" }}>
                            <Grid item xs={12} sm={8} md={5} lg={4} sx={{ position: "relative", overflow: "hidden", backgroundImage: `url(${mainBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
                                  {
                                    Display(ShowPage)
                                  }
                                  {/* <TwoMinuteGame/> */}
                                  <BottomNavbarr open={open} setOpen={setOpen}/>
                            </Grid>
                          
                        </Grid>
                      <DrawerMui/>
                    </Container>
                    
                </>
            )
        
    }
    else{
    return(
        <LoginRegisterMain/>
    )
    }
   
}

export default MainBody