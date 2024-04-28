import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Header from "../../../components/Header/Header";
import ProductDetail from "./ProductDetail";
import Footer from "../../../components/Footer/Footer";
import { ProductDetailProvider } from "../../../components/Context/ProductDetailContext";
import { ProductProvider } from "../../../components/Context/ProductContext";
import MyProductDetail from "./MyProductDetail";

const ProductDetailMain = () => {
  return (
    <Box>
      <Header />
      {/* <ProductDetailProvider> */}
      <MyProductDetail />
      {/* </ProductDetailProvider> */}
      <Box sx={{ marginTop: "50px" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetailMain;
