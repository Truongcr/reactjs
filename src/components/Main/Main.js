import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { ProductContext } from "../Context/ProductContext";
import ProductContent from "../../features/Product/ProductContent";

const Main = (props) => {
  const [products, setProducts] = useState([]);

  const context = useContext(ProductContext);
  // console.log("okokokok" + productContext);

  return (
    <Box display={{ width: "100%" }}>
      <Box
        component="img"
        src="/images/imageBackgroud.jpg"
        sx={{ display: "flex", width: "100%" }}
      ></Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "black",
          boxSizing: "border-box",
        }}
      > */}
      <Box
        sx={{
          display: "flex",
          // width: "80%",
          justifyContent: "center",
          alignItems: "center",
          // padding: "20px 20px 20px 20px",
          position: "relative",
          boxSizing: "border-box",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              fontSize: "30px",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              position: "relative",
              fontWeight: "bold",
              padding: "10px",
              // color: "white",
            }}
          >
            SẢN PHẨM NỔI BẬT NHẤT
          </Typography>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            margin: "20px",
            boxSizing: "border-box",
            position: "relative",
            justifyContent: "center",
            textAlign: "center",
            // color: "white",
          }}
        ></Box> */}
        <Box
          sx={{
            display: "flex",
            boxSizing: "border-box",
            position: "relative",
            width: "100%",
            color: "white",
          }}
        >
          <ProductContent
            products={context.products}
            categoryId={props.categoryid}
            style={context.styleProduct}
          />
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default Main;
