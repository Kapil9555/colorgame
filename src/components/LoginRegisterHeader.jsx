import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { context } from '../global/GlobalContext'
import { LOGIN_TAB, REGISTER_TAB } from '../constant'

const LoginRegisterHeader = () => {

    const { logInDashBoardScreen,dispatch } = useContext(context)
    // console.log(logInDashBoardScreen)

    const active = { borderRadius: "25px", width: "50%", display: "flex", justifyContent: "center", alignItems: "center", p: "13px", bgcolor: "#00e676", cursor: "pointer" }
    const inActive = { width: "50%", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }
    return (
        <>
            <Grid item xs={12} sx={{position:"sticky",top:"0px"}}>
                <Box sx={{ bgcolor: "white", borderRadius: "25px", display: "flex" }}>
                    <Box sx={logInDashBoardScreen === 0 ? active : inActive} onClick={()=>{dispatch({
                        type:LOGIN_TAB
                    })}}>
                        <Typography align='center' sx={{ color: "black" }}>
                            Log In
                        </Typography>
                    </Box>
                    <Box sx={logInDashBoardScreen === 1 ? active : inActive} onClick={()=>{dispatch({
                        type:REGISTER_TAB
                    })}}>
                        <Typography align='center'>
                            Register
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}
export default LoginRegisterHeader