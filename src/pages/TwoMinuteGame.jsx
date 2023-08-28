import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import twoBlueball from '../assets/twoBlueBallBG.png'
import wallet from '../assets/walletBG.png'
import walletIcon from '../assets/walletIcon.png'
import { context } from '../global/GlobalContext'
import RefreshIcon from '@mui/icons-material/Refresh';
import mintsGame from '../assets/mintsGameBG.png'
import timerGreen from '../assets/timerGreen.png'
import buyBg from '../assets/buyBG.png'
import timerH1 from '../assets/timerH1.png'
import timerM1 from '../assets/timerM1.png'
import timerH2 from '../assets/timerM2.png'
import quiz1 from '../assets/quiz.png'
import quizbg from '../assets/quizBG.png'
import numberMain from '../assets/numbersMainBG.png'
import gameSec from '../assets/numbersSecBG.png'
import fiveBg from '../assets/fiveBG.png'
import zeroBg from '../assets/zeroBG.png'
import redColor from '../assets/red.png'
import mainBg from '../assets/mainBG.png'
import resultMainBg from '../assets/resultMainBG.png'
import walletBg from '../assets/walletBG.png'
import LensIcon from '@mui/icons-material/Lens';
import '../master.css'
import greenColor from '../assets/green2.png'
import DrawerMui from '../components/DrawerMui'


