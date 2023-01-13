import React from 'react'

import IconButton from '@mui/material/IconButton';

import StoreIcon from '@mui/icons-material/Store';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const footerStyle = {
    backgroundColor: "#FA8128",
    position:"relative" ,
    bottom:'0', 
    left:'0', 
    right:'0',
    marginTop: '1rem',
    padding: '1rem',
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
}

const firstContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const secondContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const thirdContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const storeIconStyle = {
    fontSize: '2rem'
}

const buttonStyle = {
    borderRadius: '50%',
    padding: '1rem',
    color: 'black',
}


const Footer = () => {
  return (
    <div style={footerStyle}>

        <div style={firstContainer}>
            <StoreIcon style={storeIconStyle}/>
            <h2> Bonelle</h2>
        </div>

        <div style={secondContainer}>
            <IconButton variant="outlined" style={buttonStyle}><FacebookIcon/></IconButton>
            <IconButton variant="outlined" style={buttonStyle}><TwitterIcon/></IconButton>
            <IconButton variant="outlined" style={buttonStyle}><InstagramIcon/></IconButton>
            <IconButton variant="outlined" style={buttonStyle}><LinkedInIcon/></IconButton>
        </div>

        <div style={thirdContainer}>
            <CopyrightIcon/>
            <p>2023 Bonelle. All Rights Reserved</p>

        </div>
        
        
    </div>
  )
}

export default Footer