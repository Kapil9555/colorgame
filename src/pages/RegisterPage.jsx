import { Box, Button, Grid, IconButton, InputAdornment, InputBase, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import roundGif from '../assets/1UhP.gif'
import opacityimage from '../assets/walletBG.png'
import MailLockIcon from '@mui/icons-material/MailLock';
import PasswordIcon from '@mui/icons-material/Password';
import '../master.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import '../../src/GlobalCss.css'
import { context } from '../global/GlobalContext';
import axios from 'axios';
import { BASE_URL, LOGIN_TAB, REGISTER_API_STOPLOADING } from '../constant';


const RegisterPage = () => {

    const { isRegisterApiLoading, dispatch } = useContext(context)
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [registerInput, setRegisterInput] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",

    })

    const handleRegisterLoad = (e) => {
        const { name, value } = e.target
        setRegisterInput({ ...registerInput, [name]: value })
    }

    const handleRegisterDataSUbmit = () => {
        try {
        
            dispatch({
                type: "REGISTER_API_STARTLOADING"
            })
            axios.post(`${BASE_URL}/users/register`,{
                fullName:registerInput.name,
                email:registerInput.email,
                mobile:registerInput.mobile,
                password:registerInput.password
    
            }).then((resp)=>{
                console.log(resp);
                dispatch({
                    type:REGISTER_API_STOPLOADING
                });
                if(resp.data.message=="Registraton Success"){
                    dispatch({
                        type:LOGIN_TAB
                    })
                };
                if(resp.data.message=="Already This Email is Register With Us"){
                   alert(resp.data.message)
                };
                if(resp.data.message=="Failed To Register"){
                    alert(resp.data.message)
                 }
              
            })
            .catch((err)=>{
                console.log(err);
             dispatch({
                type: "REGISTER_API_STOPLOADING"
               })
             })

        } 
        catch (error) {
            dispatch({
                type: "REGISTER_API_STOPLOADING"
            })
        }
      
    }



    return (
        <>
            <Box className='RemoveScroll' sx={{ overflowY: "scroll", height: "85vh" }}>
                <Box sx={{ height: "200px", display: "flex", justifyContent: "center", bgcolor: "black" }}>
                    <img src={roundGif} height="100%" alt='round' />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                    <Box sx={{ p: "7px 25px 7px 25px", backgroundImage: `url(${opacityimage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <Typography align='center' sx={{ fontWeight: "700", fontSize: "20px", color: "white" }}>Register Account</Typography>
                    </Box>
                </Box>

                <Box sx={{ p: "10px" }}>
                    <Box sx={{ mb: "15px" }}>
                        <Typography sx={{ color: "white", fontSize: "18px" }}>Full Name</Typography>

                        <Box sx={{ bgcolor: "#212121", opacity: "0.9", display: "flex", alignItems: "center", p: "8px 0px 8px 12px", borderRadius: "8px" }}>
                            <PersonIcon sx={{ color: "white", fontSize: "30px", mr: "15px" }} />
                            <InputBase placeholder='Full Name' name='name' value={registerInput.name} sx={{ position: "relative", border: "none", outline: "none", color: "white" }} fullWidth onChange={handleRegisterLoad} />
                        </Box>
                    </Box>
                    <Box sx={{ mb: "15px" }}>
                        <Typography sx={{ color: "white", fontSize: "18px" }}>E-mail</Typography>

                        <Box sx={{ bgcolor: "#212121", opacity: "0.9", display: "flex", alignItems: "center", p: "8px 0px 8px 12px", borderRadius: "8px" }}>
                            <MailLockIcon sx={{ color: "white", fontSize: "30px", mr: "15px" }} />
                            <InputBase placeholder='Register Email' value={registerInput.email} name='email' sx={{ position: "relative", border: "none", outline: "none", color: "white" }} fullWidth onChange={handleRegisterLoad} />
                        </Box>
                    </Box>
                    <Box sx={{ mb: "15px" }}>
                        <Typography sx={{ color: "white", fontSize: "18px" }}>Mobile</Typography>

                        <Box sx={{ bgcolor: "#212121", opacity: "0.9", display: "flex", alignItems: "center", p: "8px 0px 8px 12px", borderRadius: "8px" }}>
                            <TabletAndroidIcon sx={{ color: "white", fontSize: "30px", mr: "15px" }} />
                            <InputBase placeholder='Mobile Number' name='mobile' value={registerInput.mobile} sx={{ position: "relative", border: "none", outline: "none", color: "white" }} fullWidth onChange={handleRegisterLoad} />
                        </Box>
                    </Box>
                    <Box sx={{ mb: "15px" }}>
                        <Typography sx={{ color: "white", fontSize: "18px" }}>Password</Typography>

                        <Box sx={{ bgcolor: "#212121", opacity: "0.9", display: "flex", alignItems: "center", p: "8px 0px 8px 12px", borderRadius: "8px" }}>
                            <PasswordIcon sx={{ color: "white", fontSize: "30px", mr: "15px" }} />
                            <InputBase placeholder='password' name='password' value={registerInput.password} sx={{ pr: "10px", position: "relative", border: "none", outline: "none", color: "white" }}
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
                                            {showPassword ? <VisibilityOff sx={{ color: "white" }} /> : <Visibility sx={{ color: "white" }} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                fullWidth
                                inputProps={{ shrink: false }}
                                onChange={handleRegisterLoad}
                            />
                        </Box>
                    </Box>


                    <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
                        {
                            isRegisterApiLoading ? <Button variant='contained' sx={{ bgcolor: "#D3D3D3", fontSize: "19px", color: "white", borderRadius: "8px", p: "10px 20px 10px 20px", fontWeight: "600" ,"&:hover": { bgcolor: "#D3D3D3" }  }}>
                                Please wait....
                            </Button>
                                : <Button variant='contained' sx={{ bgcolor: "#00e676", fontSize: "19px", borderRadius: "8px", p: "10px 20px 10px 20px", fontWeight: "600", "&:hover": { bgcolor: "#00e676" } }} onClick={handleRegisterDataSUbmit}>
                                    Register
                                </Button>

                        }
                    </Box>


                </Box>
            </Box>
        </>
    )
}

export default RegisterPage