const TwoMinuteGame = () => {
  const { innerHeight } = useContext(context);
  const [open, setOpen]=useState(false);
  const [bgColor,setBgColor]=useState("")

  const TwoMinutesColorGame=[ 
    {number:0,image:zeroBg,color:"linear-gradient(180deg, rgba(237,54,54,1) 19%, rgba(194,39,163,1) 66%)"},{number:1,image:greenColor,color:"green"},
    {number:2,image:redColor,color:"red"},{number:3,image:greenColor,color:"green"},
    {number:4,image:redColor,color:"red"},{number:5,image:fiveBg,color:"linear-gradient(106deg, rgba(85,228,102,1) 34%, rgba(194,39,163,1) 61%)"},
    {number:6,image:redColor,color:"red"},{number:7,image:greenColor,color:"green"},
    {number:8,image:redColor,color:"red"},{number:9,image:greenColor,color:"green"},
  ]

  const resultData=[
    {Period:20238267542,number:5,size:"Big",color:"red"},
    {Period:20238267742,number:8,size:"Small",color:"violet"},
    {Period:20238248742,number:1,size:"Small",color:"#43a047"},
    {Period:20238128742,number:4,size:"Big",color:"red"},
    {Period:20238247842,number:2,size:"Big",color:"#43a047"},
    {Period:20238256742,number:9,size:"Small",color:"violet"},
    {Period:20238212342,number:5,size:"Big",color:"#43a047"},
    {Period:20238278934,number:3,size:"Small",color:"red"},
    {Period:20238241212,number:2,size:"Small",color:"red"},
    {Period:20231211142,number:6,size:"Small",color:"violet"},
    {Period:20238676542,number:7,size:"Big",color:"#43a047"},
    {Period:20238888882,number:1,size:"Big",color:"violet"},
    {Period:20238245656,number:9,size:"Small",color:"red"},
    {Period:20238245211,number:3,size:"Big",color:"#43a047"},
    {Period:20238297765,number:1,size:"Small",color:"violet"},
    {Period:20231211142,number:6,size:"Small",color:"violet"},
    {Period:20238676542,number:7,size:"Big",color:"#43a047"},
    {Period:20238888882,number:1,size:"Big",color:"violet"},
    {Period:20238245656,number:9,size:"Small",color:"red"},
    {Period:20238245211,number:3,size:"Big",color:"#43a047"},
    {Period:20238297765,number:1,size:"Small",color:"violet"},
  ]

  const colorChange=(ele)=>{
    setBgColor(ele);
    setOpen(true)
  }
  console.log(bgColor)

  return (
    <>
     <Grid container sx={{ justifyContent: "center",alignItems:"center",height:"innerHeight",}}>
       <Grid item xs={12} sm={10} md={8} lg={4} sx={{ml:{xs:"0px",sm:"0px",md:"0px",lg:"17px"},backgroundImage: `url(${mainBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
      <Grid container  sx={{ height:"innerHeight",}}>
        <Grid item xs={12}>
          <Box sx={{ p: "10px" }}>
            <Typography align='center' sx={{ fontSize: "1.7rem", fontWeight: "700", color: "white" }}>
              Color Prediction
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ p: "20px", backgroundImage: `url(${twoBlueball})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", }}>
            <Box sx={{ p:"10px 10px",backgroundImage: `url(${wallet})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", display: "flex" }}>
              <Box>
                <img src={walletIcon} height={"60px"} width={"60px"}/>
              </Box>
              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                <Box>
                  <Typography sx={{color:"white",fontSize:"25px",fontWeight:"600"}}>
                    Total
                  </Typography>
                  <Typography sx={{color:"white",fontWeight:"600",fontSize:"13px",mt:"-4px",whiteSpace:"nowrap"}}>
                    Wallet Balance
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{color:"white",fontSize:"17px",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    IQ 11150.50 <RefreshIcon/>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{mt:"20px"}}>
              <Button sx={{mr:"20px",border:"1px solid white",bgcolor:"#c0ca33","&:hover":{bgcolor:"#c0ca33"},color:"white",fontWeight:"600",fontSize:"15px",borderRadius:"25px",p:"2px 10px"}}>
                Withdraw
              </Button>
              <Button sx={{border:"1px solid white",bgcolor:"#2962ff","&:hover":{bgcolor:"#2962ff"},color:"white",fontWeight:"600",fontSize:"15px",borderRadius:"25px",p:"2px 10px"}}>
               Deposit
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{p:"10px",backgroundImage:`url(${mintsGame})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
             <Box sx={{backgroundImage:`url(${timerGreen})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"60px",width:"35px"}}>

             </Box>
             <Typography align='center' sx={{color:"green",fontSize:"1rem"}}>
              1 Minute
             </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{overflow:"hidden"}}>
          <Box sx={{backgroundImage:`url(${buyBg})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"14px 5px",display:"flex"}}>
               <Box sx={{borderRight:"1px dashed black",width:"55%",position:"relative"}}>
                  <Typography sx={{color:"white",border:"1px solid white",width:"fit-content",borderRadius:"25px",p:"5px 10px",}}>
                     1 minute
                  </Typography>
                  <Typography sx={{colo:"white",fontWeight:"800",color:"white",fontSize:"1.2rem",mt:"10px"}}>
                    20238241391
                  </Typography>
                  <Box sx={{backgroundColor:"black",p:"10px",borderRadius:"50px",height:"3px",width:"3px",position:"absolute",right:"-12px",top:"-22px"}}></Box>
                  <Box sx={{backgroundColor:"black",p:"10px",borderRadius:"50px",height:"3px",width:"3px",position:"absolute",right:"-12px",bottom:"-22px"}}></Box>

               </Box>
               <Box sx={{width:"45%",overflow:"hidden"}}>
                  <Typography sx={{fontSize:"0.8",fontWeight:"700",color:"white",textAlign:"right"}}>
                      Life Time to buy
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"right",width:"100%",mt:"5px"}}>
                  <Box sx={{m:"2px",backgroundImage:`url(${timerH1})`,display:"flex",justifyContent:"center",alignItems:"center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"35px",width:"25px"}}>
                    <Typography align='center' sx={{color:"white",fontWeight:"600"}}>0</Typography>
                  </Box>
                  <Box sx={{m:"2px",backgroundImage:`url(${timerM1})`,display:"flex",justifyContent:"center",alignItems:"center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"35px",width:"25px"}}>
                    <Typography align='center' sx={{color:"white",fontWeight:"600"}}>0</Typography>
                  </Box>
                  <Box sx={{m:"2px",backgroundImage:`url(${timerM1})`,display:"flex",justifyContent:"center",alignItems:"center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"35px",width:"25px"}}>
                    <Typography align='center' sx={{color:"white",fontWeight:"600"}}>:</Typography>
                  </Box>
                  <Box sx={{m:"2px",backgroundImage:`url(${timerM1})`,display:"flex",justifyContent:"center",alignItems:"center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"35px",width:"25px"}}>
                    <Typography align='center' sx={{color:"white",fontWeight:"600"}}>1</Typography>
                  </Box>
                  <Box sx={{m:"2px",backgroundImage:`url(${timerH2})`,display:"flex",justifyContent:"center",alignItems:"center",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"35px",width:"25px"}}>
                    <Typography align='center' sx={{color:"white",fontWeight:"600"}}>7</Typography>
                  </Box>
                 
                  


               </Box>
               </Box>
             
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{backgroundImage:`url(${quiz1})`,p:"10px 20px 20px 20px",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",display:"flex",flexDirection:"column",}}>
               <Typography sx={{color:"white",fontSize:"1.1rem",fontWeight:"700"}}> 
                 QUIZ
               </Typography>
               <Box sx={{backgroundImage:`url(${quizbg})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Box>
                    <Typography align='center' sx={{fontSize:"1.3rem",fontWeight:"700",color:"white"}}>
                      What is 7*8/4-10
                    </Typography>
                    <Typography align='center' sx={{fontSize:"0.7rem",color:"#e0e0e0"}}>Click the correct answer below</Typography>
                    </Box>
               </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{backgroundImage:`url(${numberMain})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
            <Typography align='center' sx={{color:"white",fontSize:"1rem",fontWeight:"600"}}>
              Answer
            </Typography>
            <Box sx={{display:"flex",justifyContent:"space-around",mt:"10px"}}>
               <Box sx={{p:"12px 30px" ,borderRadius:"0px 15px 0px 15px",bgcolor:"#00c853"}} onClick={()=>{colorChange("green")}}>
               <Typography sx={{color:"white"}}>Green</Typography>
               </Box>
               <Box onClick={()=>{colorChange("violet")}} sx={{p:"12px 30px" ,borderRadius:"0px 15px 0px 15px",bgcolor:"#aa00ff"}}>
               <Typography sx={{color:"white"}}>Violet</Typography>
               </Box>
               <Box sx={{p:"12px 30px" ,borderRadius:"0px 15px 0px 15px",bgcolor:"#d32f2f"}}  onClick={()=>{colorChange("red")}}>
               <Typography sx={{color:"white"}}>Red</Typography>
               </Box>
               
            </Box>

              <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>

                                <Grid item xs={11.5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', backgroundImage: `url(${gameSec})`, backgroundSize: '100% 100%', padding: '10px', mt: '10px' }}>
                                    {
                                      TwoMinutesColorGame.map((ele) => {
                                            return (
                                                <Box sx={{ width: '18%', display: 'flex', justifyContent: 'center', alignItems: 'center', m: '1px', mb: '5px'}}>

                                                    <Box sx={{ backgroundImage: `url(${ele.image})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '25px', textAlign: 'center', borderRadius: '50%', border: '1px solid white' }} onClick={()=>{colorChange(ele.color)}}>
                                                        <Typography sx={{ fontSize:'16px', color: 'white', fontWeight: '900' }}>{ele.number}</Typography>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }


                                </Grid>
                                <Grid item xs={11.5} sx={{ height: '58px', mt: '7px', display: 'flex', mb:"10px",borderRadius: '30px',overflow:"hidden" }}>
                                    <Box sx={{ width: '50%', bgcolor: '#ffab00', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px',}} onClick={()=>{colorChange("#ffab00")}}>
                                        <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '900' }}>Big</Typography>

                                    </Box>
                                    <Box sx={{ width: '50%', bgcolor: '#43a047', height: '100%', display: 'flex', justifyContent: 'center',  alignItems: 'center', padding: '2px' }} onClick={()=>{colorChange("#43a047")}}>
                                        <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '900' }}>Small</Typography>

                                    </Box>

                                </Grid>
                            </Grid>
            </Box>
        </Grid>
         <Grid item xs={12} sx={{mt:"10px"}}>
          <Grid container sx={{justifyContent:"space-around"}}>
            <Grid item xs={3.6}>
            <Box sx={{border:"1px solid white",borderRadius:"25px",bgcolor:"#e57373"}}>
               <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",p:"12px 0px"}}>Quiz Record</Typography>
            </Box>
            </Grid>
            <Grid item xs={3.9}>
            <Box sx={{border:"1px solid white",borderRadius:"25px",bgcolor:"#43a047"}}>
               <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",p:"12px 0px"}}>Chart Trend</Typography>
            </Box>
            </Grid>
            <Grid item xs={3.9}>
            <Box sx={{border:"1px solid white",borderRadius:"25px",bgcolor:"#43a047"}}>
               <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",p:"12px 0px",whiteSpace:"nowrap"}}> My Quiz Record</Typography>
            </Box>
            </Grid>
          </Grid>
         </Grid>
          
          <Grid item xs={12}>
            <Grid container sx={{backgroundImage:`url(${resultMainBg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',p:"10px"}}>
              <Grid item xs={12} sx={{backgroundImage:`url(${walletBg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',p:"13px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-around"}}>
                    <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",width:"25%"}}>
                      Period
                    </Typography>
                    <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",width:"25%"}}>
                      Number
                    </Typography>
                    <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",width:"25%"}}>
                      Size
                    </Typography>
                    <Typography align='center' sx={{color:"white",fontSize:"15px",fontWeight:"600",width:"25%"}}>
                      Color
                    </Typography>
                  </Box>
              </Grid>
              <Grid className='resultScroll' item xs={12} sx={{mt:"10px",height:"300px",overflowY:"scroll"}}>
                 <Box sx={{border:"1px solid white"}}>
                 {
                  resultData.map((ele)=>{
                    return(
                      <Box sx={{p:"10px",display:"flex",borderBottom:"1px solid #9e9e9e"}}>
                    <Typography align='center' sx={{color:"white",fontSize:"14px",width:"25%"}}>
                      {
                        ele.Period
                      }
                    </Typography>
                    <Typography align='center' sx={{color:"white",fontSize:"14px",width:"25%"}}>
                      {
                        ele.number
                      }
                    </Typography>
                    <Typography align='center' sx={{color:"white",fontSize:"14px",width:"25%"}}>
                      {
                        ele.size
                      }
                    </Typography>
                    <Typography align='center' sx={{width:"25%"}}>
                       <LensIcon sx={{color:`${ele.color}`,fontSize:"16px"}}/>
                    </Typography>
                    </Box>
                    )
                  })
                 }
              
                 </Box>
              </Grid>
            </Grid>
          </Grid>
        
      </Grid>
      
      </Grid>
      </Grid>
      <DrawerMui  open={open} setOpen={setOpen} bgColor={bgColor}/>
     
    </>
  )
}

export default TwoMinuteGame