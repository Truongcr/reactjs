import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const MainProduct = (prop) => {
  const [products, setProducts] = useState([]);
  const [isClickedProduct, setIsClickedProduct] = useState(false);

  // useEffect(() => {
  //   console.log("load category");
  //   // Gọi API hoặc thực hiện các tác vụ sau khi render
  //   fetch("http://localhost:8086/api/product/get-all")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setProducts(result);
  //     });
  // }, []);

  const handleClickProduct = (event) => {
    setIsClickedProduct(!isClickedProduct);
  };

  const formattedAmount = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export default MainProduct;
