
import LensIcon from '@mui/icons-material/Lens';
import { Box, Grid, Typography } from '@mui/material';
import { default as React } from 'react';
import resultMainBg from '../assets/resultMainBG.png';
import walletBg from '../assets/walletBG.png';


const ResultComponent = () => {
    const resultData = [
        { Period: 20238267542, number: 5, size: "Big", color: "red" },
        { Period: 20238267742, number: 8, size: "Small", color: "violet" },
        { Period: 20238248742, number: 1, size: "Small", color: "green" },
        { Period: 20238128742, number: 4, size: "Big", color: "red" },
        { Period: 20238247842, number: 2, size: "Big", color: "green" },
        { Period: 20238256742, number: 9, size: "Small", color: "violet" },
        { Period: 20238212342, number: 5, size: "Big", color: "green" },
        { Period: 20238278934, number: 3, size: "Small", color: "red" },
        { Period: 20238241212, number: 2, size: "Small", color: "red" },
        { Period: 20231211142, number: 6, size: "Small", color: "violet" },
        { Period: 20238676542, number: 7, size: "Big", color: "green" },
        { Period: 20238888882, number: 1, size: "Big", color: "violet" },
        { Period: 20238245656, number: 9, size: "Small", color: "red" },
        { Period: 20238245211, number: 3, size: "Big", color: "green" },
        { Period: 20238297765, number: 1, size: "Small", color: "violet" },
        { Period: 20231211142, number: 6, size: "Small", color: "violet" },
        { Period: 20238676542, number: 7, size: "Big", color: "green" },
        { Period: 20238888882, number: 1, size: "Big", color: "violet" },
        { Period: 20238245656, number: 9, size: "Small", color: "red" },
        { Period: 20238245211, number: 3, size: "Big", color: "green" },
        { Period: 20238297765, number: 1, size: "Small", color: "violet" },
    ]
    return (
        <>
           
                <Grid container sx={{ backgroundImage: `url(${resultMainBg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', p: "10px 10px 70px 10px" }}>
                    <Grid item xs={12} sx={{ backgroundImage: `url(${walletBg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', p: "13px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <Typography align='center' sx={{ color: "white", fontSize: "15px", fontWeight: "600", width: "25%" }}>
                                Period
                            </Typography>
                            <Typography align='center' sx={{ color: "white", fontSize: "15px", fontWeight: "600", width: "25%" }}>
                                Number
                            </Typography>
                            <Typography align='center' sx={{ color: "white", fontSize: "15px", fontWeight: "600", width: "25%" }}>
                                Size
                            </Typography>
                            <Typography align='center' sx={{ color: "white", fontSize: "15px", fontWeight: "600", width: "25%" }}>
                                Color
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid className='resultScroll' item xs={12} sx={{ mt: "10px", height: "300px", overflowY: "scroll", border: "1px solid white" }}>
                        <Box sx={{}}>
                            {
                                resultData.map((ele,index) => {
                                    return (
                                        <Box key={index} sx={{ p: "10px", display: "flex", borderBottom: "1px solid #9e9e9e" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "14px", width: "25%" }}>
                                                {
                                                    ele.Period
                                                }
                                            </Typography>
                                            <Typography align='center' sx={{ color: "white", fontSize: "14px", width: "25%" }}>
                                                {
                                                    ele.number
                                                }
                                            </Typography>
                                            <Typography align='center' sx={{ color: "white", fontSize: "14px", width: "25%" }}>
                                                {
                                                    ele.size
                                                }
                                            </Typography>
                                            <Typography align='center' sx={{ width: "25%" }}>
                                                <LensIcon sx={{ color: `${ele.color}`, fontSize: "16px" }} />
                                            </Typography>
                                        </Box>
                                    )
                                })
                            }

                        </Box>
                    </Grid>
                </Grid>
            
        </>
    )
}

export default ResultComponent