import { Box, Drawer, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

const DrawerMui = ({open,setOpen,bgColor}) => {
  
  return (
    
       <Drawer
      anchor={'bottom'}
      open={open}
      onClose={()=>{setOpen(false)}}
      PaperProps={{
           sx: { width: { lg: '33%', md: '50%', sm: '83.3%', xs: '100%' }, margin: 'auto' }
          }}
    >
    {drawerData(bgColor)}
  </Drawer>
   
    
  
  )
}
// console.log(bgColor)

export default DrawerMui


const drawerData=(bgColor)=>{
  return(
   
    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'black' ,}}>

    <Grid lg={12} md={12} sm={12} xs={12} sx={{ width: '100%', }}>
      {/* section one  */}
      <Grid Container sx={{ background:bgColor, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '15px', borderRadius: '12px 12px 0px 0px' }}>
        <Grid item xs={12} sx={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '19px', fontWeight: '700' }}>Lucky Digits 2 Min</Typography>
        </Grid>
        <Grid item xs={12}  >
          <Box sx={{ bgcolor: '#fafafa', width: '300px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px' }}>

            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '900' }}>Selected Green</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* section two  */}
      <Grid container sx={{ bgcolor: '#fafafa' }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
          <Box sx={{ width: '50%', }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '900' }}>Balance</Typography>

          </Box>
          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '23px', height: '30px', bgcolor: '#bdbdbd', mr: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900' }}>1</Typography>

            </Box>
            <Box sx={{ width: '40px', height: '30px', bgcolor: '#bdbdbd', mr: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900' }}>10</Typography>
            </Box>
            <Box sx={{ width: '50px', height: '30px', bgcolor: '#bdbdbd', mr: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900' }}>100</Typography>
            </Box>
            <Box sx={{ width: '60px', height: '30px', bgcolor: '#bdbdbd', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900' }}>1000</Typography>
            </Box>

          </Box>

        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
          <Box sx={{ width: '50%', }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '900' }}>Quantity</Typography>

          </Box>
          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '25px', height: '30px', background: bgColor, mr: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center',padding:'2px' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900' ,color:'white'}}>-</Typography>

            </Box>
            <Box sx={{ width: '33px', height: '30px', border: '1px solid #bdbdbd', borderRadius: '12px 3px 12px 3px', mr: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900' }}>1</Typography>
            </Box>
            <Box sx={{ width: '25px', height: '30px', background:bgColor, mr: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center',padding:'2px'  }}>
              <Typography sx={{ fontSize: '14px', fontWeight: '900',color:'white' }}>+</Typography>
            </Box>


          </Box>

        </Grid>
        <Grid item xs={12} sx={{display:'flex',}}>
          <Box sx={{ width: '40%', bgcolor:'#212121',padding:'10px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography sx={{fontSize:'18px', fontWeight:'700',color:'#616161'}}>Cancel</Typography>

          </Box>
          <Box sx={{ width: '60%', padding:'10px', background:bgColor,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{fontSize:'18px', fontWeight:'700', color:'white'}}>Total Amount ₹1</Typography>
          </Box>

        </Grid>

      </Grid>


    </Grid>
  </Grid>



  )
}