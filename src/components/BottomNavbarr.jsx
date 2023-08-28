import { Box,  Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonIcon from '@mui/icons-material/Person';
import promoicon from '../assets/promoIcon3.png';
import { context } from '../global/GlobalContext';




const BottomNavbarr = () => {
    

    const {ShowPage,dispatch}=useContext(context)
 
    return (
        <>
          
            <Grid container sx={{justifyContent:'center', position:'absolute',bottom:"0px"}}>
            <Grid item xs={12}  sx={{background: 'linear-gradient(180deg, rgba(11,11,11,1) 39%, rgba(201,6,6,1) 76%)', padding:'5px'}}>
                <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' ,color:ShowPage === 'HOME'?'yellow':'white'}}  onClick={()=>{dispatch({type:"HOME"})}}>
                        <HomeIcon fontSize='small' />
                        <Typography sx={{fontSize:'14px', }}>Home</Typography>
                    </Box>
                     <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:ShowPage === 'REFERRAL'?'yellow':'white'}}  onClick={()=>{dispatch({type:"REFERRAL"})}}>
                        <LocalOfferIcon fontSize='small' />
                        <Typography sx={{fontSize:'14px',}}>Referral</Typography>
                    </Box>
                     <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:ShowPage === 'PROMOTION'?'yellow':'white' }}  onClick={()=>{dispatch({type:"PROMOTION"})}}>
                     <img src={promoicon} alt='promologo' style={{marginTop:'-55px',}}/>
                        <Typography sx={{fontSize:'14px'}} value='promotion'>promotion</Typography>
                    </Box>
                     <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:ShowPage === 'WALLET'?'yellow':'white' }}  onClick={()=>{dispatch({type:"WALLET"})}}>
                        <WalletIcon fontSize='small'/>
                        <Typography sx={{fontSize:'14px'}} >Wallet</Typography>
                    </Box>
                     <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:ShowPage === 'ACCOUNT'?'yellow':'white' }}  onClick={()=>{dispatch({type:"ACCOUNT"})}}>
                        <PersonIcon fontSize='small' />
                        <Typography sx={{fontSize:'14px'}} >Account</Typography>
                    </Box>
                </Box>

            </Grid>
            </Grid>
        </>
        
    )
}

export default BottomNavbarr