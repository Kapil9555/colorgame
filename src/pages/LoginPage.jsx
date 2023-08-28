import { Box, Button, Grid, IconButton, InputAdornment, InputBase, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import roundGif from '../assets/1UhP.gif';
import opacityimage from '../assets/walletBG.png';
import MailLockIcon from '@mui/icons-material/MailLock';
import PasswordIcon from '@mui/icons-material/Password';
import '../../src/GlobalCss.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { context } from '../global/GlobalContext';
import axios from 'axios';
import { BASE_URL, USER_TOKEN, VERIFY_API_STARTLOADING, VERIFY_API_STOPLOADING } from '../constant';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate=useNavigate()
    const {isVerifyApiLoading,dispatch}=useContext(context)

    const [showPassword, setShowPassword] = useState(false);
    const [loginInput,setLoginInput]=useState({
          email:"",
          password:""
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();

    };

    const handleLoginLoad=(e)=>{
        const {name,value}=e.target
        setLoginInput({...loginInput,[name]:value})
    }

    const handleUserVerify=()=>{
        
        try {
            dispatch({
                type:VERIFY_API_STARTLOADING
            });
            console.log(loginInput);
            axios.post(`${BASE_URL}/users/verify`,{
                email:loginInput.email,
                password:loginInput.password
            })
            .then((async resp=>{
                console.log(resp);
                dispatch({
                    type:VERIFY_API_STOPLOADING
                });
                if(resp.data.message=="Log in Successfull"){
                    console.log('Login Successfull')
                    console.log('Login Successfull')
                    await localStorage.setItem(USER_TOKEN,resp.data.token)
                    navigate('/')
                };
                if(resp.data.message=="InValid Password"){
                    alert(resp.data.message)
                };
                if(resp.data.message=="This E-mail is not Register with Us"){
                    alert(resp.data.message)
                }
                
            }))
            .catch((err)=>{
                console.log(err);
                dispatch({
                    type:VERIFY_API_STOPLOADING
                })
            })
        }
        catch (err) {
            dispatch({
                type:VERIFY_API_STOPLOADING
            })
        }
    }

    

    return (
       
           <>
                    <Box className='RemoveScroll' sx={{overflowY:"scroll"}}>
                    <Grid item xs={12} sx={{height:"100%"}}>
                        <Box sx={{ height: "200px", display: "flex", justifyContent: "center",bgcolor:"black"}}>
                            <img src={roundGif} height="100%" alt='round' />

                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center",mt:"10px" }}>
                            <Box sx={{ p: "7px 25px 7px 25px", backgroundImage: `url(${opacityimage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                                <Typography align='center' sx={{ fontWeight: "700", fontSize: "20px", color: "white" }}>Log In Account</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ p: "10px" }}>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "18px" }}>E-mail</Typography>

                            <Box sx={{ bgcolor: "#212121", opacity: "0.9", display: "flex", alignItems: "center", p: "8px 0px 8px 15px", borderRadius: "8px" }}>
                                <MailLockIcon sx={{ color: "white", fontSize: "30px", mr: "15px" }} />
                                <InputBase placeholder='Register Email' name='email' value={loginInput.email} sx={{ position: "relative", border: "none", outline: "none", color: "white" }} fullWidth onChange={handleLoginLoad}/>
                            </Box>
                        </Box>
                        <Box sx={{ mt: "20px" }}>
                            <Typography sx={{ color: "white", fontSize: "18px" }}>Password</Typography>

                            <Box sx={{ bgcolor: "#212121", opacity: "0.9", display: "flex", alignItems: "center", p: "8px 0px 8px 15px", borderRadius: "8px" }}>
                                <PasswordIcon sx={{ color: "white", fontSize: "30px", mr: "15px" }} />
                                <InputBase placeholder='Register Email' name='password' value={loginInput.password} sx={{ pr:"10px",position: "relative", border: "none", outline: "none", color: "white" }}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff sx={{color:"white"}}/> : <Visibility sx={{color:"white"}}/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    fullWidth
                                    inputProps={{ shrink: false }}
                                    onChange={handleLoginLoad}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
                          {
                            ! isVerifyApiLoading ? <Button variant='contained' sx={{ bgcolor: "#00e676", fontSize: "19px", borderRadius: "8px", p: "10px 20px 10px 20px", fontWeight: "600","&:hover":{bgcolor:"#00e676"} }} onClick={handleUserVerify}>
                                sign in
                            </Button>
                            :
                            <Button variant='contained' sx={{  bgcolor:"grey",fontSize: "19px", borderRadius: "8px", p: "10px 20px 10px 20px", fontWeight: "600","&:hover":{bgcolor:"grey"}}} >
                               Please wait....
                            </Button>
                          }
                           
                        </Box>

                    </Grid>
                    </Box>
             </>
    )
}

export default LoginPage