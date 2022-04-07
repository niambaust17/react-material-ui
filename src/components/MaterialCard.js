import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

const MaterialCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="random-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Demo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            maximus nisl. Sed eget sapien venenatis, vestibulum mi eget,
            malesuada mauris. Phasellus nisl augue, dictum at nunc nec, dictum
            viverra nulla. In dictum a risus ut pretium. Nullam vehicula id
            tortor ut hendrerit. Nam id scelerisque elit. Sed ut augue luctus,
            hendrerit arcu et, luctus neque. Nunc id lacus ex. Proin tincidunt
            massa ut facilisis porta. Pellentesque dictum magna sit amet
            molestie pulvinar. In hac habitasse platea dictumst.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MaterialCard;
