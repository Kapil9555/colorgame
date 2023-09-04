import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { context } from '../global/GlobalContext'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import slide1 from '../assets/c1.jpg'
import slide2 from '../assets/c2.jpg'
import slide3 from '../assets/c3.avif'
import slide4 from '../assets/c4.webp'
import slide5 from '../assets/c5.avif'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import ludo from '../assets/ludoIcon.webp'
import otherGame from '../assets/halfLeftBGBox.png'
import statBg from '../assets/howItWorksBG.png'
import statCard from '../assets/howItWorkCardBG.png'
import { useNavigate } from 'react-router-dom';
import '../GlobalCss.css'


const HomePage = ({setOpen}) => {

  const navigate=useNavigate()

  const {  innerHeight } = useContext(context)


  const sliderData = [
    {
      img: slide1,
      caption: "slide1"
    },
    {
      img: slide2,
      caption: "slide2"
    }
    ,
    {
      img: slide3,
      caption: "slide3"
    }
    ,
    {
      img: slide4,
      caption: "slide4"
    }
    ,
    {
      img: slide5,
      caption: "slide5"
    }
  ]

  const chooseGameData = [
    {
      img: card1,
      title: "Lucky Digits",
      number:"0-9",
      minuteGame1:`2 Minute Game`,
      minuteGame2:" Answer the Quiz",
      gameId:1

    },
    {
      img: card2,
      title: "Lucky Digits",
      number:"0-99",
      minuteGame1:"5 Minute Game ",
      minuteGame2:" Answer the Quiz Earn Bigger",
      gameId:2
,
      
    },
    {
      img: card3,
      title: "Lucky Digits",
      number:"0-9",
      minuteGame1:"1 Minute Game ",
      minuteGame2:"Answer the Quiz",
      gameId:3

    },
    {
      img: card4,
      title: "Lucky Digits",
      number:"0-9",
      minuteGame1:"1 Minute Game ",
      minuteGame2:" Answer the Quiz",
      gameId:4

    },
    {
      img: card1,
      title: "Lucky Digits",
      number:"0-9",
      minuteGame1:`1 Minute Game`,
      minuteGame2:" Answer the Quiz",
      gameId:5

    }

  ]


const gamesData=[
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },
  {
    img:ludo,
    title:"Ludo Game"
  },

]

  const proprietes = {
    duration: 3500,
    transitionDuration: 200,
    infinite: true,
    arrows: false

  }

  const handleGameSelector=(ele)=>{
        if(ele==1){
          navigate("/card")
        }
  }
  
  return (
   
    <>
      <Box className='RemoveScroll' sx={{ height: `${innerHeight}px`, overflow: "scroll" }}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ p: "22px" }}>
              <Typography align='center' sx={{ fontSize: "1.7rem", fontWeight: "700", color: "white" }}>
                Color Prediction
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Slide {...proprietes}>
                {
                  sliderData.map((ele,index) => {
                    return (
                      <Box key={index} sx={{ backgroundImage: `url(${ele.img})`, height: "180px", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>

                      </Box>
                    )
                  })
                }

              </Slide>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "700", color: "white" }}>
                Choose a Game
              </Typography>
              <Typography sx={{ color: "#bdbdbd", fontSize: "0.5rem", fontWeight: "600" }}>
                VIEW ALL
              </Typography>
            </Box>
          </Grid>



          <Box className="RemoveScroll" sx={{overflow:"scroll"}}>
            <Box sx={{display:"flex",}}>
                {
                  chooseGameData.map((ele)=>{
                    return(
                       <Box >
                      <Box  key={ele.gameId} sx={{ pt:"15px",pl:"15px",height: "200px",width: "135px",cursor:"pointer",backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} onClick={()=>{handleGameSelector(ele.gameId)}}>
                           
                           <Box sx={{height:"60%"}}>
                           <Typography sx={{color:"white",fontSize:"1rem",fontWeight:"700",mt:"25px"}}>
                            {ele.title}
                           </Typography>
                           <Typography sx={{color:"white",fontSize:"1rem",fontWeight:"700"}}>
                            {ele.number}
                           </Typography>

                           <Typography sx={{color:"white",fontSize:"0.8rem",fontWeight:"700",mt:"13px",color:"#9e9e9e"}}>
                            {ele.minuteGame1}
                           </Typography>
                           <Typography sx={{color:"white",fontSize:"0.8rem",fontWeight:"700",lineHeight:"13px",color:"#9e9e9e",width:"80%"}}>
                            {ele.minuteGame2}
                           </Typography>
                           </Box>
                            <Box sx={{display:"flex",justifyContent:"center",ml:"-15px"}}>
                            <Button variant='contained' sx={{display:"flex",alignItems:"center",letterSpacing:"-1px",color:"#424242",bgcolor:"#cfd8dc",borderRadius:"25px",p:"3px 13px",fontWeight:"600"}}>Play Now <ArrowForwardIcon sx={{color:"black",fontSize:"15px"}}/></Button>
                           </Box>
                        </Box>
                      </Box>
                    
                    )
                  })
                }
            
             
             
            </Box>
          </Box>

            <Box sx={{ p: "10px", display: "flex", justifyContent: "space-between", alignItems: "center",width:"100%" }}>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "700", color: "white" }}>
                Other Games
              </Typography>
              <Typography sx={{ color: "#bdbdbd", fontSize: "0.5rem", fontWeight: "600" }}>
                VIEW ALL
              </Typography>
            </Box>
            <Box className="RemoveScroll" sx={{pl:"15px",ml:"12px",display:"flex",backgroundImage:`url(${otherGame})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",overflow:"scroll",width:"100%"}}>
            {
              gamesData.map((ele,index)=>{
                return(
                  <Box key={index} sx={{m:"10px 6px"}}>
                    <Box sx={{backgroundImage:`url(${ele.img})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",height:"60px",width:"60px",borderRadius:"50px"}}>
                       
                    </Box>
                    <Typography align='center' sx={{color:"white", fontSize:"11px"}}>
                      {
                        ele.title
                      }
                    </Typography>
                   </Box>
                      
                )
              })
            }
            </Box>
            <Grid container sx={{justifyContent:"center",mb:"50px"}}>
                  <Grid item xs={11}  sx={{mt:"20px",backgroundImage:`url(${statBg})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",p:"10px",pb:"50px",height:"fit-content"}}>
                  
                    <Grid container sx={{justifyContent:"space-evenly"}} >
                      <Grid item xs={12} sx={{mt:"15px"}}> 
                         <Typography align='center' sx={{color:"white",fontSize:"25px",fontWeight:"600"}}>How  it Works</Typography>
                      </Grid>
                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px"}} onClick={()=>{setOpen(true)}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                                First Step
                              </Typography>
                              <Typography sx={{color:"white"}}>
                               Choose A Game
                              </Typography>
                      </Grid>

                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                               Second Step
                              </Typography>
                              <Typography sx={{color:"white"}}>
                               Pick Your Bet
                              </Typography>
                      </Grid>

                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px",mt:"20px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                                Third Step
                              </Typography>
                              <Typography sx={{color:"white"}}>
                                Bet Amount
                              </Typography>
                      </Grid>

                      <Grid item xs={5.5} sx={{backgroundImage:`url(${statCard})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",p:"10px",mt:"20px"}}>
                              <Typography sx={{fontSize:"0.6rem",color:"white"}}>
                                Fourth Step
                              </Typography>
                              <Typography sx={{color:"white"}}>
                                Bet Bonus
                              </Typography>
                      </Grid>
                     
                    </Grid>
                   
                  </Grid>
                </Grid>

          
        </Grid>
      </Box>
    </>
  )
}

export default HomePage