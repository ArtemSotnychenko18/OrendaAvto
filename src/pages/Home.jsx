import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Audi A4",
    pricePerDay: 90,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/2020_Audi_A4_S_Line_35_TDi_S-A_facelift_2.0_Front.jpg/1920px-2020_Audi_A4_S_Line_35_TDi_S-A_facelift_2.0_Front.jpg"
  },
  {
    id: 2,
    name: "Mazda 6",
    pricePerDay: 50,
    photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2018_Mazda6_Sport_NAV%2B_Diesel_2.2_Front.jpg/1920px-2018_Mazda6_Sport_NAV%2B_Diesel_2.2_Front.jpg"
  },
  {
    id: 3,
    name: "Toyota Camry",
    pricePerDay: 160,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2025_Toyota_Camry_Hybrid_SE_Upgrade_AWD_in_Midnight_Black_Metallic%2C_front_right%2C_2024-11-06.jpg/1920px-2025_Toyota_Camry_Hybrid_SE_Upgrade_AWD_in_Midnight_Black_Metallic%2C_front_right%2C_2024-11-06.jpg"
  }
];

function Home() {
  return (
    <Container maxWidth="md" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
     

      <Box display="flex" flexDirection="column" gap={4}>
        {cars.map((car) => (
           <Card
            key={car.id}
            raised
            sx={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 3,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: 6
              }
            }}
          >
            <CardMedia
              component = "img"
              image={car.photo}
              alt={car.name}
              sx={{
                width: "100%",
                height: 260,
                objectFit: "cover"
              }}
            />
            <CardContent sx={{ backgroundColor: "#fafafa" }}>
              <Typography variant="h6" gutterBottom>
                {car.name}
              </Typography>
              <Typography color="text.secondary">
                {car.pricePerDay}$/день
              </Typography>
              <Button
                variant ="contained"
                color= "primary"
                component={Link}
                to={`/cars/${car.id}`}
                sx={{ mt: 2 }}
              >
                Детальніше
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Home;
