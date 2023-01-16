import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const divStyle = {
    margin: '2rem',
    width: '70%',
    boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)'
}

const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const inputsStyle = {
    margin: '1rem', 
    width: '50%'
}

const buttonStyle = {
    margin: '2rem',
    backgroundColor: "#FA8128",
}

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <Grid style={divStyle} container spacing={0}>
            <Grid style={itemStyle} item xs={12}>
                <h2>Login</h2>
            </Grid>
            <Grid style={itemStyle} item xs={12}>
                <TextField style={inputsStyle} id="outlined-multiline-flexible" label="Email" multiline maxRows={4}/>
            </Grid>

            <Grid style={itemStyle} item xs={12}>
                <FormControl style={inputsStyle} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Grid>

            <Grid style={itemStyle} item xs={12}>
                <Button style={buttonStyle} variant="contained">Submit</Button>
            </Grid>
    </Grid>
  )
}

export default Login