import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import game3 from '../assets/game3.jpeg';
import game5 from '../assets/game5.jpeg';
import game1 from '../assets/game1.jpeg';
import game2 from '../assets/game2.jpeg';
import game6 from '../assets/game6.jpeg';
import game7 from '../assets/game7.jpeg';
import game4 from '../assets/game4.jpeg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CircleIcon from '@mui/icons-material/Circle';



const LandingPages = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })
    return (
        <>
        
            <Grid container sx={{ justifyContent: 'center', bgcolor: '#fafafa', }}>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center',padding:'10px 5px ',boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)'}}>
                        <Grid item xs={2} sx={{ display: 'flex', }}>
                            <Typography sx={{ color: '#0d47a1', fontSize: '19px', fontWeight: '800' }}>C</Typography>
                            <Typography sx={{ color: '#2e7d32', fontSize: '19px', fontWeight: '800' }}>o</Typography>
                            <Typography sx={{ color: '#cddc39', fontSize: '19px', fontWeight: '800' }}>l</Typography>
                            <Typography sx={{ color: '#673ab7', fontSize: '19px', fontWeight: '800' }}>o</Typography>
                            <Typography sx={{ color: '#ef6c00', fontSize: '19px', fontWeight: '800' }}>r</Typography>
                            <Typography sx={{ color: '#e91e63', fontSize: '19px', fontWeight: '800' }}>g</Typography>
                            <Typography sx={{ color: '#0d47a1', fontSize: '19px', fontWeight: '800' }}>a</Typography>
                            <Typography sx={{ color: '#d50000', fontSize: '19px', fontWeight: '800' }}>m</Typography>
                            <Typography sx={{ color: '#673ab7', fontSize: '19px', fontWeight: '800' }}>e</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Box sx={{ width: '100%', display:{lg:'flex', md:'flex', sm:'none', xs:'none'}}}>
                                <Box sx={{ width: '20%', color:'#5c6bc0' , display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                 <Typography sx={{fontSize:'17px'}}>Home</Typography>
                                </Box>
                                <Box sx={{ width: '20%', color:'#5c6bc0' ,display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                                <Typography sx={{fontSize:'17px'}}>About</Typography>
                                </Box>
                                <Box sx={{ width: '20%', color:'#5c6bc0' ,display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                                <Typography sx={{fontSize:'17px'}}>Gallery</Typography>
                                </Box>
                                <Box sx={{ width: '20%',color:'#5c6bc0' ,display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                                <Typography sx={{fontSize:'17px'}}>Contact</Typography>
                                </Box>
                                <Box sx={{ width: '20%',color:'#5c6bc0' ,display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                                <Button variant='contained' sx={{bgcolor:'#5c6bc0', color:'white', fontSize:'13px', borderRadius:'10px'}}>Download</Button>
                                </Box>

                            </Box>

                        </Grid>
                        <Grid item xs={1} sx={{  display: 'flex', justifyContent: 'right', alignItems: 'center',  }}>

                            <MenuIcon sx={{ color: 'grey' }} />
                        </Grid>

                    </Grid>


                </Grid>
                {/* one  */}
                <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', background: 'linear-gradient(166deg, rgba(250,250,250,1) 51%, rgba(153,162,218,1) 53%)', p: '20px 5px', }}>
                    <Grid item lg={6} md={6} sm={12} xs={12} data-aos='fade-up' sx={{ mt: '40px' }} >
                        <Typography sx={{ color: '#5c6bc0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '23px' }, fontWeight: '800', textAlign: 'center' }}>Colorgame is One Of The Best colour Predictions in India.</Typography>
                        <Typography sx={{ fontSize: '15px', mt: '5px', textAlign: 'center' }}>Colorgame allows you to earn money by guessing the correct colours. The amount earned can be withdrawn through Paytm.</Typography>
                    </Grid>

                    <Grid item data-aos='fade-up' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: {lg:'50%', md:'50%', sm:'40%', xs:'60%'}, height: '400px', }}>
                            <img src={game3} width={'100%'} height={'100%'} alt='game1' style={{borderRadius:'10px'}}/>
                        </Box>

                    </Grid>


                </Grid>

                {/* two  */}
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,p: '20px 10px',}}>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: '#5c6bc0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>Why Colorgame</Typography>

                    </Grid>
                    <Grid item xs={11.8} sx={{textAlign:'center'}}>
                        <Typography sx={{ fontSize: '15px',  mt: '20px' }}>Colorgame is One Of The Best colour Predictions in India. Colorgame is a casino game. Many people have shared their personal experiences in the Daman game. You can play online by downloading the Colorgame App. Colorgame is a very good colour prediction app on which you can easily earn 20k-30k a month by working properly.</Typography>

                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
                        <Grid item lg={6} md={6} sm={12} xs={12} >

                            <Grid container sx={{ padding: '2px', mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', }}>
                                <Grid item xs={3} data-aos='fade-right' sx={{ textAlign: 'center' }} >
                                    <ThumbUpOffAltIcon sx={{ fontSize: '60px', color: '#5c6bc0' }} />
                                </Grid>
                                <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', mb: '20px' }}>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900' }}>Start Prediction with Only 1 Rs</Typography>
                                    </Box>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '15px', ml: '8px', fontWeight: '900' }}>Fast Withdrawal (Most of the time, money comes to your account within 1 hour)</Typography>
                                    </Box>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900' }}>No Withdrawal Fee (You can withdraw as much as you want in this game without any withdrawal fee)</Typography>
                                    </Box>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900' }}>24/7 Customer Service</Typography>
                                    </Box>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900' }}>Very Good Promotion Mission (Earn More than 4 Lakh for Complete Promotion Task)</Typography>
                                    </Box>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900' }}>Promotion Bonus Upto 5 Levels</Typography>
                                    </Box>

                                    <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                        <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                        <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900' }}>Every two months, new events come in which you can participate and Earn Up to 6 Lakh.</Typography>
                                    </Box>

                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                            <Box sx={{ width: {lg:'50%', md:'50%', sm:'40%', xs:'60%'}, height: '400px', }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='game5' style={{borderRadius:'10px'}}/>
                            </Box>

                        </Grid>
                        {/* <Grid item lg={4} md={4} sm={6} xs={8} data-aos='fade-left' sx={{ mt: '20px',textAlign:'center', display:'flex', justifyContent:'center', alignContent:'center'}}>
                            <Box sx={{ width: '100%:', height: '400px',border:'1px solid red' }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='game5' />

                            </Box>

                        </Grid> */}

                    </Grid>




                </Grid>

                {/* three  */}
                <Grid container sx={{ padding: '10 20px', mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Grid item xs={12} data-aos='fade-up' sx={{ textAlign: 'center', }} >
                        <Typography sx={{ color: '#5c6bc0', fontSize: '23px', fontWeight: '800' }}>Our Games</Typography>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game7} width={'100%'} height={'100%'} alt='register' style={{borderRadius:'10px'}}/>

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-left' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game6} width={'100%'} height={'100%'} alt='register' style={{borderRadius:'10px'}} />

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='register' style={{borderRadius:'10px'}}/>

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-left' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game4} width={'100%'} height={'100%'} alt='register' style={{borderRadius:'10px'}}/>

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game2} width={'100%'} height={'100%'} alt='register' style={{borderRadius:'10px'}} />

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-left' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game1} width={'100%'} height={'100%'} alt='register'  style={{borderRadius:'10px'}}/>

                            </Box>

                        </Grid>

                        <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                            <Box sx={{ width: '100%', height: '400px' }}>
                                <img src={game3} width={'100%'} height={'100%'} alt='register' style={{borderRadius:'10px'}}/>

                            </Box>

                        </Grid>

                    </Grid>



                </Grid>



            </Grid>
        </>
    )
}

export default LandingPages