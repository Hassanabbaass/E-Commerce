import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const firstDiv = {
    margin: '4rem'
}

const secondDiv = {
    margin: '2rem'
}

const contactUsButtonStyle = {
    backgroundColor: "black",
    width: '30%',
    height: '120%'
}


const ContactUs = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <div style={firstDiv}>
                    <h2>Contact Us</h2>
                    <p><LocationOnIcon/>   Beirut, Lebanon</p>
                    <p><PhoneIcon/>   +961 81724460</p>
                    <p><EmailIcon/>   Hassanabbascontact@gmail.com</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
    
                <Grid container spacing={2} style={secondDiv}>
                    <Grid item xs={12}>
                        <h2>Email Us</h2>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField style={{width:'100%'}} id="outlined-basic" label="Name" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField style={{width:'100%'}} id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField style={{width:'100%'}}
                            id="outlined-multiline-static"
                            label="Your Message"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid style={{display: "flex", justifyContent: "center", alignItems: "center",}} item xs={12}>
                        <Button style={contactUsButtonStyle} variant="contained">Send</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    </div>
  )
}

export default ContactUs