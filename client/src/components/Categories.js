import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

import categoryDummy from '../assets/categoryDummy.jpg'

const categoryButtonStyle = {
    backgroundColor: "#FA8128"
}
const cardActionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const cardContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}

const Categories = () => {

    let numberOfItems = ['0','1','2','3','4','5'];

  return (
    <div>
        <h2>Shop By Category</h2>
     <Grid container spacing={2}>
        {
            numberOfItems.map((items, i) => (
            <Grid key={i} item sm={4} md={3}>
                <Card sx={{ maxWidth: 345, minWidth:210 }}>
                    <CardMedia
                        sx={{ height: 140, display: { xs: 'none', sm: 'none', md: 'block' } }}
                        image={categoryDummy}
                    />
                    <CardContent style={cardContentStyle}>
                        <Typography gutterBottom variant="h5" component="div">
                        Category {i}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Category Description {i}
                        </Typography>
                    </CardContent>
                    <CardActions style={cardActionStyle}>
                        <Button style={categoryButtonStyle} variant="contained">Shop Category</Button>
                    </CardActions>
                </Card>
            </Grid>
            ))
        }
        

      </Grid>
    </div>
  )
}

export default Categories