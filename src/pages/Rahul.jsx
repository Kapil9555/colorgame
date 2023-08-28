import React, { useContext, } from 'react'
import Avatar from '@mui/material/Avatar';
import { Box, Divider, Grid, Typography } from '@mui/material'
import mainbg from '../assets/mainBG.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import lineiq from '../assets/lineIQ.png';
import profileimg from '../assets/profileImageDummy.png';
import halfbgimg from '../assets/halfLeftBGBox.png';
import howitwork from '../assets/howItWorksBG.png';
import howitworkcard from '../assets/howItWorkCardBG.png';
import othergame from '../assets/otherGameBG.png';

const Rahul = () => {
    return (
        <>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', bgcolor: 'black' }}>
                <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{  backgroundImage: `url(${mainbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', top: '0px', }}>
                    <Grid conatiner>
                        <Grid item xs={12} sx={{ mt: '3px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                                <ArrowBackIosNewIcon sx={{ fontSize: '20px' }} />
                                <Typography sx={{ fontSize: '18px', ml: '4px', fontWeight: '600' }}>Profile</Typography>

                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Box sx={{ mr: '4px', borderRadius: '5px', background: 'linear-gradient(#193190, #193190, #234DBD, #707CAD)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <WalletIcon sx={{ fontSize: '21px', color: 'white' }} />
                                    <Typography sx={{ fontSize: '12px', color: 'white', mt: '2px', mr: '3px', fontWeight: '600' }}>IQ: 593536.00</Typography>
                                    <img src={lineiq} alt='line' height={'30px'} style={{ bgcolor: 'white' }} />
                                    <Typography sx={{ color: 'white', ml: '5px', mr: '4px', fontWeight: '600' }}>+</Typography>
                                </Box>

                                <SettingsIcon sx={{ color: 'white' }} />



                            </Box>

                        </Grid>
                    </Grid>
                    {/* profile section */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', flexDirection: 'column' }}>

                            <Avatar alt="Remy Sharp" src={profileimg} sx={{ width: '93px', height: '93px' }} />
                            <Typography sx={{ color: 'white', fontWeight: '900', mt: '4px', fontSize: '17px' }}>RAHUL</Typography>
                            <Divider sx={{ width: '75%', border: '1px solid grey', mt: '5px' }}></Divider>
                            <Box sx={{ width: '255px', height: '70px', ml: '13px', mt: '5px', backgroundImage: `url(${halfbgimg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '900' }}>Complete KYC</Typography>


                            </Box>


                        </Grid>

                        {/* statistics section */}
                        <Grid item xs={11} sx={{ mt: '15px' }}>
                            <Grid container sx={{ backgroundImage: `url(${howitwork})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,pt:'20px', pb:'18px'}}>
                                    <Typography sx={{ fontSize: '17px', fontWeight: '900', color: 'white' }}>Statistics</Typography>

                                </Grid>
                                <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',padding:'0px 7px 0px 7px'}}>
                                    <Grid item xs={5.5} sx={{  backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat',height:'92px', paddingLeft:'5px'}}>
                                        <Typography sx={{ color: '13px', color: 'grey', mt:'7px', fontSize:'14px' }}>Total Earnings</Typography>
                                        <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>IQ 30000</Typography>

                                    </Grid>
                                    <Grid item xs={5.5} sx={{ backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat',height:'92px', paddingLeft:'5px' }}>
                                        <Typography sx={{ color: '13px', color: 'grey' ,mt:'7px', fontSize:'14px' }}>Matches Played</Typography>
                                        <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>25</Typography>

                                    </Grid>
                                </Grid>

                                <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center',padding:'0px 7px 0px 7px'}}>
                                    <Grid item xs={5.5} sx={{  backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat',height:'92px', paddingLeft:'5px'}}>
                                        <Typography sx={{ color: '13px', color: 'grey', mt:'7px' , fontSize:'14px'}}>Total Earnings</Typography>
                                        <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>IQ 30000</Typography>

                                    </Grid>
                                    <Grid item xs={5.5} sx={{ backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat',height:'92px', paddingLeft:'5px' }}>
                                        <Typography sx={{ color: '13px', color: 'grey' ,mt:'7px' , fontSize:'14px'}}>Matches Played</Typography>
                                        <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>25</Typography>

                                    </Grid>
                                </Grid>

                            </Grid>

                            {/* Refer and earn section  */}
                            <Grid container sx={{backgroundImage: `url(${othergame})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',mt:'20px', height:'150px', }}>
                                <Grid item xs={12} sx={{display:'flex', backgroundImage: `url(${halfbgimg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', justifyContent:'space-between', alignItems:'center'}}>
                                    <Box>
                                        <Typography sx={{color:'white'}}>Refer And Earn</Typography>
                                    </Box>

                                    <Box sx={{bgcolor:'blue', color:'white', padding:'4px 15px'}}>
                                        <Typography>IQ 0</Typography>
                                    </Box>

                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>You have not invited anyone yet !</Typography>
                                </Grid>
                                <Grid item></Grid>
                            </Grid>

                        </Grid>


                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default Rahul