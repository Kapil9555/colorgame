import CheckIcon from '@mui/icons-material/Check';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, OutlinedInput, Paper, Rating, TextareaAutosize, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useContext, useEffect } from 'react';
import signup from '../assets/signup.jpeg';
import '../master.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TwitterIcon from '@mui/icons-material/Twitter';
import av1 from '../assets/av1.avif';
import av2 from '../assets/av2.avif';
import av3 from '../assets/av3.avif';
import game from '../assets/game.jpg';
import game1 from '../assets/game1.jpeg';
import game2 from '../assets/game2.jpeg';
import game3 from '../assets/game3.jpeg';
import game4 from '../assets/game4.jpeg';
import game5 from '../assets/game5.jpeg';
import game6 from '../assets/game6.jpeg';
import game7 from '../assets/game7.jpeg';
import quote from '../assets/quote.png';
import { context } from '../global/GlobalContext';




import '../master.css';


const LandingPage = () => {
    const { innerHeight } = useContext(context)
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    // 
    return (
        <>
            <Container maxWidth={'xl'} disableGutters >
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6",overflow:"hidden" }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px ', boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)' }}>
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
                                <Box sx={{ width: '100%', display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' } }}>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px' }}>Home</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px' }}>About</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px' }}>Gallery</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px' }}>Contact</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Button variant='contained' sx={{ bgcolor: '#5c6bc0', color: 'white', fontSize: '13px', borderRadius: '10px' }}>Download</Button>
                                    </Box>

                                </Box>

                            </Grid>
                            <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', }}>

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
                            <Box sx={{ width: { lg: '40%', md: '50%', sm: '40%', xs: '60%' }, height: '470px', }}>
                                <img src={game3} width={'100%'} height={'100%'} alt='game1' style={{ borderRadius: '10px' }} />
                            </Box>

                        </Grid>


                    </Grid>

                    {/* two  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px 10px', }}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#5c6bc0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>Why Colorgame</Typography>

                        </Grid>
                        <Grid item xs={11.8} sx={{ textAlign: 'center' }}>

                            <Typography sx={{ color: "#546e7a", mt: "15px" }}>Colorgame is One Of The Best colour Predictions in India. Colorgame is a casino game. Many people have shared their personal experiences in the Daman game. You can play online by downloading the Colorgame App. Colorgame is a very good colour prediction app on which you can easily earn 20k-30k a month by working properly.</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', mt: "25px" }}>
                            <Grid item lg={6} md={6} sm={12} xs={12} >

                                <Grid container sx={{ padding: '2px', mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Grid item xs={3} data-aos='fade-right' sx={{ textAlign: 'center' }} >
                                        <ThumbUpOffAltIcon sx={{ fontSize: '60px', color: '#5c6bc0' }} />
                                    </Grid>
                                    <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', mb: '20px' }}>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>Start Prediction with Only 1 Rs</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '15px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>Fast Withdrawal (Most of the time, money comes to your account within 1 hour)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>No Withdrawal Fee (You can withdraw as much as you want in this game without any withdrawal fee)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>24/7 Customer Service</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>Very Good Promotion Mission (Earn More than 4 Lakh for Complete Promotion Task)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>Promotion Bonus Upto 5 Levels</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#5c6bc0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: '900', color: "#546e7a" }}>Every two months, new events come in which you can participate and Earn Up to 6 Lakh.</Typography>
                                        </Box>

                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Box sx={{ width: { lg: '40%', md: '50%', sm: '40%', xs: '60%' }, height: '470px', }}>
                                    <img src={game5} width={'100%'} height={'100%'} alt='game5' style={{ borderRadius: '10px' }} />
                                </Box>

                            </Grid>


                        </Grid>




                    </Grid>

                    {/* three  */}
                    <Grid container sx={{ padding: '10 20px', mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Grid item xs={12} data-aos='fade-up' sx={{ textAlign: 'center', }} >
                            <Typography sx={{ color: '#5c6bc0', fontSize: '23px', fontWeight: '800' }}>Our Games</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '470px' }}>
                                    <img src={game7} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-left' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '490px' }}>
                                    <img src={game6} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '490px' }}>
                                    <img src={game5} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-left' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '490px' }}>
                                    <img src={game4} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '490px' }}>
                                    <img src={game2} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-left' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '490px' }}>
                                    <img src={game1} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                            <Grid item lg={3} md={4} sm={4} xs={8} data-aos='fade-right' sx={{ m: '10px' }}>
                                <Box sx={{ width: { lg: '90%', md: '90%', sm: '100%', xs: '100%' }, height: '490px' }}>
                                    <img src={game3} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />

                                </Box>

                            </Grid>

                        </Grid>



                    </Grid>




                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Grid container className='resultScroll' sx={{ overflow: "scroll", height: "100%", bgcolor: "#f1f3f6", p: "0px 20px" }}>
                            <Grid item xs={12} >
                                <Box >
                                    <Typography align='center' sx={{ color: "#7c4dff", fontSize: "35px", letterSpacing: "2px", fontWeight: "500" }}>
                                        How To Play The Game
                                    </Typography>
                                    <Typography align='center' sx={{ color: "#546e7a", fontSize: "20px", letterSpacing: "2px", mt: "7px", fontFamily: "Roboto sans-serif" }}>
                                        Please follow the below steps to play the game easily
                                    </Typography>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sx={{ mt: "10px" }}>
                                <Grid container sx={{}} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px",display: "flex", justifyContent: "center",alignItems:'center' }} data-aos="fade-right">
                                        <Box sx={{  width: { lg: '49%', md: '65%', sm: '39%', xs: '73%' }, height: '490px' }}>

                                            <img src={signup} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize: "30px", fontWeight: "800" }}>Step 1: Download and Signup </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", justifyContent: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Go to Play Store and Download the Color_Game App</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", justifyContent: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Fill the details for make an account</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>




                            <Grid item xs={12} sx={{ mt: "10px" }}>
                                <Grid container >
                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box data-aos="fade-up">
                                            <Typography align='center' sx={{ color: "#263238", fontSize: "30px", fontWeight: "800" }}>Step 2: If you already have an account</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Login to the App</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Please enter the E-mail and password correctly</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px",display: "flex", justifyContent: "center",alignItems:'center' }} data-aos="fade-right">
                                        <Box sx={{  width: { lg: '49%', md: '65%', sm: '39%', xs: '73%' }, height: '490px' }}>

                                        <img src={game6} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid item xs={12} sx={{ mt: "10px" }}>
                                <Grid container sx={{}} wrap='wrap-reverse'>
                                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px",display: "flex", justifyContent: "center",alignItems:'center' }} data-aos="fade-right">
                                        <Box sx={{  width: { lg: '49%', md: '65%', sm: '39%', xs: '73%' }, height: '490px' }}>

                                        <img src={game5} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize: "30px", fontWeight: "800" }}>Step 3: Choose the game you want to play</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Choose the game you want to play from the home page</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Select the time and enjoy</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px" }}>
                                <Grid container >
                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box data-aos="fade-up">
                                            <Typography align='center' sx={{ color: "#263238", fontSize: "30px", fontWeight: "800" }}>Step 4: Choose the game quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />After chossing the game, choose the color,size,number for  quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Select the time and enjoy</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px",display: "flex", justifyContent: "center",alignItems:'center' }} data-aos="fade-right">
                                        <Box sx={{  width: { lg: '49%', md: '65%', sm: '39%', xs: '73%' }, height: '490px' }}>

                                        <img src={game4} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px" }}>
                                <Grid container sx={{}} wrap='wrap-reverse'>
                                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px",display: "flex", justifyContent: "center",alignItems:'center' }} data-aos="fade-right">
                                        <Box sx={{  width: { lg: '49%', md: '65%', sm: '39%', xs: '73%' }, height: '490px' }}>

                                        <img src={game} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize: "30px", fontWeight: "800" }}>Step 5: Check you result</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />After playing game check your result on result chart</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Box data-aos="fade-up">

                                    <Typography align='center' sx={{ color: "#7c4dff", fontSize: "20px", fontWeight: "800" }}>Testimonials</Typography>
                                    <Typography align='center' sx={{ color: "#546e7a" }}>some of the reviews from our happy customers.</Typography>
                                </Box>

                                <Box>
                                    <Grid container className='resultScroll' sx={{ overflow: "scroll", justifyContent: "center" }}>
                                        <Grid item xs={12} sx={{ mt: '20px' }} data-aos="fade-up">
                                            <Typography textAlign={'center'} variant='h1' sx={{ fontWeight: 900, fontSize: { lg: '54px', xs: '40px' }, letterSpacing: '0px', lineHeight: 1.43 }}>Happy Clients</Typography>
                                            <Typography textAlign={'center'} m={'6px'} sx={{ fontSize: { lg: '20px', xs: '20px' } }} fontWeight={600}>What our clients says about us</Typography>
                                        </Grid>
                                        <Box className='resultScroll' sx={{ overflow: "scroll", display: "flex" }} data-aos="fade-up">


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: "scale(1.1)", } }}>
                                                <Paper sx={{ height: "400px", width: "250px", p: "10px", m: "7px" }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                                    </Typography>
                                                    <Box sx={{ height: "43%" }}>
                                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“One of the best social media agency in Delhi. They manage social media of their clients with skills. Have great knowledge on paid advertisements. Most recommended advertising agency.”</Typography>
                                                    </Box>
                                                    <Box >
                                                        <Box sx={{ borderRadius: "50px", mt: "40px" }}>
                                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", height: "45px", width: "45px", overflow: "hidden" }}>
                                                                    <img src={av1} alt="sr" height={"100%"} width={"100%"} />
                                                                </Box>

                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content" }}>Sanjay singh</Typography>
                                                            </Box>
                                                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px", textAlign: "center" }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: "scale(1.1)" } }}>
                                                <Paper sx={{ height: "400px", width: "250px", p: "10px", m: "7px" }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                                    </Typography>
                                                    <Box sx={{ height: "43%" }}>
                                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“One of the best digital marketing agency. Strongly recommended adelsocial to get the things done the way you want!.”</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ borderRadius: "50px", mt: "15px" }}>
                                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", height: "45px", width: "45px", overflow: "hidden" }}>
                                                                    <img src={av2} alt="bjp" height={"100%"} width={"100%"} />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Anand pandey</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: "scale(1.1)" } }}>
                                                <Paper sx={{ height: "400px", width: "250px", p: "10px", m: "7px" }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                                    </Typography>
                                                    <Box sx={{ height: "43%" }}>
                                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“one of the best digital marketing Agency in Delhi. They help with 360-degree digital solutions for every type of business. Great work by Adelsocial.”</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ mt: "15px" }}>
                                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", overflow: "hidden", height: "45px", width: "45px" }}>
                                                                    <img src={av3} alt="parsal" height="100%" width="100%" />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Ramesh sharma</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        </Box>


                                    </Grid>
                                </Box>

                            </Grid>


                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Grid container sx={{ pb: "40px", display: "flex", justifyContent: "center" }} data-aos="fade-up">
                                    <Box sx={{ width: { lg: "70%", md: "75%", sm: "100%", xs: "100%" } }}>
                                        <Box>
                                            <Typography align='center' sx={{ fontSize: "40px", fontWeight: "600", color: "#7c4dff" }} >
                                                Frequently Asked Questions
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Accordion elevation={0} sx={{ mt: "10px" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                                        Where can I download game?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>

                                                        <ul>
                                                            <li>You can download it from play store / App store or whatever store your mobile support </li>
                                                            <li>ou can download it directly from google</li>
                                                            <li>You can take apk from your or person who have the game</li>
                                                        </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>



                                            <Accordion elevation={0} sx={{ mt: "10px" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                                        How to play the game?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        you can follow the steps given upward
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion elevation={0} sx={{ mt: "10px" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                                        Can I save games with Game Play Color?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>

                                                        yes you can save the game
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion elevation={0} sx={{ mt: "10px" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                                        Why aren’t my games showing up?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        It may be due to your slow iternet or sometimes it happen your game is not fully loaded
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion elevation={0} sx={{ mt: "10px" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                                        Why does my game restart every time I switch apps?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        It may be happening because your mobile is not supporting it or your mobile have older version of android
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>




                            <Grid item xs={12}>

                                <Grid container>
                                    <Grid item xs={12} data-aos="fade-up" sx={{ bgcolor: "white", p: "40px 15px 30px 15px", mb: "25px" }}>
                                        <Typography align='center' sx={{ fontSize: "35px", color: "#7c4dff" }}>
                                            Contact
                                        </Typography>
                                        <Typography align='center' sx={{ mt: "10px" }}>
                                            For booking or any queries, feel free to contact us
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={6}>
                                        <Grid container sx={{ bgcolor: "white", p: "20px" }}>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "#f1f3f6", p: "40px 15px 30px 15px" }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <LocationOnIcon sx={{ fontSize: "50px", color: "#78909c" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#7c4dff" }}>
                                                    ADDRESS
                                                </Typography>
                                                <Typography align='center'>
                                                    P-27, 3rd Floor, Block P, Shivalik Colony, Malviya Nagar, New Delhi, Delhi 110017
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "#f1f3f6", p: "40px 15px 30px 15px" }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <CallIcon sx={{ fontSize: "50px", color: "#78909c" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#7c4dff" }}>
                                                    Call Us
                                                </Typography>
                                                <Typography align='center'>
                                                    +91 800000000000
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "#f1f3f6", p: "40px 15px 30px 15px" }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <MailIcon sx={{ fontSize: "50px", color: "#78909c" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#7c4dff" }}>
                                                    Email Us
                                                </Typography>
                                                <Typography align='center'>
                                                    xyz@gmail.com
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "#f1f3f6", p: "40px 15px 30px 15px" }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <AccessTimeIcon sx={{ fontSize: "50px", color: "#78909c" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#7c4dff" }}>
                                                    Working Hours
                                                </Typography>
                                                <Typography align='center'>
                                                    Mon-Fri:9AM to 5PM
                                                </Typography>
                                                <Typography align='center'>
                                                    Sun:9AM to 1PM
                                                </Typography>
                                            </Grid>




                                        </Grid>
                                    </Grid>
                                    <Grid item lg={6} xs={12} sx={{ bgcolor: "white", p: "25px 10px 30px 10px" }}>
                                        <Box sx={{}} data-aos="fade-up">

                                            <OutlinedInput placeholder='Your Name' sx={{ height: "50px" }} fullWidth />
                                            <OutlinedInput placeholder='Your Email' sx={{ height: "50px", mt: "10px" }} fullWidth />
                                            <OutlinedInput placeholder='Subject' sx={{ height: "50px", mt: "10px" }} fullWidth />
                                            <TextareaAutosize className='placeHolder' placeholder='Mesage' style={{ width: "98.9%", marginTop: "10px" }} minRows={8} />
                                            <Box variant="outlined" sx={{ display: "flex", justifyContent: "center", mt: "20px" }} >
                                                <Button variant='outlined' sx={{ borderRadius: "25px", p: "10px 20px", border: "2px solid #7c4dff", color: "#7c4dff" }}>Send Message</Button>
                                            </Box>
                                        </Box>

                                    </Grid>

                                </Grid>



                            </Grid>

                            <Grid item xs={12} sx={{ bgcolor: "white", mt: "70px", p: "15px 30px" }}>
                                <Grid container sx={{ p: "30px 10px 40px 10px" }}>
                                    <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                                        <Box sx={{ mt: "20px" }}>
                                            <Typography sx={{ fontSize: "25px", color: "#212121" }}>
                                                Color_Game
                                            </Typography>
                                            <Typography sx={{ color: "#757575" }}>
                                                Near MMUT College, Kunraghat Gorakhpur, U.P. -273452
                                            </Typography>

                                            <Typography sx={{ color: "#757575", mt: "15px" }}>
                                                <span style={{ color: "#424242" }}>Phone:</span>+91 8387378738
                                            </Typography>
                                            <Typography sx={{ color: "#757575" }}>
                                                <span style={{ color: "#424242" }}>Email:</span>+91 8387378738
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                                        <Box sx={{ mt: "20px" }}>
                                            <Typography sx={{ fontSize: "25px", color: "#212121" }}>
                                                Useful Links
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px" }}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Home
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px" }}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />About us
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px" }}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Team
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px" }}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Terms of Use
                                            </Typography>
                                            <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px" }}>
                                                <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Privacy Policy
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={5} md={5} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                                        <Box sx={{ mt: "20px" }}>
                                            <Typography align='center' sx={{ fontSize: "25px", color: "#212121" }}>
                                                Our Social Networks
                                            </Typography>
                                            <Typography align='center' sx={{ mt: "15px" }}>
                                                Connect with us via our Social Network Accounts
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: "Center" }}>
                                                <Box>
                                                    <TwitterIcon sx={{ fontSize: "40px", color: "#757575", "&:hover": { color: "#2979ff" }, m: "10px" }} />
                                                    <FacebookIcon sx={{ fontSize: "40px", color: "#757575", "&:hover": { color: "#1e88e5" }, m: "10px" }} />
                                                    <InstagramIcon sx={{ fontSize: "40px", color: "#757575", "&:hover": { color: "#ff1744" }, m: "10px" }} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>





                            <Grid item xs={12} sx={{ mt: "30px" }}>

                                <Box sx={{ mt: "15px", p: "10px 10px 30px 10px" }}>
                                    <Typography align='center' sx={{ color: "#757575" }}>© Copyright Adelsocial Pvt Ltd. All Rights Reserved</Typography>
                                    <Typography align='center' sx={{ color: "#757575" }}>
                                        Designed and Developed by Adelsocial
                                    </Typography>
                                </Box>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Container>
        </>
    )
}

export default LandingPage