import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import RentalOrder from "./pages/RentalOrder"; 
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Tooltip
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Оренда Авто Онлайн
        </Typography>
        <Tooltip title="Контакти">
          <IconButton color="inherit">
            <ContactMailIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white", py: 3, mt: "auto" }}>
      <Container maxWidth="md">
        <Typography align="center" variant="body1">
          © {new Date().getFullYear()} Оренда Авто. Всі права захищено.
        </Typography>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/cars/:id/rent" element={<RentalOrder />} 
            /> {}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
