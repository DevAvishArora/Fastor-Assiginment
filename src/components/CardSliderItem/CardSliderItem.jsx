
import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const CardSliderItem = ({ image, title, location }) => {

  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent style={{width:"155px", height:"60px"}}>
        <Typography variant="h6" component="div" style={{fontSize:"15px" , fontWeight:500}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.location_locality}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.state_name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardSliderItem;
