import React from "react";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <Card>
      <CardMedia component= "img" height= "140" image={car.photo} alt={car.name} />
      <CardContent>
        <Typography variant= "h6">{car.name}</Typography>
        <Typography color="text.secondary">
          {car.pricePerDay}$/день
        </Typography>
        <Button component={Link} to={`/cars/${car.id}`} variant="contained" color="primary" style={{ marginTop: "1rem" }}>
          Детальніше
         </Button>
      </CardContent>
    </Card>
  )
}

export default CarCard;