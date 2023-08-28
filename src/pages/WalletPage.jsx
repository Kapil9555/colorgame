import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { context } from '../global/GlobalContext'

const WalletPage = () => {
  
  const {isUserLoggedIn,innerHeight}=useContext(context)
    console.log(isUserLoggedIn);

  return (
    <>
      <Box className='RemoveScroll' sx={{height:`${innerHeight}px`,overflow:"scroll"}}>
          <Typography sx={{color:"white"}}>
            Hello this is home AccountPage
          </Typography>
      </Box>
    </>
  )
}
export default WalletPage