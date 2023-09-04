import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';


const socket = openSocket("http://137.184.122.0:5000",{
    transports: ["websocket"],
  });

function SocketFile() {
    const [timerData,setTimerData]=useState()
    
    useEffect(() => {
       
        socket.on('connection', () => {
          console.log('Connected to server');
        });

        socket.on('timer', (timestamp) => {
            setTimerData(timestamp)
        //   console.log(timestamp);
        });
        
        socket.on('disconnect',(resp)=>{
            console.log("server disconnected",resp)
        });
        
      }, []); 
      console.log(timerData)
  return (
    <Box>
      <Typography>Socket.io React Client</Typography>
     
    </Box>
  );
}

export default SocketFile;