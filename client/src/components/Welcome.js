import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import WelcomeImage from '../assets/EcomHome.png'


const imageStyle = {
    height:"100vh",
    width:"48vw"
}

const imageDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
}

const WelcomeDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    padding: "2rem"
}

const WelcomeTitle = {
    fontFamily: `'Lucida Sans Unicode', 'Lucida Grande', sans-serif`,
    color: '#FA8128',
}

const WelcomeParagraph = {
    fontFamily: `'Lucida Sans Unicode', 'Lucida Grande', sans-serif`
}

const WelcomeButton = {
    backgroundColor: "#FA8128",
    width: "20rem",
}

const Welcome = () => {
  return (
    <div>
    <Grid container spacing={2}>
        <Grid lg={6} md={8}>
            <div style={WelcomeDiv}>
                <h1 style={WelcomeTitle}>Welcome To Bonelle E-Commerce</h1>
                <Button style={WelcomeButton} variant="contained">Get Started</Button>
                <p style={WelcomeParagraph}>
                    Welcome to my ecommerce website! Here, you can browse and purchase a variety of products.
                    I built this website using the MERN stack (MongoDB, Express, React, and Node.js)
                    to showcase my skills in full-stack web development. 
                    Thank you for visiting and I hope you find something you like!
                </p>
            </div>
        </Grid>
        <Grid lg={6} md={4} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
            <div style={imageDiv}>
                <img alt='' style={imageStyle} className='WelcomeImage' src={WelcomeImage} />
            </div>
        </Grid>
    </Grid>
    </div>
  )
}

export default Welcome