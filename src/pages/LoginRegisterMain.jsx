import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import mainBg from '../assets/mainBG.png'
import LoginRegisterHeader from '../components/LoginRegisterHeader'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import { context } from '../global/GlobalContext'



const LoginRegisterMain = () => {
    const {logInDashBoardScreen,innerHeight}=useContext(context)
    console.log(logInDashBoardScreen)
    
    
        return (
            <>
              <Container disableGutters maxWidth={'xl'}>
                <Grid container sx={{ justifyContent: "center"}}>
                    <Grid item xs={12} sm={8} md={5} lg={4}  sx={{ height:`${innerHeight}px`,backgroundImage: `url(${mainBg})`, backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
                     <LoginRegisterHeader />
                        {logInDashBoardScreen===0? <LoginPage/> : <RegisterPage/>}      
                    </Grid>
                    <Grid></Grid>
                   
                </Grid>
                </Container>
            </>
        )
    }
  
  


export default LoginRegisterMain