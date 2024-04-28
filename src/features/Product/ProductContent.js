import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Button, TextField, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductContext } from "../../components/Context/ProductContext";

const ProductContent = (prop) => {
  const productContext = useContext(ProductContext);

  const formattedAmount = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "30px 180px 30px 180px ",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {prop.products.map((item) => (
          <Link
            key={item.productId}
            to={`/product-detail/${item.productUrl}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              key={item.productId}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
                backgroundColor: "#FFEBCD",
                margin: "12px",
                paddingBottom: "20px",
              }}
              onClick={() => productContext.handleClickProduct(item.productId)}
            >
              <Box
                component="img"
                src={item.image}
                sx={{
                  width: "230px",
                  height: "250px",
                  margin: "10px 10px",
                }}
              ></Box>
              <Typography sx={{ color: "black" }}>
                {item.productName}
              </Typography>
              <Rating name="simple-controlled" value={5} readOnly />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <Typography sx={{ display: "flex", color: "black" }}>
                  {formattedAmount.format(item.price)}
                </Typography>
                <Typography sx={{ display: "flex", color: "black" }}>
                  Đã bán 600
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ProductContent;
