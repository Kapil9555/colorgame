import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../GlobalCss.css';
import slide1 from '../assets/c1.jpg';
import slide2 from '../assets/c2.jpg';
import slide3 from '../assets/c3.avif';
import slide4 from '../assets/c4.webp';
import slide5 from '../assets/c5.avif';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import mainBg from '../assets/mainBG.png';
import { context } from '../global/GlobalContext';


const AdminHomePage = ({ setOpen }) => {

  const navigate = useNavigate()

  const { innerHeight } = useContext(context)


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
      number: "0-9",
      minuteGame1: `2 Minute Game`,
      minuteGame2: " Answer the Quiz",
      gameId: 1

    },
    {
      img: card2,
      title: "Lucky Digits",
      number: "0-99",
      minuteGame1: "5 Minute Game ",
      minuteGame2: " Answer the Quiz Earn Bigger",
      gameId: 2
      ,

    },
    {
      img: card3,
      title: "Lucky Digits",
      number: "0-9",
      minuteGame1: "1 Minute Game ",
      minuteGame2: "Answer the Quiz",
      gameId: 3

    },
    {
      img: card4,
      title: "Lucky Digits",
      number: "0-9",
      minuteGame1: "1 Minute Game ",
      minuteGame2: " Answer the Quiz",
      gameId: 4

    },
    {
      img: card1,
      title: "Lucky Digits",
      number: "0-9",
      minuteGame1: `1 Minute Game`,
      minuteGame2: " Answer the Quiz",
      gameId: 5

    }

  ]

  const adminControls=[
    {
      id:1,
      title:"All Users",
      Color:"green"
    },
    {
      id:2,
      title:"1 Min Quiz",
      Color:"purple"
    },
    {
      id:3,
      title:"1 Min Results",
      Color:"green"
    },
    {
      id:4,
      title:"5 Min Quiz",
      Color:"purple"
    },
    {
      id:1,
      title:"5 Min Results",
      Color:"green"
    },
  ]

  const proprietes = {
    duration: 3500,
    transitionDuration: 200,
    infinite: true,
    arrows: false
  }

  const handleAdminGameSelector=(ele)=>{
    console.log(ele)
          if(ele==1){
            navigate("/adminTwo")
          }
  }

  return (

    <>

      <Container disableGutters maxWidth={'xl'}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={5} lg={4} sx={{ position: "relative", overflow: "hidden", backgroundImage: `url(${mainBg})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
            <Box className='RemoveScroll' sx={{ height: `${innerHeight}px`, overflow: "scroll" }}>
              <Grid container>
                <Grid item xs={12}>
                  <Box sx={{ p: "22px" }}>
                    <Typography align='center' sx={{ fontSize: "1.7rem", fontWeight: "700", color: "white" }}>
                      Color Prediction
                    </Typography>
                    <Typography align='center' sx={{ fontSize: "1.4rem", fontWeight: "700", color: "white" }}>
                      Admin Panel
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


                  
                <Box className="RemoveScroll" sx={{ overflow: "scroll",}}>
                  <Box sx={{ display: "flex", }}>
                    {
                      chooseGameData.map((ele) => {
                        return (
                          <Box key={ele.gameId} >
                            <Box sx={{ pt: "15px", pl: "15px", height: "200px", width: "135px", cursor: "pointer", backgroundImage: `url(${ele.img})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }} onClick={()=>{handleAdminGameSelector(ele.gameId)}}>

                              <Box sx={{ height: "60%" }}>
                                <Typography sx={{ color: "white", fontSize: "1rem", fontWeight: "700", mt: "25px" }}>
                                  {ele.title}
                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "1rem", fontWeight: "700" }}>
                                  {ele.number}
                                </Typography>

                                <Typography sx={{ color: "white", fontSize: "0.8rem", fontWeight: "700", mt: "13px", color: "#9e9e9e" }}>
                                  {ele.minuteGame1}
                                </Typography>
                                <Typography sx={{ color: "white", fontSize: "0.8rem", fontWeight: "700", lineHeight: "13px", color: "#9e9e9e", width: "80%" }}>
                                  {ele.minuteGame2}
                                </Typography>
                              </Box>
                              <Box sx={{ display: "flex", justifyContent: "center", ml: "-15px" }}>
                                <Button variant='contained' sx={{ display: "flex", alignItems: "center", letterSpacing: "-1px", color: "#424242", bgcolor: "#cfd8dc", borderRadius: "25px", p: "3px 13px", fontWeight: "600" }}>Play Now <ArrowForwardIcon sx={{ color: "black", fontSize: "15px" }} /></Button>
                              </Box>
                            </Box>
                          </Box>

                        )
                      })
                    }
                  </Box>
                </Box>


                 <Grid container spacing={2} sx={{p:"10px"}}>
                     <Grid item xs={12}>
                     <Typography sx={{ fontSize: "1.2rem", fontWeight: "700", color: "white" }}>
                       Admin Controls
                    </Typography>
                     </Grid>

                     {
                      adminControls.map((ele)=>{
                        return(
                          <Grid key={ele.id} item xs={6}>
                              <Box sx={{borderRadius:"0px 20px 0px 20px",bgcolor:ele.Color,cursor:"pointer"}}>
                               <Typography align='center' sx={{p:"10px",color:"white",fontSize:"1rem",fontWeight:"600"}}>
                                {ele.title}
                               </Typography>
                              </Box>
                          </Grid>
                        )
                      })
                     }

                 </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AdminHomePage