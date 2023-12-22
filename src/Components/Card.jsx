import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function MultiActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <button>View</button> 
        </Button>
      </CardActions>
    </Card>
  );
}

export default function MultiActionAreaCardGrid() {
  const cardData = [
    {
      image: 'https://media.istockphoto.com/id/534362613/photo/gardening.jpg?s=612x612&w=0&k=20&c=5uM6WYUqgX67aWIdqwUSl5D2eNxHMrAXC9HwvSEVi0o=',
      
      
    },
    {
      image: 'https://img.freepik.com/premium-photo/collection-various-house-plants-gardening-gloves-potting-soil-trowel-white-wooden-background-potting-house-plants-background_93675-56639.jpg',
      
    },
    {
      image: 'https://www.ugaoo.com/cdn/shop/files/MG_0155.jpg?v=1689225936&width=1500',
      
    },
    {
      image: 'https://m.media-amazon.com/images/I/71iKI7a3r5L.jpg',
      
    },
    
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RTWuCwsWMcAHi22BsNXTr3NYLHQEhNJ0ew&usqp=CAU',
      
    },
    
    {
      image: 'https://tiimg.tistatic.com/fp/1/004/986/custom-gardening-water-gun-805.jpg',
      
    },
    
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MultiActionAreaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}