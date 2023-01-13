import React from 'react'
import Button from '@mui/material/Button';

import allImage from '../assets/allimage.jpg'

const divStyle = {
    backgroundImage: `url(${allImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding: "1rem 2rem",
    height: "70vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const allButtonStyle = {
    backgroundColor: '#FA8128',
    width: '30%',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: "0.5rem",
    border: "0.08rem solid black",
}

const All = () => {
  return (
    <div style={divStyle}>
        <Button style={allButtonStyle} variant="contained">BROWSE ALL</Button>
    </div>
  )
}

export default All