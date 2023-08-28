 import { Box, Button,Grid, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import line from '../assets/lineIQ.png'
import profile from '../assets/profileImageDummy.png'
import backgrounKyc from '../assets/halfLeftBGBox.png'
import statBg from '../assets/howItWorksBG.png'
import statCard from '../assets/howItWorkCardBG.png'
import otherGame from '../assets/otherGameBG.png'
import '../../src/GlobalCss.css'
import { context } from '../global/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { USER_TOKEN } from '../constant';

const AccountPage = () => {

const navigate=useNavigate

  const {isUserLoggedIn,innerHeight}=useContext(context)
  console.log(isUserLoggedIn);

  const handleLogOut=()=>{
    localStorage.removeItem(USER_TOKEN);
    // navigate("/logreg")
  }
  
  return (
    <>
             <Box className='RemoveScroll' sx={{height:`${innerHeight}px`,overflow:"scroll"}}>
              <Grid container sx={{mt:"5px"}}>
                <Grid item xs={3} sm={3} md={3} lg={3} sx={{height:"45px"}}>
                  <Box sx={{p:"4px"}}>
                   <Typography color="white" sx={{fontSize:"1.5rem",display:"flex",alignItems:"center",fontWeight:"bold"}}><ArrowBackIosIcon sx={{fontSize:"1.6rem"}}/> Profile</Typography>
                  </Box>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                   <Box sx={{display:"flex",height:"100%",justifyContent:"right",alignItems:"center"}}>
                    <Box sx={{background:'linear-gradient(#193190, #193190, #234DBD, #707CAD)',display:"flex",alignItems:"center",borderRadius:"12px",padding:"0px 4px 0px 4px"}}>
                       <Typography sx={{color:"white",display:"flex",alignItems:"center",mr:"7px",fontSize:".8rem"}}><WalletIcon sx={{color:"white"}}/>IQ:10003432.00</Typography>
                       
                        <img src={line} />
                       
                       <Typography sx={{fontSize:"23px",fontWeight:"600",color:"white",ml:"7px"}}>
                        +
                       </Typography>
                    </Box>
                    <Box>
                       <IconButton sx={{color:"white"}}>
                         <SettingsIcon/>
                       </IconButton>
                    </Box>
                   </Box>
                </Grid>
              </Grid>   

                <Grid item xs={12} sx={{mt:"20px"}}>
                  <Grid container >
                    <Grid item xs={12} > 
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Box>
                             <img src={profile} alt='user' height={"100px"} width={"100px"} />
                            
                            </Box>
                        </Box>
                            <Box sx={{m:"3px"}}>
                              <Typography align='center' sx={{color:"white",fontSize:"25px",fontWeight:""}}>
                                KAPIL
                              </Typography>
                            </Box>
                            <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Box sx={{border:"0.5px solid #bdbdbd",width:"80%"}}>
                            </Box>
                            </Box>
                            <Grid container sx={{justifyContent:"center",mt:"10px"}}>
                              <Grid item xs={8} sx={{backgroundImage:`url(${backgrounKyc})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",width:"70%",p:"15px 0px"}}>
                                  <Typography align='center' sx={{color:"white",fontSize:"25px",fontWeight:"600"}}>
                                    Complete KYC
                                  </Typography>
                              </Grid>
                            </Grid>  
                    </Grid>
                  </Grid>
                </Grid>  

                <Grid container sx={{justifyContent:"center"}}>
                  <Grid item xs={11}  sx={{mt:"20px",backgroundImage:`url(${statBg})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",p:"10px",height:"fit-content"}}>
                  
                    <Grid container sx={{justifyContent:"space-evenly"}} >
                      <Grid item xs={12} sx={{mt:"15px"}}> 
                         <Typography align='center' sx={{color:"white",fontSize:"25px",fontWeight:"600"}}>Statistics</Typography>
                      </Grid>
                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                                Total Earnings
                              </Typography>
                              <Typography sx={{color:"white"}}>
                                IQ 30000
                              </Typography>
                      </Grid>

                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                                Matches Played
                              </Typography>
                              <Typography sx={{color:"white"}}>
                               25
                              </Typography>
                      </Grid>

                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px",mt:"20px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                                Total Earnings
                              </Typography>
                              <Typography sx={{color:"white"}}>
                                IQ 30000
                              </Typography>
                      </Grid>

                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px",mt:"20px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                              Matches Played
                              </Typography>
                              <Typography sx={{color:"white"}}>
                                25
                              </Typography>
                      </Grid>
                     
                    </Grid>
                   
                  </Grid>
                </Grid>

                <Grid container sx={{justifyContent:"center",mt:"15px",pb:"20px"}}>
                  <Grid item xs={11} sx={{backgroundImage:`url(${otherGame})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",height:"180px"}}>
                     <Grid container>
                      <Grid item xs={12} sx={{p:"10px ",display:"flex",justifyContent:"space-between",backgroundImage:`url(${backgrounKyc})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",}}>
                         
                         <Box>

                         <Typography sx={{color:"white"}}>
                          Refer And Earn
                         </Typography>
                         </Box>
                         <Box sx={{bgcolor:"#536dfe",width:"50px",p:"3px 10px",borderRadius:"20px"}}>
                         <Typography align='center' sx={{color:"white"}}>IQ 0</Typography>
                         </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={{fontSize:"0.8rem",color:"white",p:"10px"}}>
                          You have not invited anyone yet !
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:"center",mt:"15px"}}>
                          <Button variant='contained' sx={{bgcolor:"#42a5f5",fontSize:"11px","&:hover":{bgcolor:"#42a5f5"}}}>
                            Invite Friends
                          </Button>
                        </Box>
                      </Grid>
                     </Grid>
                  </Grid>
                </Grid>
                <Grid container sx={{justifyContent:"center",mt:"15px",height:"90px",mb:"60px"}}>
                  <Grid item xs={11}>
                    <Button sx={{color:"white",bgcolor:"#ef5350",fontSize:"15px","&:hover":{bgcolor:"#ef5350"}}} fullWidth onClick={handleLogOut}>
                        Log Out Account
                    </Button>
                  </Grid>
                </Grid>
                 </Box>
              
                
         
    </>
  )
}

export default AccountPage