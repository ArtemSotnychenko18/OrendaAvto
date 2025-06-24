import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container, Typography, TextField, Button, Box, Paper
} from "@mui/material";

const cars = [
  { id: 1, name: "Audi A4", pricePerDay: 50 },
  { id: 2, name: "Mazda 6", pricePerDay: 40 },
  { id: 3, name: "Toyota Camry", pricePerDay: 60 }
];

function RentalOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id.toString() === id);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Замовлення відправлено!");
    navigate("/");
  };

  if (!car) {
    return <Typography>Автомобіль не знайдено</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Замовлення оренди: {car.name}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Ваше ім'я"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Телефон"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Дата початку"
            name="startDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Дата завершення"
            name="endDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">
              Підтвердити замовлення
            </Button>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Назад
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default RentalOrder;
