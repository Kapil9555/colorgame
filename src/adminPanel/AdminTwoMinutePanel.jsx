import { Box, Container, Grid, Typography } from '@mui/material';
import { default as React, useContext } from 'react';
import mainBg from '../assets/mainBG.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import timerH1 from '../assets/timerH1.png'
import timerM1 from '../assets/timerM1.png'
import timerH2 from '../assets/timerM2.png'
import Twomint from '../assets/2mintpanel.png'
import { context } from '../global/GlobalContext';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import resultMainBg from '../assets/resultMainBG.png'
import ResultComponent from '../components/ResultComponent';

const AdminTwoMinutePanel = () => {
    const { innerHeight } = useContext(context)



    return (
        <>
            <Container disableGutters maxWidth={'xl'} >
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={8} md={5} lg={4} sx={{ position: "relative", overflow: "hidden", backgroundImage: `url(${mainBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
                        <Box className='RemoveScroll' sx={{ height: `${innerHeight}px`, overflow: "scroll" }}>
                            <Grid container sx={{ p: "8px" }}>
                                <Grid item xs={12}>
                                    <Typography sx={{ fontSize: "1.7rem", color: "white", display: "flex", alignItems: "center", fontWeight: "600" }}><ArrowBackIosIcon sx={{ fontWeight: "800", fontSize: "1.7rem" }} /> 2 Mint Panel</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ background: `url(${Twomint})`, borderRadius: "13px", p: "5px 0px 15px 0px", mt: "15px" }}>
                                        <Box sx={{ borderBottom: "1px solid #424242", pb: "10px" }}>
                                            <Typography align='center' sx={{ color: "#1b5e20", fontSize: "1.4rem", fontWeight: "600" }}>Running Same ID</Typography>
                                            <Typography align='center' sx={{ color: "white", fontSize: "1.2rem", fontWeight: "600", mt: "-6px" }}>202382911212</Typography>
                                        </Box>
                                        <Box sx={{ borderBottom: "1px solid #424242", mt: "10px", pb: "10px" }}>
                                            <Typography align='center' sx={{ fontSize: "0.6", fontWeight: "700", color: "white", }}>
                                                Time Left
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: "5px" }}>
                                                <Box sx={{ m: "2px", backgroundImage: `url(${timerH1})`, display: "flex", justifyContent: "center", alignItems: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "35px", width: "25px" }}>
                                                    <Typography align='center' sx={{ color: "white", fontWeight: "600" }}>0</Typography>
                                                </Box>
                                                <Box sx={{ m: "2px", backgroundImage: `url(${timerM1})`, display: "flex", justifyContent: "center", alignItems: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "35px", width: "25px" }}>
                                                    <Typography align='center' sx={{ color: "white", fontWeight: "600" }}>0</Typography>
                                                </Box>
                                                <Box sx={{ m: "2px", backgroundImage: `url(${timerM1})`, display: "flex", justifyContent: "center", alignItems: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "35px", width: "25px" }}>
                                                    <Typography align='center' sx={{ color: "white", fontWeight: "600" }}>:</Typography>
                                                </Box>
                                                <Box sx={{ m: "2px", backgroundImage: `url(${timerM1})`, display: "flex", justifyContent: "center", alignItems: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "35px", width: "25px" }}>
                                                    <Typography align='center' sx={{ color: "white", fontWeight: "600" }}>1</Typography>
                                                </Box>
                                                <Box sx={{ m: "2px", backgroundImage: `url(${timerH2})`, display: "flex", justifyContent: "center", alignItems: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "35px", width: "25px" }}>
                                                    <Typography align='center' sx={{ color: "white", fontWeight: "600" }}>7</Typography>
                                                </Box>
                                            </Box>
                                            <Typography align='center' sx={{ color: "white", fontSize: "0.6rem" }}>
                                                Quiz In Last 25 Seconds
                                            </Typography>
                                        </Box>
                                        <Typography align='center' sx={{ color: "white", fontSize: "0.9rem", mt: "10px" }}>Result In Last 23 Seconds</Typography>
                                        <Box sx={{ p: "0px 15px", display: "flex", justifyContent: "space-between", border: "1px solid #1b5e20" }}>
                                            <Box sx={{}}>
                                                <Typography align='center' sx={{ color: "#1b5e20", fontSize: "1.2rem" }}>Number</Typography>
                                                <Typography align='center' sx={{ color: "white", mt: "8px" }}>1</Typography>
                                            </Box>
                                            <Box sx={{}}>
                                                <Typography align='center' sx={{ color: "#1b5e20", fontSize: "1.2rem" }}>Size</Typography>
                                                <Typography align='center' sx={{ color: "white", mt: "8px" }}>Small</Typography>
                                            </Box>
                                            <Box sx={{}}>
                                                <Typography align='center' sx={{ color: "#1b5e20", fontSize: "1.2rem" }}>Color</Typography>
                                                <Typography align='center' sx={{ color: "white", mt: "8px", display: "flex", alignItems: "center" }}><FiberManualRecordIcon sx={{ fontSize: "20px", color: "red" }} /><FiberManualRecordIcon sx={{ fontSize: "20px", color: "violet" }} /></Typography>
                                            </Box>
                                            <Box sx={{}}>
                                                <Typography align='center' sx={{ color: "#1b5e20", fontSize: "1.2rem" }}>Action</Typography>
                                                <Typography align='center' sx={{ color: "white", mt: "8px" }}><CreateIcon sx={{ color: "yellow" }} /></Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography align='center' sx={{ fontSize: "0.9rem", color: "white" }}>
                                            Above Results will be show to user on Zero Seconds and To Admin on 23 Seconds,Results will shown to Admin for last 23 to 0 Sec,after that it will be erased</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: "15px" }}>

                                    <Typography sx={{ color: "white", fontSize: "1.2rem", fontWeight: "600" }}>Active Participants (0)</Typography>
                                    <Box sx={{ p: "10px", backgroundImage: `url(${resultMainBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
                                        <Box sx={{ height: "50px", border: "1px solid white" }}></Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} >
                                    <Box sx={{ p: "10px 10px 0px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "1.2rem", fontWeight: "700", color: "white" }}>
                                            Last Few Result
                                        </Typography>
                                        <Typography sx={{ color: "#bdbdbd", fontSize: "0.5rem", fontWeight: "600" }}>
                                            VIEW ALL
                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* result component */}
                                <Grid item xs={12}>

                                    <ResultComponent />

                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AdminTwoMinutePanel