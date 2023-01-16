import React from 'react'
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import loginRegisterPicture from '../assets/loginRegisterPicture.jpg'
import Login from '../components/Login';
import Register from '../components/Register';

const pageStyle = {

}

const picDivStyle = {
    height:'80vh',
    width:'34vw',
    margin:'1rem'
}

const imageStyle = {
    height:'100%',
    width:'100%',
}

const formDivStyle = {
    margin: '1rem',
    height:'80vh',
    borderRadius: '1rem',
    backgroundColor: '#fcf8f5',

    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)'
}

const toggleButtonGroupStyle = {
    margin: '1rem',
}

const toggleBtnStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
}


const LoginRegister = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  return (
    <div style={pageStyle}>
        <Grid container spacing={0}>

            <Grid item xs={4} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
                <div style={picDivStyle}>
                    <img style={imageStyle} src={loginRegisterPicture} alt=''/>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div style={formDivStyle}>
                    <ToggleButtonGroup style={toggleButtonGroupStyle} value={alignment} exclusive onChange={handleChange} aria-label="Platform">

                        <ToggleButton style={toggleBtnStyle} value="Register">Register</ToggleButton>
                        <ToggleButton style={toggleBtnStyle} value="Login">Login</ToggleButton>

                    </ToggleButtonGroup>
                    {alignment==='Login' ? <Login/> : <Register/>}
                </div>
            </Grid>

        </Grid>
    </div>
  )
}

export default LoginRegister