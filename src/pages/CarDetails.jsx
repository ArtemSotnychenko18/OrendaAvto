import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Audi A4",
    pricePerDay: 90,
    photo:  "https://images.prom.ua/1503743556_1503743556.jpg?PIMAGE_ID=1503743556",
    description: "2.0 TDI 2016 року",
  },
  {
    id: 2,
    name: "Mazda 6",
    pricePerDay: 50,
    photo: "https://i.infocar.ua/img/mats/11234/ins/1620986357162.jpg",
    description: "	2.0 SKYACTIV-G 2018 року",
  },
  {
    id: 3,
    name: "Toyota Camry",
    pricePerDay: 160,
    photo: "https://cdn.riastatic.com/photosnew/auto/newauto_photos/toyota_camry__754154fx.jpg",
    description: "2.5i 2024 року",
  }
];

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

   const car = cars.find((c) => c.id.toString() === id);
  if (!car) {
    return <Typography sx={{ mt: 4, textAlign: "center" }}>Автомобіль не знайдено</Typography>;
  }

  return (
    <Container maxWidth= "md" sx={{ mt: 4 }}>
      <Card
        raised
           sx={{
          borderRadius: 4,
          boxShadow: 3,
          transition: "transform 0.2s",
          '&:hover': { transform: "translateY(-5px)", boxShadow: 6 }
        }}
      >
        <CardMedia
          component= "img"
          height= "400"
          image={car.photo}
          alt={car.name}
          sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {car.name}
          </Typography>
          <Typography color="text.secondary" paragraph fontSize={18}>
            {car.description}
            </Typography>
          <Typography variant="h6">
            Ціна: {car.pricePerDay}$/день
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant= "contained"
              color="primary"
              onClick={() => navigate(`/cars/${car.id}/rent`)}
            >
                Орендувати
            </Button>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Назад
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CarDetails;
