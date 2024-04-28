import React from "react";
import AddProduct from "./AddProduct";
import { Box, Typography, Button } from "@mui/material";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const AddProductMain = () => {
  return (
    <Box>
      <Box sx={{ position: "sticky", top: "0", zIndex: 1000 }}>
        <Header />
      </Box>

      <AddProduct />
      <Footer />
    </Box>
  );
};

export default AddProductMain;
